package main

import (
	pb "./protocol/protoc"
	"database/sql"
	_ "github.com/lib/pq"
	"github.com/satori/go.uuid"
	log "github.com/sirupsen/logrus"
	"strconv"
)

func CheckLogin(name string) (UserInfo, error) {
	var info UserInfo
	info.img_url = ""
	var URL sql.NullString
	err := DB_conn.QueryRow(`select id,pw,headimg from users where name=$1 `, name).Scan(&info.id, &info.RightPW, &URL)
	if URL.Valid {
		info.img_url = URL.String
	}
	return info, err
}

func SignUp(name, psd string) (int64, error) {
	var userid int64
	err := DB_conn.QueryRow(`insert into users(name,pw) values ($1,$2) RETURNING id`, name, psd).Scan(&userid)
	return userid, err
}

///////////////////////////////////////////////////////////

// 单对单聊天存入数据库， 离线数据和数据漫游
func C2CStore(in *pb.Message) (int64, error) {
	var msg_id int64
	hash_num := int((in.GetFrom() + in.GetTo()) % 4)
	table_name := "im_message_recieve_" + strconv.Itoa(hash_num)
	err := DB_conn.QueryRow("insert into "+table_name+"(msg_from,msg_to,content,content_type,arrive_time,isgroup) values ($1,$2,$3,$4,$5,$6) RETURNING id",
		in.GetFrom(), in.GetTo(), in.GetContent(), 1, in.Time, false).Scan(&msg_id)
	if err != nil {
		return 0, err
	}
	return msg_id, nil
}

// 单对单聊天存入数据库， 离线数据和数据漫游
func C2CCounter(in *pb.Message) error {
	hash_num := int(in.GetTo() % 4)
	table_name := "im_message_counter_" + strconv.Itoa(hash_num)
	_, err := DB_conn.Exec("UPDATE "+table_name+" set counter = counter +1 where master = $1 and sender = $2", in.GetTo(), in.GetFrom())
	if err != nil {
		log.Error("* Counter wrong: " + err.Error())
	}
	return err
}

// 聊天存入数据库， 离线数据和数据漫游
func C2GStore(in *pb.Message) (int64, error) {
	var msg_id int64
	hash_num := int(in.GetGroup() % 4)
	table_name := "im_message_recieve_" + strconv.Itoa(hash_num)
	err := DB_conn.QueryRow("insert into "+table_name+"(msg_from,msg_to,content,content_type,arrive_time,isgroup) values ($1,$2,$3,$4,$5,$6) RETURNING id",
		in.GetFrom(), in.GetGroup(), in.GetContent(), 1, in.Time, true).Scan(&msg_id)
	if err != nil {
		return 0, err
	}
	return msg_id, nil
}

func GetGroupMember(gid int64) ([]int64, error) {
	var id int64
	idlist := []int64{}
	result, e := DB_conn.Query("select uid from membership where gid = $1", gid)
	if e != nil {
		return nil, e
	}
	for result.Next() {
		result.Scan(&id)
		idlist = append(idlist, id)
	}
	return idlist, nil
}

// 创建群
func CreateGroupStore(from int64, name string) (int64, string, error) {
	var gid int64
	if len(name) == 0 {
		uid, _ := uuid.NewV4()
		name = "群聊" + string((uid.Bytes())[:8])
	}
	err := DB_conn.QueryRow("insert into groups(name,creater,owner) values($1,$2,$3) RETURNING id",
		name, from, from).Scan(&gid)
	if err != nil {
		log.Error("* create group wrong:", err)
		return 0, "", err
	}
	return gid, name, nil
}

func GroupAddMembersStore(gid int64, uidlist []int64) {
	for _, uid := range uidlist {
		_, err := DB_conn.Exec("insert into membership(gid,uid) values($1,$2) ", gid, uid)
		if err != nil {
			log.Error("* when insert into membership: ", err.Error())
		}
		sid := uid % 4
		table_name := "im_message_counter_" + strconv.FormatInt(sid, 10)
		_, err = DB_conn.Exec("insert into "+table_name+" (master,sender,counter,isgroup,last_ack_msg) values ($1,$2,$3,$4,$5)",
			uid, gid, 0, true, 0)
		if err != nil {
			log.Error("* when insert into ", table_name, err.Error())
		}
	}

}

func DeleteMsgById(mid int64) error {
	sid := strconv.FormatInt((mid-1)%4, 10)
	table_name := "im_message_recieve_" + sid
	_, err := DB_conn.Exec("delete from "+table_name+" where id=$1", mid)
	return err
}

func UpdateCounterTable(msgid, from, to int64, isgroup bool) error {
	table_name := "im_message_counter_"
	hash_num := int(from % 4)
	table_name = table_name + strconv.Itoa(hash_num)
	_, err := DB_conn.Exec("update "+table_name+" set counter=0,last_ack_msg=$1 where master=$2 and sender = $3 and isgroup=$4",
		msgid, from, to, isgroup)
	return err

}

func InsertCouterTable(from, to int64) error {
	hash_num := int(from % 4)
	table_name := "im_message_counter_" + strconv.Itoa(hash_num)
	_, err := DB_conn.Exec("insert into "+table_name+" (master,sender,counter,isgroup,last_ack_msg) values($1,$2,$3,$4,$5)",
		from, to, 0, false, 0)
	if err != nil {
		return err
	}

	hash_num = int(to % 4)
	table_name = "im_message_counter_" + strconv.Itoa(hash_num)
	_, err = DB_conn.Exec("insert into "+table_name+" (master,sender,counter,isgroup,last_ack_msg) values($1,$2,$3,$4,$5)",
		to, from, 0, false, 0)
	if err != nil {
		return err
	}
	return nil
}

//func InsertGroupCouterTable(gid int64, uidlist []int64){
//	for _,uid := range uidlist {
//		hash_num := int64(uid%4)
//		table_name := "im_message_counter_"+strconv.FormatInt(hash_num,10)
//		_,err:=DB_conn.Exec("insert into "+table_name +" (master,sender,counter,isgroup,last_ack_msg) values($1,$2,$3,$4,$5)",
//		uid,gid,1,true,0)
//		if err !=nil {
//			log.Error("* InsertGroupCouterTable db wrong: ",err.Error())
//		}
//	}
//}

func GetUserByName(name string) ([]UserItem, error) {
	var Item UserItem
	list := make([]UserItem, 0)
	name = "%" + name + "%"
	rows, err := DB_conn.Query("select id,name,headimg from users where name like $1", name)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		err := rows.Scan(&Item.ID, &Item.Name, &Item.Img_url)
		if err != nil {
			log.Error("* when userlist scan: " + err.Error())
		}
		list = append(list, Item)
	}

	return list, nil
}

func GetChatListDB(myid int64) ([]ChatItem, error) {
	var Item ChatItem
	list := make([]ChatItem, 0)
	hash_num := int(myid % 4)
	table_name := "im_message_counter_" + strconv.Itoa(hash_num)
	rows, err := DB_conn.Query("select  sender,counter,id,name,headimg from "+table_name+", users where master = $1 and id=sender and isgroup=false", myid)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		err := rows.Scan(&Item.Sender, &Item.Counter, &Item.Id, &Item.Name, &Item.Headimg)
		Item.Isgroup = false
		if err != nil {
			log.Error("* when chatlist c2c scan: " + err.Error())
		}
		list = append(list, Item)
	}

	rows, err = DB_conn.Query("select  sender,counter,id,name,headimg from "+table_name+", groups where master = $1 and id=sender and isgroup=true", myid)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		err := rows.Scan(&Item.Sender, &Item.Counter, &Item.Id, &Item.Name, &Item.Headimg)
		Item.Isgroup = true
		if err != nil {
			log.Error("* when chatlist c2g scan: " + err.Error())
		}
		list = append(list, Item)
	}
	return list, nil
}

func HistrotyMessageDB(from, to int64, isgroup bool) ([]MessageItem, error) {
	var hash_num int64
	var Item MessageItem
	list := []MessageItem{}

	if isgroup {
		hash_num = int64(to % 4)
	} else {
		hash_num = int64((from + to) % 4)
	}
	table_name := "im_message_recieve_" + strconv.FormatInt(hash_num, 10)
	rows, err := DB_conn.Query("select id,msg_from,msg_to,content,content_type,arrive_time from "+table_name+
		" where isgroup=$3 and ((msg_from=$1 and msg_to=$2) or (msg_from=$2 and msg_to=$1))", from, to, isgroup)
	if err != nil {
		return nil, err
	}
	for rows.Next() {
		err := rows.Scan(&Item.Mid, &Item.From, &Item.To, &Item.Content, &Item.ContentType, &Item.Time)
		Item.Isgroup = isgroup
		if err != nil {
			log.Error("* when messagelist  scan: " + err.Error())
		}
		list = append(list, Item)
	}
	return list, nil
}
