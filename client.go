package main

import (
	"github.com/gorilla/websocket"
	log "github.com/sirupsen/logrus"
	"net/http"
	"strconv"
	"time"
)

const (
	// Time allowed to write a message to the peer.
	writeWait = 10 * time.Second

	// Time allowed to read the next pong message from the peer.
	pongWait = 60 * time.Second

	// Send pings to peer with this period. Must be less than pongWait.
	pingPeriod = (pongWait * 9) / 10

	// Maximum message size allowed from peer.
	maxMessageSize = 1024
)

type Client struct {
	Conn *websocket.Conn
	send chan []byte
}


func (c *Client) readPump() {
	defer func() {
		e := c.Conn.Close()
		if e != nil {
			log.Error("* Client Close wrong: "+e.Error())
		}
	}()

	c.Conn.SetReadLimit(maxMessageSize)
	_ = c.Conn.SetReadDeadline(time.Now().Add(pongWait))
	c.Conn.SetPongHandler(func(string) error { _ = c.Conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })
	for {
		_, message, err := c.Conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				log.Error("* read message find websocket had close: "+err.Error())
			}
			break
		}
		log.Debug("* websocket reading: ",message)
		Redis_conn.Publish("rawmessage",message)
	}

}


func (c *Client) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		e := c.Conn.Close()
		if e != nil {
			log.Error("* Client Close wrong: "+e.Error())
		}
	}()

	for {
		select {
		case message, ok := <-c.send:
			_ = c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
			if !ok {
				_ = c.Conn.WriteMessage(websocket.CloseMessage, []byte{})
				return
			}

			log.Debug("* client ready send to browser")

			err := c.Conn.WriteMessage(websocket.BinaryMessage, message)
			if err != nil {
				log.Error("* Client Write wrong: "+err.Error())
			}


		case <-ticker.C:
			_ = c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				return
			}
		}
	}
}


func ServeWs( w http.ResponseWriter, r *http.Request) {
	upgrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	uuids, err := r.Cookie("session")
	if err != nil {
		log.Error("* [ServeWs] get session in cookie wrong: ",err)
		return
	}
	s, err := Redis_conn.Get(uuids.Value).Result()
	if err != nil {
		log.Error("* [ServeWs] get session in Redis_conn wrong: ",err)
		return
	}
	id,_ := strconv.ParseInt(s,10,64)


	conn, err := upgrader.Upgrade(w, r, nil)
	if err != nil {
		log.Error("* WebSocket Upgrader wrong: "+err.Error())
		return
	}
	client := &Client{Conn: conn, send: make(chan []byte, 1024)}
	Clients[id]=client
	go client.writePump()
	go client.readPump()
}