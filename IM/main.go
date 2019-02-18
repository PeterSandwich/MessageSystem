package main

import (
	"MessageSystem/IM/hub"
	"github.com/go-redis/redis"
	"go.uber.org/zap"
	"net/http"
)

var (
	redisConn *redis.Client
	Logger *zap.Logger

)


func init() {
	Logger, _ = zap.NewDevelopment()
	redisConn = redis.NewClient(&redis.Options{Addr: "localhost:6379", Password: "", DB: 0})
}

func main() {
	// API 注册
	r := RegisterRouterHandlers()

	//中间件
	handler:=NewMiddleWareHandler(r)

	// 消息处理中心
	go hub.Run(Logger)

	// http监听服务开始
	Logger.Info("IM Server Start at 9988")
	if err := http.ListenAndServe(":9988", handler); err != nil {
		Logger.Panic("IM Server " + err.Error())
	}
}

