package dbops

import (
	"MessageSystem/IM/config"
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
	dbConn,err =  sql.Open("postgres", config.PsqlUrlCfg())
	if err != nil {
		panic(err.Error())
	}
	logger,_= zap.NewDevelopment()
	logger.Debug(config.PsqlUrlCfg())
}