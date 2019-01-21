package model

import (
	"database/sql"
	"github.com/gpmgo/gopm/modules/log"
	_ "github.com/lib/pq"
	"time"
)

type DbControl struct {
	Db *sql.DB
}

func NewDBconnect() *sql.DB{
	//connStr := "user=dbuser dbname=testdb sslmode=verify-full "
	connStr := "postgres://dbuser:319079@localhost/testdb"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic(err)
	}

	return db

}

func (D *DbControl) StoreLongTimeMsg(s Msg_receive)int64{
	var userid int64
	err := D.Db.QueryRow(`INSERT INTO im_message_recieve(msg_from, msg_to, msg_content,send_time)
	VALUES($1, $2, $3,$4) RETURNING msg_id`,s.From,s.To,s.Content,time.Now().Unix()).Scan(&userid)
	if err !=nil {
		log.Fatal("err in StoreLongTimeMsg ：%v\n",err)
	}
	return userid
}

//func (D *DbControl) GetLongTimeMsg(id int64)Msg_receive{
//	var userid int64
//	err := D.Db.QueryRow(`select  (msg_from, msg_to, msg_content,send_time) from im_message_recieve
//	where msg_t`,s.From,s.To,s.Content,20190101).Scan(&userid)
//	if err !=nil {
//		log.Fatal("err in StoreLongTimeMsg ：%v\n",err)
//	}
//	return userid
//}