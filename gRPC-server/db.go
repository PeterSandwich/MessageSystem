package main

import (
	"database/sql"
	"fmt"
	"github.com/go-redis/redis"
	_ "github.com/lib/pq"
	"strconv"
	"time"
	c2c "../proto/c2c"
	pb "../proto/protocol"
	c2g "../proto/c2g"
)

type DbControl struct {
	Db *sql.DB
}

func NewDBconnect() *sql.DB{
	connStr := "postgres://dbuser:319079@139.199.196.31/testdb"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic("sql can't open :"+err.Error())
	}
	return db
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 单对单聊天存入数据库， 离线数据和数据漫游
func (db *DbControl)C2CSendRequestStore(in *c2c.C2CSendRequest)(int64,error){
	var msg_id int64
	hash_num := int((in.GetFrom()+in.GetTo())%4)
	table_name := "im_message_recieve_"+strconv.Itoa(hash_num)
	date_time := time.Now().Unix()
	err := db.Db.QueryRow("insert into "+table_name+"(msg_from,msg_to,msg_content,send_time,msg_type) values ($1,$2,$3,$4,$5) RETURNING msg_id",
		in.GetFrom(),in.GetTo(),in.GetContent(),date_time,pb.MessageRequest_C2CSEND_REQUEST).Scan(&msg_id)
	if err != nil {
		return 0,err
	}
	return msg_id,nil
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// 群聊天存入数据库， 离线数据和数据漫游
func (db *DbControl)C2GSendRequestStore(in *c2g.C2GSendRequest)(int64,int64,error){
	var msg_id int64
	hash_num := int(in.GetGroup()%4)
	table_name := "im_message_recieve_"+strconv.Itoa(hash_num)
	date_time := time.Now().Unix()
	err := db.Db.QueryRow("insert into "+table_name+"(msg_from,groud_id,msg_content,send_time,msg_type) values ($1,$2,$3,$4,$5) RETURNING msg_id",
		in.GetFrom(),in.GetGroup(),in.GetContent(),date_time,pb.MessageRequest_C2GSEND_REQUEST).Scan(&msg_id)
	if err != nil {
		return 0,0,err
	}
	return msg_id,date_time,nil
}

// 存储群消息，写扩散，为每一个群成员记录群消息
func (db *DbControl)C2GSendSyncStore(in *c2g.C2GSendRequest,base_id,timestamp int64,MyRedis *redis.Client)([]int64,error){
	var uid_list []int64
	gid := in.GetGroup()
	redis_gid := "group"+strconv.FormatInt(in.Group,10)
	result, err := MyRedis.LRange(redis_gid, 0, -1).Result()
	if err != nil || len(result)==0 {
		row,err:=db.Db.Query("select uid from groupmember where gid=$1", gid)
		if err != nil {
			panic(err)
		}
		for row.Next() {
			var id int64
			row.Scan(&id)
			uid_list=append(uid_list,id)
			MyRedis.RPush(redis_gid,id)
		}
		if len(uid_list)==0 {
			// todo error
		}
		fmt.Println("RPush")
	}else{
		for _,v:=range result {
			id,_:=strconv.ParseInt(v,10,64)
			uid_list = append(uid_list,id)
		}
	}
	for _,v:=range uid_list {
		hash_num := int(v%4)
		table_name := "im_message_send_"+strconv.Itoa(hash_num)
		_, err := db.Db.Exec("insert into "+table_name+"(msg_from,msg_to,groud_id,msg_content,send_time,msg_type,delivered,base_id) values($1,$2,$3,$4,$5,$6,$7,$8)",
			in.GetFrom(), v, in.GetGroup(), in.GetContent(), timestamp, pb.MessageRequest_C2GSEND_REQUEST, 0,base_id)
		if err != nil {
			panic(err)
		}
	}
	return uid_list,nil
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 邀请他人入组
func (db *DbControl)GroupAddMembersStore(gid,uid int64)error{
	_,err := db.Db.Exec("insert into groupmember(gid,uid) values($1,$2) ",gid,uid)
	return err
}




// 建立群组
func (db *DbControl)CreateGroupStore(from int64,name string)(int64,error){
	var gid int64
	err := db.Db.QueryRow("insert into groups(gname,create_user,create_time,owner) values($1,$2,$3,$4) RETURNING gid",
		name,from,time.Now().Unix(),from).Scan(&gid)
	if err != nil {
		return 0,err
	}
	err = db.GroupAddMembersStore(gid, from)
	if err != nil {
		_, err := db.Db.Exec("delete from groups where gid = $1", gid)
		return 0,err
	}
	return gid,nil
}


