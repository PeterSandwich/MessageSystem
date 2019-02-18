package defs

var HEADER_FIELD_SESSION = "X-Session-Id"
var HEADER_FIELD_UID = "X-User-Id"

type RegisterReq struct {
	Name string
	PassWord string
	HeadImg	string
}

type LoginReq struct {
	Name string `json:"name"`
	PassWord string	`json:"password"`
}

type LoginResp struct {
	Id int64 `json:"id"`
	Name string`json:"name"`
	HeadImg	string`json:"head_img"`
	SessionId string`json:"session_id"`
}

type UserInfo struct {
	Id int64
	Name string
	PassWord string
	HeadImg	string
}

type GroupInfo struct {
	Id int64
	Name string
	HeadImg string
	Creator int64
	Owner int64
}

type ChatItem struct {
	Sender int64
	Name string
	Count int64
	HeadImg string
	IsGroup bool
}

type MessageItem struct {
	Mid         int64
	From        int64
	To          int64
	Content     string
	ContentType int
	Time        int64
	IsGroup     bool
}

// 通讯录相关
type AddressBookItem struct {
	Id int64
	Name string
	HeadImg string
	IsGroup bool
}
type AddressBook struct {
	FriendsList []AddressBookItem
}

// 最近联系人
type NearestContactItem struct {
	Id int64
	Name string
	HeadImg string
	Count int64
	IsGroup bool
}
type ContactList []NearestContactItem
type NearestContact struct {
	ContactList ContactList
}

func (c ContactList) Len() int {
	return len(c)
}
func (c ContactList) Swap(i, j int) {
	c[i], c[j] = c[j], c[i]
}
func (c ContactList) Less(i, j int) bool {
	return c[i].Count < c[j].Count
}

// 历史消息
type HistoryMessageItem struct {
	Id int64
	From int64
	To int64
	Content string
	ContentType int
	ArriveTime int64
	IsGroup bool
}

type HistoryMessage struct {
	MessageList []HistoryMessageItem
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
