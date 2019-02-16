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
	r := RegisterRouterHandlers()
	handler:=NewMiddleWareHandler(r)

	go hub.Run(Logger)

	Logger.Info("IM Server Start at 9988")
	if err := http.ListenAndServe(":9988", handler); err != nil {
		Logger.Panic("IM Server " + err.Error())
	}
}

