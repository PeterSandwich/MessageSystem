package main

import (
	pb "MessageSystem/proto/protocol"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"golang.org/x/net/context"
	"log"
	"time"
)

type Client struct {
	Conn *websocket.Conn
	Session string
	LastTime int64
	send chan []byte
}


// websocket read message from browser, and Unmarshal the protocolbuf to []byte
func (c *Client)readPump(){
	for {
		_,message,err := c.Conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err,websocket.CloseGoingAway,websocket.CloseAbnormalClosure){
				log.Printf("error: %v",err)
			}
			break
		}
		//  read the message
		go c.ParseMessageToRpc(message)
	}
}


//  send the message to browser
func (c *Client)writePump(){
	for {
		select {
		case message,_ := <-c.send:
			c.LastTime = time.Now().Unix()
			err := c.Conn.WriteMessage(websocket.BinaryMessage, message)
			if err !=nil {
				log.Println(err)
			}
		}
	}
}



func (c *Client)ParseMessageToRpc(message []byte){
	gate := GetGateInstance()
	data := &pb.MessageRequest{}
	err := proto.Unmarshal(message, data)
	if err != nil {
		log.Println("proto.Unmarshal(message, data) fail")
		return
	}
	s := pb.NewToServerMsgClient(gate.Grpc_conn)
	_, e := s.SendMsg(context.Background(), data)
	if e != nil {
		log.Println("s.SendMsg(context.Background(), data):",err)
	}
}