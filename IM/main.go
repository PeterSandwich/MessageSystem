package main

import (
	"MessageSystem/IM/config"
	"MessageSystem/IM/hub"
	"flag"
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


func init() {
	Logger, _ = zap.NewDevelopment()
	redisConn = redis.NewClient(&redis.Options{Addr: "localhost:6379", Password: "", DB: 0})
	flag.StringVar(&configFile,"config","./config/im.config","config file")
	flag.Parse()
	config.InitConfig(configFile)
}

func main() {
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

