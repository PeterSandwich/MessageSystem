package dbops

import (
	"MessageSystem/IM/config"
	"database/sql"
	_ "github.com/lib/pq"
	"go.uber.org/zap"
)

var (
	dbConn *sql.DB
	err error
	logger *zap.Logger
)



func InitDB(){
	//
	//sql.Open("postgres", "user=dbuser password=319079 dbname=test sslmode=disable")
	dbConn,err =  sql.Open("postgres", config.PsqlUrlCfg())
	if err != nil {
		panic(err.Error())
	}
	logger,_= zap.NewDevelopment()
	logger.Debug(config.PsqlUrlCfg())
}