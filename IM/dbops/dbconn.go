package dbops

import (
	"database/sql"
	"go.uber.org/zap"
	_"github.com/lib/pq"
)

var (
	dbConn *sql.DB
	err error
	logger *zap.Logger
)

func init(){
	//
	//sql.Open("postgres", "user=dbuser password=319079 dbname=test sslmode=disable")
	dbConn,err =  sql.Open("postgres", "postgres://dbuser:319079@139.199.196.31/imdb?sslmode=disable")
	if err != nil {
		panic(err.Error())
	}
	logger,_= zap.NewDevelopment()
}