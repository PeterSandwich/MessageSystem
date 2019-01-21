package model

type Msg_receive struct{
	From int64
	To int64
	Content string
	Msg_type int
}
