package main

import (
	pb "../proto/protocol"
	"fmt"
	"github.com/golang/protobuf/proto"
	"golang.org/x/net/context"
	"io"
	"net/http"
)



func main() {

	// About Websocket
	go SubScriptRPC()
	http.HandleFunc("/ws", WebSocketHandler)
	http.HandleFunc("/api/login", loginHandle)
	http.HandleFunc("/api/signup",signUpHandle)
	http.HandleFunc("/api/quit", quitHandle)
	http.Handle("/static/", staticFileHandler())
	http.HandleFunc("/", indexFileServer)
	if err := http.ListenAndServe(":9876",nil); err!=nil {
		panic("http can't listen and serve to port 9876 detail: "+err.Error())
	}
}



func SubScriptRPC(){

	gate:=GetGateInstance()
	s := pb.NewToServerMsgClient(gate.Grpc_conn)
	stream,err:=s.ResponseToGate(context.Background(),&pb.EmptyRequest{})
	if err != nil {
		panic(err)
	}
	for {
		data, err := stream.Recv()
		if err == io.EOF {
			fmt.Println("RPC stream end!")
			break
		}
		if err != nil {
			fmt.Println("接收数据出错:", err)
			return
		}
		fmt.Println("客户端收到:", data)
		if c,ok := gate.UidToCli[data.MsgTo];ok {
			bytes, err := proto.Marshal(data)
			if err != nil {
				fmt.Println(err)
				continue
			}
			c.send <- bytes
		}else {
			fmt.Printf("找不到接收者id=%d,消息丢弃\n",data.MsgTo)
		}

	}
}

