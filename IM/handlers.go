package main

import (
	"MessageSystem/IM/dbops"
	"MessageSystem/IM/defs"
	"MessageSystem/IM/hub"
	"MessageSystem/IM/session"
	"database/sql"
	"encoding/json"
	"github.com/julienschmidt/httprouter"
	"golang.org/x/crypto/bcrypt"
	"io/ioutil"
	"net/http"
	"sort"
	"strconv"
)

func RegisterRouterHandlers() *httprouter.Router {
	router := httprouter.New()
	router.POST("/api/register", registerHandle)//注册
	router.POST("/api/login", loginHandle)//登录
	router.POST("/api/quit", quitHandle)//退出
	router.POST("/api/upload", uploadFileHandler)//上传文件
	router.GET("/ws",func(w http.ResponseWriter, r *http.Request,p httprouter.Params) {hub.ServeWs(w, r)})
	router.GET("/api/user-info/:id", getUserInfo)// 获取个人信息
	router.GET("/api/group-info/:gid", getGroupInfo)// 获取群的信息
	router.GET("/api/address-book",getAddressBook)//获取通讯录
	router.GET("/api/recent-contact",getNearestContact)	//获取最近联系人
	router.GET("/api/history-message/:type/:id",getHistoryMessage)//获取历史消息
	router.ServeFiles("/static/*filepath",http.Dir("../frontend/dist/frontend"))
	router.ServeFiles("/files/*filepath",http.Dir("/tmp/files/"))
	router.GET("/",indexFileServer)
	notFoundServerHandler:= &NotFoundServerHandler{}
	router.NotFound = notFoundServerHandler
	return router
}

func indexFileServer(w http.ResponseWriter, r *http.Request,p httprouter.Params) {
	http.ServeFile(w, r, "../frontend/dist/frontend/index.html")
}

type NotFoundServerHandler struct{}
func (*NotFoundServerHandler)ServeHTTP(w http.ResponseWriter,r *http.Request){
	http.ServeFile(w, r, "../frontend/dist/frontend/index.html")
}
// 注册
func registerHandle(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	var user defs.RegisterReq
	bytes, _ := ioutil.ReadAll(r.Body)

	err := json.Unmarshal(bytes, &user)
	if err != nil {
		Logger.Warn("Request body is not correct in RegisterHandle : "+err.Error())
		sendErrorResponse(w,defs.ErrorRequestBodyParseFailed)
		return
	}

	_, err = dbops.GetUserInfoByName(user.Name)
	if err != nil && err == sql.ErrNoRows {
		psd, _ := bcrypt.GenerateFromPassword([]byte(user.PassWord), bcrypt.MinCost)
		uid, err := dbops.CreateUser(user.Name,string(psd),user.HeadImg)
		if err != nil {
			sendErrorResponse(w,defs.ErrorDBError)
			return
		}
		sendNormalResponse(w,"register success! your id is "+strconv.FormatInt(uid,10),200)
	}
	sendErrorResponse(w,defs.ErrorAccountExist)
}

// 登录处理
func loginHandle(w http.ResponseWriter, r *http.Request, p httprouter.Params) {


	var user defs.LoginReq
	body, _ := ioutil.ReadAll(r.Body)
	err := json.Unmarshal(body, &user)
	Logger.Debug("user login:"+user.Name)
	if err != nil {
		Logger.Warn("Request body is not correct in loginHandle : "+err.Error())
		sendErrorResponse(w,defs.ErrorRequestBodyParseFailed)
		return
	}

	//账号不存在
	info, err := dbops.GetUserInfoByName(user.Name)
	if err != nil {
		sendErrorResponse(w,defs.ErrorDBError)
		return
	}
	// 密码错误
	err = bcrypt.CompareHashAndPassword([]byte(info.PassWord), []byte(user.PassWord))
	if err != nil {
		sendErrorResponse(w,defs.ErrorAccountOrPassWord)
		return
	}

	//登录成功
	sess := session.GenerateNewSessionId(info.Id)
	resp, _ := json.Marshal(&defs.LoginResp{Id:info.Id,Name:info.Name,HeadImg:info.HeadImg,SessionId:sess})
	Logger.Debug("user login success:"+string(resp))
	sendNormalResponse(w,string(resp),200)
}

// 退出登录
func quitHandle(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	sess := r.Header.Get(defs.HEADER_FIELD_SESSION)
	if len(sess) ==0  {
		Logger.Warn("no session id in header in quitHandle()")
		sendErrorResponse(w,defs.ErrorNotAuthUser)
		return
	}
	session.DeleteSeesion(sess)
	sendNormalResponse(w,"success quit.",200)
}

// 获取通讯录
func getAddressBook(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	param := r.Header.Get(defs.HEADER_FIELD_UID)
	uid ,err := strconv.ParseInt(param,10,64)
	if len(param)==0 || err !=nil {
		sendErrorResponse(w,defs.ErrorNotAuthUser)
		return
	}

	list, err := dbops.GetAddressBook(uid)
	if err != nil {
		DealWithDbReturnErr(w,err)
		return
	}
	if len(list.FriendsList) == 0 {
		sendNormalResponse(w,"",204)
		return
	}
	data, _ := json.Marshal(list)
	sendNormalResponse(w,string(data),200)
}


// 获取最近联系人
func getNearestContact(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	param := r.Header.Get(defs.HEADER_FIELD_UID)
	uid ,err := strconv.ParseInt(param,10,64)
	if len(param)==0 || err !=nil {
		sendErrorResponse(w,defs.ErrorNotAuthUser)
		return
	}

	contact, err := dbops.GetRecentContactList(uid)
	if err != nil {
		Logger.Error(err.Error())
		sendErrorResponse(w,defs.ErrorDBError)
		return
	}

	sort.Sort(contact.ContactList)
	data, _ := json.Marshal(contact)
	sendNormalResponse(w,string(data),200)
}

// 获取历史消息
func getHistoryMessage(w http.ResponseWriter, r *http.Request, p httprouter.Params) {

	param := r.Header.Get(defs.HEADER_FIELD_UID)
	myId ,err := strconv.ParseInt(param,10,64)
	if len(param)==0 || err !=nil {
		sendErrorResponse(w,defs.ErrorNotAuthUser)
		return
	}
	what :=p.ByName("type")
	id :=p.ByName("id")
	if len(id)==0 || bool(what!="group") || bool(what!="single"){
		sendErrorResponse(w,defs.ErrorParamsFaults)
		return
	}
	otherId, err := strconv.ParseInt(id, 10, 64)
	if err != nil {
		Logger.Error(err.Error())
		sendErrorResponse(w,defs.ErrorParamsFaults)
		return
	}

	list, err := dbops.GetHistoryMessage(myId, otherId, bool(what == "group"))
	if err != nil {
		Logger.Error(err.Error())
		sendErrorResponse(w,defs.ErrorDBError)
		return
	}
	data, _ := json.Marshal(list)
	sendNormalResponse(w,string(data),200)
}


func getUserInfo(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	rawId:=p.ByName("id")
	uid,err :=strconv.ParseInt(rawId,10,64)
	if len(rawId)==0 || err!= nil {
		sendErrorResponse(w,defs.ErrorParamsFaults)
		return
	}
	item, err := dbops.GetUserInfoById(uid)
	if err!= nil {
		DealWithDbReturnErr(w,err)
		return
	}
	item.PassWord = "*"
	data, _ := json.Marshal(item)
	sendNormalResponse(w,string(data),200)
}

func getGroupInfo(w http.ResponseWriter, r *http.Request, p httprouter.Params) {
	rawId:=p.ByName("gid")
	gid,err :=strconv.ParseInt(rawId,10,64)
	if len(rawId)==0 || err!= nil {
		sendErrorResponse(w,defs.ErrorParamsFaults)
		return
	}
	item, err := dbops.GetGroupById(gid)
	if err!= nil {
		DealWithDbReturnErr(w,err)
		return
	}
	data, _ := json.Marshal(item)
	sendNormalResponse(w,string(data),200)
}


func DealWithDbReturnErr(w http.ResponseWriter,err error){
	if err != sql.ErrNoRows {
		Logger.Warn(err.Error())
		sendErrorResponse(w,defs.ErrorDBError)
	}else{
		sendNormalResponse(w,"",204) // 204代表无内容
	}
}