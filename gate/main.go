package main

import (
	pb "../proto/protocol"
	"fmt"
	"github.com/golang/protobuf/proto"
	log "github.com/sirupsen/logrus"
	"golang.org/x/net/context"
	"io"
	"net/http"
	"os"
)

func init(){
	customFormatter := new(log.TextFormatter)
	customFormatter.FullTimestamp = true                    // 显示完整时间
	customFormatter.TimestampFormat = "2006-01-02 15:04:05" // 时间格式
	customFormatter.DisableTimestamp = false                // 禁止显示时间
	customFormatter.DisableColors = false                   // 禁止颜色显示
	log.SetFormatter(customFormatter)
	log.SetOutput(os.Stdout)
	log.SetLevel(log.DebugLevel)
}

func main() {

	log.Info("Server start...")
	go SubScriptRPC()
	http.HandleFunc("/ws", WebSocketHandler)
	http.HandleFunc("/api/login", loginHandle)
	http.HandleFunc("/api/signup",signUpHandle)
	http.HandleFunc("/api/quit", quitHandle)
	http.Handle("/static/", staticFileHandler())
	http.HandleFunc("/", indexFileServer)
	if err := http.ListenAndServe(":9876",nil); err!=nil {
		log.WithFields(log.Fields{"file":"gate/main.go","func":"main","where":"ListenAndServe:9876"}).Panicln(err.Error())
	}
}



func SubScriptRPC(){
	gate:=GetGateInstance()
	s := pb.NewToServerMsgClient(gate.Grpc_conn)
	stream,err:=s.ResponseToGate(context.Background(),&pb.EmptyRequest{})
	if err != nil {
		log.WithFields(log.Fields{"file":"gate/main.go","func":"SubScriptRPC","where":"ResponseToGate"}).Panicln(err.Error())
	}
	for {
		data, err := stream.Recv()
		if err == io.EOF {
			log.WithFields(log.Fields{"file":"gate/main.go","func":"SubScriptRPC","where":"stream.Recv"}).Warn(err.Error())
			break
		}
		if err != nil {
			log.WithFields(log.Fields{"file":"gate/main.go","func":"SubScriptRPC","where":"stream.Recv"}).
				Error("can't recieve message from IM RPC : "+err.Error())
			return
		}
		log.WithFields(log.Fields{"file":"gate/main.go","func":"SubScriptRPC","where":"stream.Recv"}).Debug(data)
		if c,ok := gate.UidToCli[data.MsgTo];ok {
			bytes, err := proto.Marshal(data)
			if err != nil {
				fmt.Println(err)
				continue
			}
			c.send <- bytes
		}else {
			log.WithFields(log.Fields{"file":"gate/main.go","func":"SubScriptRPC","where":"stream.Recv"}).
				Warnf("can't send message to the user[id=%v],maybe it offline",data.MsgTo)
		}

	}
}

