package defs

var HEADER_FIELD_SESSION = "X-Session-Id"
var HEADER_FIELD_UID = "X-User-Id"

// 注册请求 body
type RegisterReq struct {
	Name string`json:"name"`
	PassWord string`json:"password"`
	HeadImg	string`json:"head_img"`
}

// 登录请求body
type LoginReq struct {
	Name string `json:"name"`
	PassWord string	`json:"password"`
}

// 登录回复
type LoginResp struct {
	Id int64 `json:"id"`
	Name string`json:"name"`
	HeadImg	string`json:"head_img"`
	SessionId string`json:"session_id"`
}


type UserInfo struct {
	Id int64`json:"id"`
	Name string`json:"name"`
	PassWord string`json:"password"`
	HeadImg	string`json:"head_img"`
}

type UserInfoItem struct {
	Id int64`json:"id"`
	Name string`json:"name"`
	HeadImg	string`json:"head_img"`
}

type Users struct{
	UserList []UserInfoItem `json:"user_list"`
}


type GroupInfo struct {
	Id int64`json:"id"`
	Name string`json:"name"`
	HeadImg string`json:"head_img"`
	Creator int64`json:"creator"`
	Owner int64`json:"owner"`
}

type ChatItem struct {
	Sender int64`json:"sender"`
	Name string`json:"name"`
	Count int64`json:"count"`
	HeadImg string`json:"head_img"`
	IsGroup bool`json:"is_group"`
}

type MessageItem struct {
	Mid         int64`json:"mid"`
	From        int64`json:"from"`
	To          int64`json:"to"`
	Content     string`json:"content"`
	ContentType int`json:"content_type"`
	Time        int64`json:"time"`
	IsGroup     bool`json:"is_group"`
}

// 通讯录相关
type AddressBookItem struct {
	Id int64`json:"id"`
	Name string`json:"name"`
	HeadImg string`json:"head_img"`
	IsGroup bool`json:"is_group"`
}
type AddressBook struct {
	FriendsList []AddressBookItem `json:"friends_list"`
}

// 最近联系人
type NearestContactItem struct {
	Id int64`json:"id"`
	Name string`json:"name"`
	HeadImg string`json:"head_img"`
	Count int64`json:"count"`
	IsGroup bool`json:"is_group"`
}
type ContactList []NearestContactItem
type NearestContact struct {
	ContactList ContactList `json:"contact_list"`
}

func (c ContactList) Len() int {
	return len(c)
}
func (c ContactList) Swap(i, j int) {
	c[i], c[j] = c[j], c[i]
}
func (c ContactList) Less(i, j int) bool {
	return c[i].Count > c[j].Count
}


// 历史消息
type HistoryMessageItem struct {
	Id int64`json:"id"`
	From int64`json:"from"`
	To int64`json:"to"`
	Content string`json:"content"`
	ContentType int`json:"content_type"`
	ArriveTime int64`json:"arrive_time"`
	IsGroup bool`json:"is_group"`
}

type HistoryMessage struct {
	MessageList []HistoryMessageItem `json:"message_list"`
}

type ChatRoom struct{
	Id int64`json:"id"`
	Name string`json:"name"`
	HeadImg string`json:"head_img"`
	Count int64`json:"count"`
	IsGroup bool`json:"is_group"`
	MessageList []HistoryMessageItem `json:"message_list"`
}

type AllChatRoom struct{
	Size int `json:"size"`
	ChatRoomList []ChatRoom `json:"chat_room_list"`
}





type InputArgs struct {
	OutputPath string /** 输出目录 */
	LocalPath  string /** 输入的目录或文件路径 */
	Quality    int    /** 质量 */
	Width      int    /** 宽度尺寸，像素单位 */
	Format     string /** 格式 */
}

type ReturnPath struct {
	OriginalFile   string `json:"originalfile"`
	Thumbnail      string `json:"thumbnail"`
	Filetype       int64  `json:"filetype"`
}
