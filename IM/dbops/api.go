package dbops

import (
	"MessageSystem/IM/defs"
	"database/sql"
	"errors"
	"go.uber.org/zap"
	"strconv"
	"strings"
)

// 通过姓名，获取用户个人信息
func GetUserInfoByName(name string) (*defs.UserInfo, error) {

	name = strings.TrimSpace(name)
	if name == "" {
		logger.Warn("Illegal parameter 'name', Make sure it is not empty")
		return &defs.UserInfo{},errors.New("Illegal parameter 'name', Make sure it is not empty")
	}

	var info defs.UserInfo
	info.HeadImg = ""
	info.Name = name

	var HeadURL sql.NullString
	err := dbConn.QueryRow(`select id,pw,headimg from users where name=$1 `, name).Scan(&info.Id, &info.PassWord, &HeadURL)
	if err == sql.ErrNoRows {
		return &defs.UserInfo{},sql.ErrNoRows
	}
	if err != nil {
		logger.Warn("database query row in GetUserInfoByName() :"+err.Error())
		return &defs.UserInfo{},err
	}
	if HeadURL.Valid {
		info.HeadImg = HeadURL.String
	}
	return &info, nil
}

// 通过id，获取用户个人信息
func GetUserInfoById(id int64)(*defs.UserInfo,error){

	if id < 1 {
		logger.Warn("Illegal parameter 'id',Make sure it is an integer")
		return nil,errors.New("Illegal parameter 'id',Make sure it is an integer")
	}

	var info defs.UserInfo
	info.Id = id
	info.HeadImg = ""

	var HeadURL sql.NullString
	err := dbConn.QueryRow(`select id,name,pw,headimg from users where id=$1 `, id).Scan(&info.Id,&info.Name, &info.PassWord, &HeadURL)
	if err != nil  {
		if err != sql.ErrNoRows {
			logger.Warn("database query row in GetUserInfoById() :"+err.Error())
		}
		return nil,err
	}

	if HeadURL.Valid {
		info.HeadImg = HeadURL.String
	}
	return &info, nil
}
func GetAllUsersByName(name string)(list *defs.Users,err error){

	name = "%"+name+"%"
    var stmt *sql.Stmt
	if stmt, err = dbConn.Prepare("select id,name,headimg from users where name like $1 ");err!=nil{
		return
	}
	rows, err := stmt.Query(name)
	if err!= nil && err!=sql.ErrNoRows {
		return
	}
	list  = &defs.Users{
		UserList:make([]defs.UserInfoItem,0),
	}

	for rows.Next() {
		var user defs.UserInfoItem
		if err := rows.Scan(&user.Id, &user.Name, &user.HeadImg);err!=nil{
			logger.Warn(err.Error())
			continue
		}
		list.UserList = append(list.UserList,user)
	}
	return
}
// 创建用户
func CreateUser(name, encryptedPasswd,headImg string) (int64, error) {

	name = strings.TrimSpace(name)
	encryptedPasswd = strings.TrimSpace(encryptedPasswd)
	headImg = strings.TrimSpace(headImg)

	if name == "" || encryptedPasswd == "" {
		logger.Warn("Illegal username and password",zap.String("name","empty"),zap.String("encrypted PassWord","empty"))
		return 0, errors.New("Illegal username and password")
	}

	var userid int64
	err := dbConn.QueryRow(`insert into users(name,pw,headimg) values ($1,$2,$3) RETURNING id`, name, encryptedPasswd,headImg).Scan(&userid)
	if err != nil {
		logger.Warn(" Error while registering  in CreateUser() :"+err.Error())
		return 0,err
	}
	return userid, nil
}

// 获取通讯录
func GetAddressBook(uid int64) (*defs.AddressBook,error) {
	if uid <=0 {
		logger.Warn("Illegal parameter 'uid'")
		return nil,errors.New("Illegal parameter 'uid' ")
	}

	AddressBook := &defs.AddressBook{}
	AddressBook.FriendsList = make([]defs.AddressBookItem,0)
	table := "im_message_counter_"+strconv.FormatInt(uid%4,10)

	// user
	stmt, _ := dbConn.Prepare("select id,name,headimg,isgroup from " + table + ",users where sender = users.id and isgroup=false and master=$1 order by name")
	rows,err := stmt.Query(uid)
	if err != nil && err != sql.ErrNoRows {
		logger.Warn(err.Error())
		return nil,err
	}
	for rows.Next() {
		var item defs.AddressBookItem
		err := rows.Scan(&item.Id, &item.Name, &item.HeadImg, &item.IsGroup)
		if err != nil {
			logger.Warn(err.Error())
		}
		AddressBook.FriendsList = append(AddressBook.FriendsList,item)
	}

	// groups
	stmt2, _ := dbConn.Prepare("select id,name,headimg,isgroup from "+table+",groups where sender = groups.id and isgroup=true and master=$1 order by name")
	rows2,err := stmt2.Query(uid)
	if err != nil && err != sql.ErrNoRows {
		logger.Warn(err.Error())
		return nil,err
	}
	for rows2.Next() {
		var item defs.AddressBookItem
		err := rows2.Scan(&item.Id, &item.Name, &item.HeadImg, &item.IsGroup)
		if err != nil {
			logger.Warn(err.Error())
		}
		AddressBook.FriendsList = append(AddressBook.FriendsList,item)
	}

	return AddressBook,nil
}


// 获取最近联系人
func GetRecentContactList(uid int64)(*defs.NearestContact,error){
	if uid <=0 {
		logger.Warn("Illegal parameter 'uid'")
		return nil,errors.New("Illegal parameter 'uid' ")
	}

	NearestContact := &defs.NearestContact{}
	NearestContact.ContactList = make([]defs.NearestContactItem,0)
	table := "im_message_counter_"+strconv.FormatInt(uid%4,10)

	// user
	rows, err := dbConn.Query("select id,name,headimg,counter,isgroup from "+table+",users where master = $1 and sender = users.id and isgroup=false  order by counter;",uid)
	if err != nil && err != sql.ErrNoRows {
		logger.Warn(err.Error())
		return nil,err
	}
	for rows.Next() {
		var item defs.NearestContactItem
		err := rows.Scan(&item.Id, &item.Name, &item.HeadImg,&item.Count, &item.IsGroup)
		if err != nil {
			logger.Warn(err.Error())
		}
		NearestContact.ContactList = append(NearestContact.ContactList,item)
	}

	//groups
	rows2, err := dbConn.Query("select id,name,headimg,counter,isgroup from "+table+",groups where master = $1 and sender = groups.id and isgroup=true order by counter;",uid)
	if err != nil && err != sql.ErrNoRows {
		logger.Warn(err.Error())
		return nil,err
	}
	for rows2.Next() {
		var item defs.NearestContactItem
		err := rows2.Scan(&item.Id, &item.Name, &item.HeadImg,&item.Count, &item.IsGroup)
		if err != nil {
			logger.Warn(err.Error())
		}
		NearestContact.ContactList = append(NearestContact.ContactList,item)
	}
	return NearestContact, nil
}

func GetNearestContactHistoryMessage(myId int64, contact *defs.NearestContact)(room *defs.AllChatRoom,err error){
	var (
		limitCount int64 = 10
		stmtOut *sql.Stmt
		stmtOutGroup *sql.Stmt
		rows *sql.Rows
	)

	room = &defs.AllChatRoom{
		Size:0,
		ChatRoomList:make([]defs.ChatRoom,0),
	}


	for _,per:=range contact.ContactList{
		if per.Count > limitCount {
			limitCount = per.Count
		}
		if per.IsGroup {
			table_name := "im_message_recieve_"+strconv.FormatInt(per.Id%4,10)
			if stmtOutGroup ,err = dbConn.Prepare("SELECT id,msg_from,msg_to,content,content_type,arrive_time,isgroup FROM (SELECT * FROM "+table_name+" where msg_to=$1 and isgroup=$2 order by id DESC LIMIT $3) aa  order by id ");err!= nil {
				logger.Error(err.Error())
				continue
			}
			rows,err = stmtOutGroup.Query(per.Id,per.IsGroup,limitCount)
		}else {
			table_name := "im_message_recieve_"+strconv.FormatInt((per.Id+myId)%4,10)
			if stmtOut,err =  dbConn.Prepare("SELECT id,msg_from,msg_to,content,content_type,arrive_time,isgroup FROM (SELECT * FROM "+table_name+" where  ((msg_from=$1 and msg_to=$2) or (msg_from=$2 and msg_to=$1)) and isgroup=$3  order by id DESC LIMIT $4) aa  order by id ");err!=nil{
				logger.Error(err.Error())
				continue
			}
			rows, err = stmtOut.Query(myId,per.Id,per.IsGroup,limitCount)
		}
		if err != nil {
			logger.Warn(err.Error())
			err = nil
			continue
		}
		chatroom := &defs.ChatRoom{
			Id:per.Id,
			Name:per.Name,
			HeadImg:per.HeadImg,
			Count:per.Count,
			IsGroup:per.IsGroup,
			MessageList: make([]defs.HistoryMessageItem,0),
		}
		for rows.Next() {
			var item defs.HistoryMessageItem
			err := rows.Scan(&item.Id, &item.From, &item.To, &item.Content, &item.ContentType, &item.ArriveTime, &item.IsGroup)
			if err != nil {
				err = nil
				logger.Warn(err.Error())
				continue
			}
			chatroom.MessageList = append(chatroom.MessageList,item)
		}
		room.ChatRoomList = append(room.ChatRoomList,*chatroom)
		room.Size++
	}
	return
}

// 获取单个会话的聊天记录
func GetHistoryMessage(from,to int64,isgroup bool)(*defs.HistoryMessage,error){

	if from <=0 || to <= 0 {
		logger.Warn("Illegal parameter 'from'or 'to'")
		return nil,errors.New("Illegal parameter 'from'or'to' ")
	}
	table := ""
	var rows *sql.Rows
	var stmt *sql.Stmt
	var err error
	HistoryMessage := &defs.HistoryMessage{}
	HistoryMessage.MessageList = make([]defs.HistoryMessageItem,0)
	if isgroup {
		table = "im_message_recieve_"+strconv.FormatInt(to%4,10)
		stmt,err=dbConn.Prepare("select id,msg_from,msg_to,content,content_type,arrive_time,isgroup from "+table+" where msg_to=$1 and isgroup=$2")
		rows,err = stmt.Query(to,isgroup)
	}else{
		table = "im_message_recieve_"+strconv.FormatInt((from+to)%4,10)
		stmt,err=dbConn.Prepare("select id,msg_from,msg_to,content,content_type,arrive_time,isgroup from "+table+" where ((msg_from=$1 and msg_to=$2) or (msg_from=$2 and msg_to=$1)) and isgroup=$3")
		rows,err=stmt.Query(from,to,isgroup)
	}
	if err != nil && err != sql.ErrNoRows {
		logger.Warn(err.Error())
		return nil,err
	}

	for rows.Next() {
		var item defs.HistoryMessageItem
		err := rows.Scan(&item.Id, &item.From, &item.To, &item.Content, &item.ContentType, &item.ArriveTime, &item.IsGroup)
		if err != nil {
			logger.Warn(err.Error())
			continue
		}
		HistoryMessage.MessageList = append(HistoryMessage.MessageList,item)
	}

	return HistoryMessage,nil

}

// 获取群组成员id
func GetGroupAllMemberId(gid int64) ([]int64, error) {

	if gid <= 0 {
		logger.Warn("Illegal param 'gid'")
		return nil, errors.New("Illegal param 'gid'")
	}

	var id int64
	IdList := make([]int64,0)

	stmtOut,err := dbConn.Prepare(`select uid from membership where gid = $1`)
	if err != nil {
		logger.Warn(err.Error())
		return nil,err
	}

	rows, err := stmtOut.Query(gid)
	if err != nil {
		logger.Warn(err.Error())
		return nil,err
	}

	for rows.Next() {
		err := rows.Scan(&id)
		if err != nil {
			logger.Warn(err.Error())
			continue
		}
		IdList = append(IdList, id)
	}

	return IdList, nil
}

// 获取组全部成员信息
func GetGroupAllMemberInfo(gid int64) ([]defs.UserInfo, error) {
	if gid <= 0 {
		logger.Warn("Illegal param 'gid'")
		return nil, errors.New("Illegal param 'gid'")
	}

	infoList := make([]defs.UserInfo,0)
	stmtOut,err := dbConn.Prepare(`select id,name,headimg from membership,users where id = uid and gid = $1;`)
	if err != nil {
		logger.Warn(err.Error())
		return nil,err
	}

	rows, err := stmtOut.Query(gid)
	if err != nil {
		logger.Warn(err.Error())
		return nil,err
	}

	var Img sql.NullString
	for rows.Next() {
		var info defs.UserInfo
		err := rows.Scan(&info.Id, &info.Name, &Img)
		if err != nil {
			logger.Warn(err.Error())
			continue
		}
		if Img.Valid {
			info.HeadImg = Img.String
		}
		info.PassWord = "*****"
		infoList = append(infoList,info)
	}

	return infoList,nil
}


func GetGroupById(gid int64)(*defs.GroupInfo,error){
	if gid <= 0 {
		logger.Warn("Illegal param 'gid'")
		return nil, errors.New("Illegal param 'gid'")
	}
	group := &defs.GroupInfo{}
	err := dbConn.QueryRow("select id,name,headimg,creater,owner from groups where id=$1", gid).Scan(&group.Id, &group.Name, &group.HeadImg,&group.Creator,&group.Owner)
	if err != nil {
		if err != sql.ErrNoRows {
			logger.Warn(err.Error())
		}
		return nil,err
	}
	return group,nil
}