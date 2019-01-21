package main

import (
	"MessageSystem/model"
	"MessageSystem/protocol"
	"encoding/json"
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/gpmgo/gopm/modules/log"
)

func DoingMsg(msg []byte){
	fmt.Println("in doingMsg")
	var pack Protocol.Pack
	err :=JSON2PB(string(msg),&pack)
	if err != nil {
		log.Fatal("DoingMsg Unmarshal error: %v\n",err)
		return
	}
	fmt.Println("BODY:",pack.GetType())
	switch pack.GetType() {
	case Protocol.Pack_Auth_Request:
		//暂时
		C2CSend_Request_Logic(pack.GetBody())
	case Protocol.Pack_C2CSend_Request:
		C2CSend_Request_Logic(pack.GetBody())
	case Protocol.Pack_C2GSend_Request:
	case Protocol.Pack_CtrlSend_Request:
	case Protocol.Pack_Pull_Request:
	default:
		log.Fatal(" %v\n",err)
		return
	}
}

func C2CSend_Request_Logic(msg string){
	fmt.Println("in C2CSend_Request_Logic")
	var info Protocol.C2CSendRequest
	err:=JSON2PB(string(msg),&info)
	if err != nil {
		log.Fatal("JSON2PB(string(msg),&info) error: %v\n",err)
		return
	}
	data, err := proto.Marshal(&info)
	m := &Protocol.C2CSendRequest{}
	err = proto.Unmarshal(data, m)
	if err != nil {
		log.Fatal("C2CSend_Request_Logic Unmarshal error: %v\n",err)
		return
	}
	k:= model.Msg_receive{
		From:m.GetFrom(),
		To:m.GetTo(),
		Content:m.GetContent(),
		Msg_type:1,
	}
	fmt.Println("k=",k)
	id:=DbCtrl.StoreLongTimeMsg(k)
	fmt.Println("store sucess! id=",id)

	if xx,ok := (*DBmap)[m.GetTo()] ;ok {
		fmt.Println("==================================had send")
		xx.send <- []byte(m.Content)
	}


}




func JSON2PB(form_json_str string, to_pb proto.Message) error {
	// json字符串转pb
	return json.Unmarshal([]byte(form_json_str), &to_pb)
}

func PB2JSON(from_pb proto.Message, to_json_str string) error {
	// pb转json字符串
	json_str, err := json.Marshal(from_pb)
	if err == nil {
		to_json_str = string(json_str)
	}

	return err
}