package main

import (
	"fmt"
	"github.com/gorilla/websocket"
	"log"
	"net/http"
	"strconv"
)

type Client struct {
	uid int64
	conn *websocket.Conn
	send chan []byte
	center *CenterLogic
}

var upgrader = websocket.Upgrader{}

func (c *Client)readPump(){
	for {
		_,message,err := c.conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err,websocket.CloseGoingAway,websocket.CloseAbnormalClosure){
				log.Printf("error: %v",err)
			}
			break
		}
		// todo read the message
		fmt.Println("readPump read:",string(message))
		c.center.message<-(message)
	}
}

func (c *Client)writePump(){
	for {
		select {
		case message,_ := <-c.send:
			fmt.Println("writePump====",message)
			c.conn.WriteMessage(websocket.TextMessage,message)
			//if !ok {
			//	c.conn.WriteMessage(websocket.CloseMessage,[]byte{})
			//	return
			//}
			//w,err := c.conn.NextWriter(websocket.TextMessage)
			//if err != nil {
			//	return
			//}
			//w.Write(message)
		}
	}
}

func serverWs(center *CenterLogic,w http.ResponseWriter,r * http.Request){
	conn,err := upgrader.Upgrade(w,r,nil)
	if err != nil {
		log.Println(err)
		return
	}


	fmt.Println(r.URL)
	vars := r.URL.Query();
	id := vars["id"][0]
	fmt.Println("conncted ================",id)
	uid,_ := strconv.ParseInt(id,10,64)
	client:= &Client{conn:conn,send:make(chan []byte,1024),uid:uid,center:center}

	(*DBmap)[uid] = client
	fmt.Println("seeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",(*DBmap)[uid].uid)
	go client.writePump()
	go client.readPump()
}