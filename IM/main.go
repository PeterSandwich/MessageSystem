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
	http.Handle("/static/", staticFileHandler())
	//http.HandleFunc("/", indexFileServer)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		hub.ServeWs(w, r)
	})
	http.HandleFunc("/upload", uploadFileHandler())
	fs := http.FileServer(http.Dir(uploadPath))
	http.Handle("/files/", http.StripPrefix("/files", fs))
	Logger.Info("IM Server Start at 9988")
	go hub.Run(Logger)
	if err := http.ListenAndServe(":9988", handler); err != nil {
		Logger.Panic("IM Server " + err.Error())
	}
}

