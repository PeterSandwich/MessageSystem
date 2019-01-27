package main

import (
	"encoding/json"
	"fmt"
	"github.com/gorilla/websocket"
	"github.com/gpmgo/gopm/modules/log"
	"github.com/satori/go.uuid"
	"golang.org/x/crypto/bcrypt"
	"io/ioutil"
	"net/http"
	"strconv"
	"time"
)

type User struct{
	Name string `json:name`
	Password string `json:password`
}
type UserInfo struct {
	RightPW string
	id int64
	img_url string
}

// 登录处理
func loginHandle(w http.ResponseWriter, r *http.Request) {
	gate := GetGateInstance()

	var user User
	if r.Method != "POST" {
		return
	}
	body,_:=ioutil.ReadAll(r.Body)
	_=json.Unmarshal(body,&user)
	fmt.Println("login: ",user)

	info,err:=gate.DB.CheckLogin(user.Name)
	if err != nil {
		log.Print(log.WARNING,"name or password is wrong : %v\n",err)
		w.Write([]byte("账号不存在"))
		return
	}
	err = bcrypt.CompareHashAndPassword( []byte(info.RightPW),[]byte(user.Password))
	if err != nil {
		w.Write([]byte("账号或密码错误"))
		return
	}
	sid := strconv.FormatInt(info.id,10)
	oldsession,err:=gate.Redis_conn.HGet("user"+sid,"session").Result()
	if err == nil && len(oldsession)> 0 {
		if id,ok := gate.SessToUid[oldsession];ok{
			if cli,ok := gate.UidToCli[id];ok&&id==info.id {
				cli.Conn.Close()
				delete(gate.UidToCli,id)
			}
			delete(gate.SessToUid,oldsession)
		}
	}

	idv4, _ := uuid.NewV4()
	uuids := idv4.String()
	c:=&http.Cookie{
		Name:"session",
		Value:uuids,
		Path:"/",
	}
	gate.Redis_conn.HSet("user"+sid,"session",uuids)
	gate.Redis_conn.HSet("user"+sid,"img_url",info.img_url)
	gate.Redis_conn.HSet("user"+sid,"name",user.Name)
	http.SetCookie(w,c)
	gate.SessToUid[c.Value]=info.id
	w.Write([]byte(sid))
}



func signUpHandle(w http.ResponseWriter, r *http.Request){
	gate := GetGateInstance()
	var user User
	bytes, e := ioutil.ReadAll(r.Body)
	if e != nil {
		return
	}
	e = json.Unmarshal(bytes, &user)
	fmt.Println("signup: ",user)

	_,err:=gate.DB.CheckLogin(user.Name)
	if err == nil {
		fmt.Fprint(w,"账号已存在")
		return
	}
	psd ,e:= bcrypt.GenerateFromPassword([]byte(user.Password),bcrypt.MinCost)
	i, e := gate.DB.SignUp(user.Name, string(psd))
	if e != nil {
		log.Fatal("%v %v",len(psd),e)
	}
	fmt.Fprint(w,i)
}
func quitHandle(w http.ResponseWriter, r *http.Request){
	gate:=GetGateInstance()
	cookie, e := r.Cookie("session")
	if e != nil {
		return
	}
	if c ,ok:=gate.SessToUid[cookie.Value];ok{
		if cli ,ok:=gate.UidToCli[c];ok{
			cli.Conn.Close()
			delete(gate.SessToUid,cookie.Value)
			delete(gate.UidToCli,c)
		}
	}
	c:=&http.Cookie{
		Name:"session",
		Value:"none",
		Path:"/",
		MaxAge:-1,
	}
	http.SetCookie(w,c)
}
func WebSocketHandler(w http.ResponseWriter, r *http.Request) {
	gate := GetGateInstance()
	cookie, err := r.Cookie("session")
	if err != nil {
		log.Error("session is not exist, maybe had not login:  %v \n",err.Error())
		return
	}

	ws:=websocket.Upgrader{
		CheckOrigin: func(*http.Request) bool {
			return true
		},
	}
	Conn,err:=ws.Upgrade(w,r,nil)
	if err != nil {
		log.Error("websocket upgrade is fail :%v \n",err.Error())
		return
	}
	client := &Client{
		Conn:Conn,
		LastTime:time.Now().Unix(),
		send:make(chan []byte),
	}
	uid := gate.SessToUid[cookie.Value]
	gate.UidToCli[uid] = client
	fmt.Printf("client %v connected the websocket\n",uid)

	go client.readPump()
	go client.writePump()
}
func indexFileServer(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "../frontend/dist/WStest/index.html")
}
func staticFileHandler() http.Handler{
	return http.StripPrefix("/static", http.FileServer(http.Dir("/home/pjw/AgProject/WStest/dist/WStest")))
}