package main

import (
	"MessageSystem/IM/hub"
	"go.uber.org/zap"
	"net/http"
)

var Logger *zap.Logger


func init() {
	Logger, _ = zap.NewDevelopment()
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

