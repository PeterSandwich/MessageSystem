package main

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"strconv"
	"time"
	pb "MessageSystem/proto/protocol"
	c2c "MessageSystem/proto/c2c"
	c2g "MessageSystem/proto/c2g"
)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
func C2CSendRequest(in *pb.MessageRequest){
	engine := GetEngineInstance()
	data:=&c2c.C2CSendRequest{
		To:in.GetTo(),
		From:in.GetFrom(),
		Content:in.GetContent(),
	}
	mid, err := engine.DB.C2CSendRequestStore(data);
	if err != nil {
		log.Println(err)
	}else{

		// todo 给发送端一个ACK
		ack := &pb.MessageResponse{
			MsgTo:in.From,
			TypeOfResponse:pb.MessageResponse_C2CSEND_ACK_RESPONSE,
			Status:pb.MessageResponse_OK,
			Msgid:mid,
			Timestamp:time.Now().Unix(),
		}

		buf,_ := proto.Marshal(ack)
		engine.Redis_conn.Publish("MessageQueue",buf)

		data := &pb.MessageResponse{
			MsgTo:		in.GetTo(),
			MsgFrom:    in.GetFrom(),
			Msgid:		mid,
			Content:	in.Content,
			Timestamp: 	time.Now().Unix(),
			TypeOfResponse: pb.MessageResponse_C2CPUSH_RESPONSE,
			Status:pb.MessageResponse_OK,
		}
		buf,_ = proto.Marshal(data)
		engine.Redis_conn.Publish("MessageQueue",buf)
	}
	fmt.Println(mid)
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func C2GSendRequest(in *pb.MessageRequest){
	engine := GetEngineInstance()
	data:=&c2g.C2GSendRequest{
		Group:in.GetGroup(),
		From:in.GetFrom(),
		Content:in.GetContent(),
	}
	mid,datime,err:=engine.DB.C2GSendRequestStore(data)
	if err != nil {
		panic(err)
	}
	fmt.Println(mid)
	userlist, _ := engine.DB.C2GSendSyncStore(data, mid, datime,engine.Redis_conn)

	// todo 给发送端一个ACK
	ack := &pb.MessageResponse{
		MsgTo:in.From,
		MsgGroup:in.GetGroup(),
		TypeOfResponse:pb.MessageResponse_C2GSEND_ACK_RESPONSE,
		Status:pb.MessageResponse_OK,
		Msgid:mid,
		Timestamp:datime,
	}

	buf,_ := proto.Marshal(ack)
	engine.Redis_conn.Publish("MessageQueue",buf)

	for _,v :=range userlist {
		data := &pb.MessageResponse{
			MsgFrom:in.GetFrom(),
			MsgTo:v,
			MsgGroup:in.GetGroup(),
			Msgid:mid,
			Content:in.Content,
			Timestamp:datime,
			TypeOfResponse: pb.MessageResponse_C2GPUSH_RESPONSE,
			Status:pb.MessageResponse_OK,
		}
		buf,_ := proto.Marshal(data)
		engine.Redis_conn.Publish("MessageQueue",buf)
	}
}




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func AddMemberToGroup(in *pb.MessageRequest){
	engine := GetEngineInstance()
	err := engine.DB.GroupAddMembersStore(in.GetGroup(), in.GetTo())
	if err != nil {
		fmt.Println(err)
	}
	key:="group"+strconv.FormatInt(in.GetGroup(),10)
	engine.Redis_conn.Del(key)
}



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

func CreateGroup(in *pb.MessageRequest){
	engine := GetEngineInstance()
	_, err := engine.DB.CreateGroupStore(in.GetFrom(), in.GetContent())
	if err != nil {
		fmt.Println(err)
	}
}

