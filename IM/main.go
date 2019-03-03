package main

import (
	"MessageSystem/IM/config"
	"MessageSystem/IM/dbops"
	"MessageSystem/IM/hub"
	"MessageSystem/IM/session"
	"flag"
	"fmt"
	"github.com/go-redis/redis"
	"go.uber.org/zap"
	"net/http"
	"strconv"
)

var (
	redisConn *redis.Client
	Logger *zap.Logger
	configFile string

)

func init(){
	Logger, _ = zap.NewDevelopment()
	flag.StringVar(&configFile,"config","./config/im.config","config file")
	flag.Parse()
	fmt.Println("开始配置")
	config.InitConfig(configFile)
	fmt.Println("配置")
	redisConn = redis.NewClient(&redis.Options{Addr:config.RedisUrlCfg(),  Password: "", DB: 0})
}

func main() {


	hub.InitHup()
	dbops.InitDB()
	session.InitSession()
	// API 注册

	r := RegisterRouterHandlers()
	//中间件
	handler:=NewMiddleWareHandler(r)

	// 消息处理中心
	go hub.Run(Logger)

	// http监听服务开始
	Logger.Info("IM Server Start at "+strconv.Itoa(config.Port()))
	if err := http.ListenAndServe(":"+strconv.Itoa(config.Port()), handler); err != nil {
		Logger.Panic("IM Server " + err.Error())
	}
}

