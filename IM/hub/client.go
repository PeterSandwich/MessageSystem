package hub

import (
	"MessageSystem/IM/session"
	"github.com/gorilla/websocket"
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
	Stop chan int
}

func (c *Client) readPump() {
	defer func() {
		Logger.Info("connection closed")
		e := c.Conn.Close()
		if e != nil {
			Logger.Info("a websocket connection had closed")
		}
	}()

	c.Conn.SetReadLimit(maxMessageSize)
	_ = c.Conn.SetReadDeadline(time.Now().Add(pongWait))
	c.Conn.SetPongHandler(func(string) error { _ = c.Conn.SetReadDeadline(time.Now().Add(pongWait)); return nil })
	for {
		_, message, err := c.Conn.ReadMessage()
		if err != nil {
			if websocket.IsUnexpectedCloseError(err, websocket.CloseGoingAway, websocket.CloseAbnormalClosure) {
				Logger.Error("websocket had close when ready read:" + err.Error())
			}
			break
		}
		redisConn.Publish("message_queue", message)
	}
}

func (c *Client) writePump() {
	ticker := time.NewTicker(pingPeriod)
	defer func() {
		ticker.Stop()
		e := c.Conn.Close()
		if e != nil {
			Logger.Error("a websocket connection close after write:" + e.Error())
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
			err := c.Conn.WriteMessage(websocket.BinaryMessage, message)
			if err != nil {
				Logger.Error("write to websocket connection:" + err.Error())
			}

		case <-ticker.C:
			_ = c.Conn.SetWriteDeadline(time.Now().Add(writeWait))
			if err := c.Conn.WriteMessage(websocket.PingMessage, nil); err != nil {
				Logger.Info("websocket.Ping： client close the connection")
				return
			}
		}
	}
}

func ServeWs(w http.ResponseWriter, r *http.Request) {
	upGrader := websocket.Upgrader{
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
	rawId, Expired := session.IsSessionExpired( r.URL.Query().Get("session_id"))
	uid, err := strconv.ParseInt(rawId, 10, 64)
	if Expired || err != nil {
		Logger.Warn("session Expired")
		return
	}

	conn, err := upGrader.Upgrade(w, r, nil)
	if err != nil {
		Logger.Error("WebSocket UpGrader :" + err.Error())
		return
	}
	client := &Client{Conn: conn, send: make(chan []byte, 1024)}
	Clients[uid] = client
	go client.writePump()
	go client.readPump()
}
