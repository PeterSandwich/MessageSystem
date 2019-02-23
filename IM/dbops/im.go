package dbops

import (
	"errors"
	"github.com/satori/go.uuid"
	"strconv"
)

// 消息存储
func MessageStore(from,to int64, content string,content_type int,ctime int64, isgroup bool)(int64, error){

	if from <=0 || to <= 0 {
		logger.Warn("Illegal parameter 'from' and 'to' ,Make sure it is an integer and greater than 0")
		return -1,errors.New("Illegal parameter 'from' and 'to'")
	}

	if content_type<0 || content_type>2 {
		logger.Warn("Illegal parameter 'content_type' ,Make sure it is in [0,2]")
		return -1,errors.New("Illegal parameter 'content_type'")
	}

	var msg_id int64
	var table_name string
	if isgroup {
		table_name = "im_message_recieve_" + strconv.Itoa(int(to % 4))
	}else{
		table_name = "im_message_recieve_" + strconv.Itoa(int((from+to)%4))
	}

	err := dbConn.QueryRow("insert into "+table_name+"(msg_from,msg_to,content,content_type,arrive_time,isgroup) values ($1,$2,$3,$4,$5,$6) RETURNING id",
		from, to, content,content_type, ctime, isgroup).Scan(&msg_id)
	if err != nil {
		logger.Warn("insert message to database in MessageStore():"+err.Error())
		return -1, err
	}

	return msg_id, nil
}


// 消息记录，用于消息星标
func MessageCounter(sender,receiver int64) error {

	if receiver <=0 || sender <= 0 {
		logger.Warn("Illegal parameter 'receiver' and 'sender' ,Make sure it is an integer and greater than 0")
		return errors.New("Illegal parameter 'receiver' and 'sender'")
	}

	hash_num := int(receiver % 4)
	table_name := "im_message_counter_" + strconv.Itoa(hash_num)
	_, err := dbConn.Exec("UPDATE "+table_name+" set counter = counter +1 where master = $1 and sender = $2", receiver,sender)
	if err != nil {
		logger.Warn("insert message to database in MessageStore():"+err.Error())
	}
	return err
}

// 创建群
func CreateGroupStore(from int64, name string) (int64, string, error) {
	if from <=0  {
		logger.Warn("Illegal param 'from'")
		return -1,"", errors.New("Illegal param 'from'")
	}
	var gid int64
	if len(name) == 0 {
		uid, _ := uuid.NewV4()
		name = "群聊" + string((uid.Bytes())[:8])
	}
	err := dbConn.QueryRow("insert into groups(name,creater,owner) values($1,$2,$3) RETURNING id",
		name, from, from).Scan(&gid)
	if err != nil {
		logger.Error("new a group in CreateGroupStore() :"+err.Error())
		return 0, "", err
	}
	return gid, name, nil
}

// 群组添加成员
func GroupAddUsers(gid int64, uidlist []int64) error {
	for _, uid := range uidlist {
		_, err := dbConn.Exec("insert into membership(gid,uid) values($1,$2) ", gid, uid)
		if err != nil {
			logger.Warn("when insert into membership in GroupAddUsers(): "+err.Error())
		}
		sid := uid % 4
		table_name := "im_message_counter_" + strconv.FormatInt(sid, 10)
		_, err = dbConn.Exec("insert into "+table_name+" (master,sender,counter,isgroup,last_ack_msg) values ($1,$2,$3,$4,$5)",
			uid, gid, 0, true, 0)
		if err != nil {
			logger.Warn("when insert into "+table_name+": "+ err.Error())
		}
	}
	return nil
}

func DeleteMsgById(mid int64) error {
	sid := strconv.FormatInt((mid-1)%4, 10)
	table_name := "im_message_recieve_" + sid
	_, err := dbConn.Exec("delete from "+table_name+" where id=$1", mid)
	if err != nil {
		logger.Warn("database control in DeleteMsgById(): "+err.Error())
	}
	return err
}

func UpdateCounterTable( from, to int64, isgroup bool) error {
	if from <=0 || to <= 0 {
		logger.Warn("Illegal parameter 'from' and 'to' ,Make sure it is an integer and greater than 0")
		return errors.New("Illegal parameter 'from' and 'to'")
	}

	table := "im_message_counter_"+strconv.Itoa(int(from % 4))
	_, err := dbConn.Exec("update "+table+" set counter=0 where master=$1 and sender = $2 and isgroup=$3",
		  from,to, isgroup)
	if err != nil {
		logger.Warn("database control in DeleteMsgById(): "+err.Error())
	}
	return err

}

func NewChatSession(from, to int64) error {
	if from <=0 || to <= 0 {
		logger.Warn("Illegal parameter 'from' and 'to' ,Make sure it is an integer and greater than 0")
		return errors.New("Illegal parameter 'from' and 'to'")
	}

	hash_num := int(from % 4)
	table_name := "im_message_counter_" + strconv.Itoa(hash_num)
	_, err := dbConn.Exec("insert into "+table_name+" (master,sender,counter,isgroup,last_ack_msg) values($1,$2,$3,$4,$5)",
		from, to, 1, false, 0)
	if err != nil {
		logger.Warn("database control in InsertCouterTable(): "+err.Error())
		return err
	}

	hash_num = int(to % 4)
	table_name = "im_message_counter_" + strconv.Itoa(hash_num)
	_, err = dbConn.Exec("insert into "+table_name+" (master,sender,counter,isgroup,last_ack_msg) values($1,$2,$3,$4,$5)",
		to, from, 1, false, 0)
	if err != nil {
		logger.Warn("database control in InsertCouterTable(): "+err.Error())
		return err
	}
	return nil
}

func GetMessageArriveTime(mid int64)(time int64,err error){

	table_name := "im_message_recieve_" + strconv.Itoa((int)(mid-1)%4)
	err = dbConn.QueryRow("select arrive_time from "+table_name+" where id=$1", mid).Scan(&time)
	return
}
