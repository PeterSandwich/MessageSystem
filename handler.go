package main

import (
	"encoding/json"
	"fmt"
	"github.com/satori/go.uuid"
	log "github.com/sirupsen/logrus"
	"golang.org/x/crypto/bcrypt"
	"io/ioutil"
	"net/http"
	"net/url"
	"strconv"
)

type User struct {
	Name     string `json:name`
	Password string `json:password`
}
type LoginRsp struct {
	Ok     bool   `json:ok`
	Uid    int64  `json:uid`
	Name     string `json:name`
	Headimg string `json:headimg`
	Errmsg string `json:errmsg`
}
type UserInfo struct {
	RightPW string
	id      int64
	img_url string
}

func signUpHandle(w http.ResponseWriter, r *http.Request) {

	var user User
	bytes, err := ioutil.ReadAll(r.Body)
	if err != nil {
		log.Error("* signup wrong: " + err.Error())
		return
	}
	err = json.Unmarshal(bytes, &user)
	_, err = CheckLogin(user.Name)
	if err == nil {
		fmt.Fprint(w, "账号已存在")
		return
	}
	psd, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.MinCost)
	i, err := SignUp(user.Name, string(psd))
	if err != nil {
		log.Error("* " + err.Error())
	}
	fmt.Fprint(w, i)
}

// 登录处理
func loginHandle(w http.ResponseWriter, r *http.Request) {

	var user User
	if r.Method != "POST" {
		return
	}
	body, _ := ioutil.ReadAll(r.Body)
	_ = json.Unmarshal(body, &user)
	log.Info("* user login:", user)

	//账号不存在
	info, err := CheckLogin(user.Name)
	if err != nil {
		log.Warn("账号不存在" + err.Error())
		lr := LoginRsp{
			Uid:    0,
			Name:"",
			Headimg:"",
			Ok:     false,
			Errmsg: "账号不存在",
		}
		data, _ := json.Marshal(lr)
		w.Write(data)
		return
	}
	// 密码错误
	err = bcrypt.CompareHashAndPassword([]byte(info.RightPW), []byte(user.Password))
	if err != nil {
		lr := LoginRsp{
			Uid:    0,
			Ok:     false,
			Name:"",
			Headimg:"",
			Errmsg: "账号或密码错误",
		}
		data, _ := json.Marshal(lr)
		w.Write(data)
		return
	}

	//登录成功
	sid := strconv.FormatInt(info.id, 10)
	idv4, _ := uuid.NewV4()
	uuids := idv4.String()
	c := &http.Cookie{
		Name:  "session",
		Value: uuids,
		Path:  "/",
	}
	Redis_conn.Set(uuids, sid, 0)
	Redis_conn.HSet("user"+sid, "session", uuids)
	Redis_conn.HSet("user"+sid, "img_url", info.img_url)
	Redis_conn.HSet("user"+sid, "name", user.Name)

	http.SetCookie(w, c)

	lr := LoginRsp{
		Uid:    info.id,
		Ok:     true,
		Name:user.Name,
		Headimg:info.img_url,
		Errmsg: "",
	}
	data, _ := json.Marshal(lr)
	w.Write(data)
}

func quitHandle(w http.ResponseWriter, r *http.Request) {
	uuids, err := r.Cookie("session")
	if err != nil {
		log.Error("* [quitHandle] get session in cookie wrong: ", err)
		return
	}
	s, err := Redis_conn.Get(uuids.Value).Result()
	if err != nil {
		log.Error("* [quitHandle] get session in Redis_conn wrong: ", err)
		return
	}
	Redis_conn.Del(uuids.Value)
	id, _ := strconv.ParseInt(s, 10, 64)
	c := &http.Cookie{
		Name:   "session",
		Value:  "",
		Path:   "/",
		MaxAge: -1,
	}
	http.SetCookie(w, c)
	delete(Clients, id)

}

type QueryUser struct {
	Name string
}
type UserItem struct {
	ID      int64
	Name    string
	Img_url string
}
type Uerlist struct {
	Ulist []UserItem
}

func GetUserList(w http.ResponseWriter, r *http.Request) {
	m, _ := url.ParseQuery(r.URL.RawQuery)
	name := fmt.Sprintf("%s", m["name"][0])
	list, err := GetUserByName(name)
	if err != nil {
		log.Error("* GetUserList wrong" + err.Error())
	}
	data := &Uerlist{list}
	bytes, err := json.Marshal(data)
	w.Write(bytes)
}

type ChatItem struct {
	Sender  int64
	Counter int64
	Id      int64
	Name    string
	Headimg string
	Isgroup bool
}
type ChatList struct {
	List []ChatItem
}

func GetChatList(w http.ResponseWriter, r *http.Request) {
	id, err := GetIdBySession(r)
	if err != nil {
		return
	}
	items, err := GetChatListDB(id)
	if err != nil {
		log.Error("* GetChatList handler wrong", err.Error())
	}

	data := &ChatList{items}
	bytes, err := json.Marshal(data)
	w.Write(bytes)

}

type MessageItem struct {
	Mid         int64
	From        int64
	To          int64
	Content     string
	ContentType int
	Time        int64
	Isgroup     bool
}
type MessageList struct {
	List [][]MessageItem
}

func GetHistrotyMessage(w http.ResponseWriter, r *http.Request) {
	from, _ := GetIdBySession(r)
	type Temp struct {
		ID      int64
		Isgroup bool
	}
	type TemList struct {
		List []Temp
	}
	msglist := MessageList{}
	tem := &TemList{}
	body, _ := ioutil.ReadAll(r.Body)
	_ = json.Unmarshal(body, &tem)
	log.Warn("*******************************", tem.List)
	for _, v := range tem.List {
		msg, err := HistrotyMessageDB(from, v.ID, v.Isgroup)
		if err != nil {
			log.Error("* " + err.Error())
		}
		msglist.List = append(msglist.List, msg)
	}

	bytes, err := json.Marshal(msglist)
	if err != nil {
		log.Error("* HistrotyMessage json marshal wrong:", err.Error())
		return
	}
	w.Write(bytes)

}

func indexFileServer(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./frontend/dist/frontend/index.html")
}
func staticFileHandler() http.Handler {
	return http.StripPrefix("/static", http.FileServer(http.Dir("./frontend/dist/frontend")))
}

func GetIdBySession(r *http.Request) (int64, error) {
	uuids, err := r.Cookie("session")
	if err != nil {
		log.Error("* [GetIdBySession] get session in cookie wrong: ", err)
		return 0, err
	}
	s, err := Redis_conn.Get(uuids.Value).Result()
	if err != nil {
		log.Error("* [GetIdBySession] get session in Redis_conn wrong: ", err)
		return 0, err
	}
	id, _ := strconv.ParseInt(s, 10, 64)
	return id, nil
}


//    ?id=1000001
func GetUser(w http.ResponseWriter, r *http.Request) {
	r.ParseForm();
	uid,_ :=strconv.ParseInt(r.Form.Get("id"),10,64)
	item, err := GetUserById(uid)
	log.Warn("* getuser ",uid,item)
	if err!= nil {
		log.Error("* Get user by id wrong",err.Error())
		return
	}
	bytes, err := json.Marshal(item)
	if err != nil {
		log.Error("* GetUser json marshal wrong:", err.Error())
		return
	}
	w.Write(bytes)
}

func GetGroup(w http.ResponseWriter, r *http.Request) {
	r.ParseForm();
	gid,_ :=strconv.ParseInt(r.Form.Get("id"),10,64)
	item, err := GetGroupById(gid)
	if err!= nil {
		log.Error("* Get group by id wrong",err.Error(),"gid=",gid)
		return
	}
	bytes, err := json.Marshal(item)
	if err != nil {
		log.Error("* GetGroup json marshal wrong:", err.Error())
		return
	}
	w.Write(bytes)
}