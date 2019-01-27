package main

import (
	"database/sql"
	_ "github.com/lib/pq"
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

func (D *DbControl) CheckLogin(name string)(UserInfo,error){
	var info UserInfo
	info.img_url=""
	var URL sql.NullString
	err := D.Db.QueryRow(`select uid,password,img_url from users where name=$1 `,name).Scan(&info.id,&info.RightPW,&URL)
	if URL.Valid {
		info.img_url = URL.String
	}
	return info,err
}

func (D *DbControl) SignUp(name,psd string)(int64,error){
	var userid int64
	err := D.Db.QueryRow(`insert into users(name,password) values ($1,$2) RETURNING uid`,name,psd).Scan(&userid)
	return userid,err
}