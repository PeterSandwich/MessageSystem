package main

import (
	"fmt"
	"github.com/go-redis/redis"
	"github.com/golang/protobuf/proto"
	log "github.com/sirupsen/logrus"

	pb "./protocol/protoc"
)

func Run() {
	subscribe := Redis_conn.Subscribe("rawmessage")
	for {
		result, err := subscribe.Receive()
		log.Debug("* subscribe.ReceiveTimeout(0)", result)
		if err != nil {
			log.Panic(err.Error())
		}
		switch msg := result.(type) {
		case *redis.Message:
			log.Debug("* Received", msg.Payload, "on channel", msg.Channel)
			PraseMessage([]byte(msg.Payload))
		default:
			log.Debug("* Got control message", msg)
		}
	}
}

func PraseMessage(data []byte) {
	msg := &pb.Message{}
	err := proto.Unmarshal(data, msg)
	if err != nil {
		log.Error("* proto Unmarshal the data wrong: " + err.Error())
		return
	}
	if msg.GetType() == pb.Message_REQUEST {
		switch msg.GetCmd() {
		case pb.Message_NONE: // cmd为空
			if !msg.GetIsgroup() {
				C2C_SendRequest(msg)
			} else {
				C2G_SendRequest(msg)
			}
		case pb.Message_CREATE_GROUP:
			CreateGroupRequest(msg)
		case pb.Message_GROUP_ADDMEMBERS:
			GroupAddMemRequest(msg)
		case pb.Message_MSG_BACK:
			if !msg.GetIsgroup() {
				C2C_MsgBack(msg)
			} else {
				C2G_MsgBack(msg)
			}
		case pb.Message_CREATE_SESSION:
			C2C_CreateSession(msg)
		}

	} else if msg.Type == pb.Message_ACK {
		// todo 把counter表的信息更新,
		err := UpdateCounterTable(msg.GetMsgid(), msg.GetFrom(), msg.GetTo(), msg.GetIsgroup())
		if err != nil {
			log.Error("* update counter table wrong", err.Error())
		}
	}
}

func C2C_SendRequest(in *pb.Message) {
	//存储数据
	msgid, err := C2CStore(in)
	if err != nil {
		log.Error("* C2Cstore wrong: " + err.Error())
		return
	}

	in.Msgid = msgid
	err = C2CCounter(in)
	if err != nil {
		log.Error("* C2CCounter wrong: " + err.Error())
	}

	//处理数据ACK
	log.Debug("* sending ACK")
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_NONE,
		Msgid:   in.GetMsgid(),
		To:      in.GetTo(),
		From:    in.GetFrom(),
		Time:    in.GetTime(),
		Isgroup: false,
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}

	if c, ok := Clients[ack.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, client offline?")
	}

	// 处理数据 send
	log.Debug("* sending to peer")
	in.Type = pb.Message_NOTIFICATION
	in.Cmd = pb.Message_NONE
	in.Isgroup = false

	msgbytes, err := proto.Marshal(in)
	if err != nil {
		log.Error("* proto.Marshal Send wrong: " + err.Error())
	}

	if c, ok := Clients[in.GetTo()]; ok {
		c.send <- msgbytes
	} else {
		log.Warn("* Send message send fail, client offline?")
	}
}

func C2G_SendRequest(in *pb.Message) {
	msgid, err := C2GStore(in)
	if err != nil {
		log.Error("* C2Gstore wrong: " + err.Error())
		return
	}
	//落地存储成功，发ack
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_NONE,
		Msgid:   msgid,
		From:    in.GetFrom(),
		To: 	 in.GetTo(),
		Time:    in.GetTime(),
		Isgroup: true,
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}
	if c, ok := Clients[in.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, is the clinet quit?")
	}

	//给每个人存储转发

	idlist, err := GetGroupMember(in.GetTo())
	fmt.Println("$$$$$$$$$$$$$$$$$$$$$$$",idlist)
	if err != nil {
		log.Error("* GetGroupMember wrong: " + err.Error())
		return
	}
	for _, id := range idlist {
		if id == in.GetFrom() {
			continue
		}
		readysend := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_NONE,
			Msgid:   msgid,
			To:      in.GetTo(),
			From:    in.From,
			Content: in.GetContent(),
			Time:    in.GetTime(),
			Isgroup: true,
		}
		data, _ := proto.Marshal(readysend)
		if c, ok := Clients[id]; ok {
			c.send <- data
		} else {
			log.Warnf("* group member %v offline ", id)
		}
	}
}

func CreateGroupRequest(in *pb.Message) {
	gid, gname, err := CreateGroupStore(in.From, in.Content)
	if err != nil {
		return
	}
	log.Warn("userlist:", in.Userlist)
	GroupAddMembersStore(gid, in.Userlist) // membership 表

	//处理数据ACK
	log.Debug("* sending ACK")
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_CREATE_GROUP,
		From:    in.GetFrom(),
		To:      in.GetTo(),
		Time:    in.GetTime(),
		Isgroup: true,
		Content: gname,
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}

	if c, ok := Clients[ack.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, client offline?")
	}

	//给每个人存储转发
	for _, id := range in.Userlist {
		if id == in.GetFrom() {
			continue
		}
		readysend := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_CREATE_GROUP,
			From:    in.GetFrom(),
			Time:    in.GetTime(),
			To:      in.GetTo(),
			Isgroup: true,
			Content: gname,

		}
		data, _ := proto.Marshal(readysend)
		if c, ok := Clients[id]; ok {
			c.send <- data
		} else {
			log.Warnf("* group member %v offline ", id)
		}
	}

}

func GroupAddMemRequest(in *pb.Message) {
	if (!in.Isgroup){
		log.Warn("Request not group")
		return
	}
	GroupAddMembersStore(in.To, in.Userlist)
	//处理数据ACK
	log.Debug("* sending ACK")
	ack := &pb.Message{
		Type: pb.Message_ACK,
		Cmd:  pb.Message_GROUP_ADDMEMBERS,
		From: in.GetFrom(),
		To:in.GetTo(),
		Time: in.GetTime(),
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}

	if c, ok := Clients[ack.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, client offline?")
	}

	//给每个人存储转发
	for _, id := range in.Userlist {
		if id == in.GetFrom() {
			continue
		}
		readysend := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_GROUP_ADDMEMBERS,
			From:    in.GetFrom(),
			Time:    in.GetTime(),
			Isgroup: true,
			Content: "新的群组",
			To:in.GetTo(),
		}
		data, _ := proto.Marshal(readysend)
		if c, ok := Clients[id]; ok {
			c.send <- data
		} else {
			log.Warnf("* group member %v offline ", id)
		}
	}
}

func C2C_MsgBack(in *pb.Message) {
	if in.GetMsgid() == 0 {
		log.Warn("* when message back, msgid is not exit")
		return
	}
	err := DeleteMsgById(in.GetMsgid())
	if err != nil {
		log.Error("* delete message by id wrong:", err.Error())
		return
	}

	//处理数据ACK
	log.Debug("* sending ACK")
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_MSG_BACK,
		From:    in.GetFrom(),
		To: 	 in.GetTo(),
		Time:    in.GetTime(),
		Msgid:   in.GetMsgid(),
		Isgroup: false,
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}
	if c, ok := Clients[ack.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, client offline?")
	}

	// 处理数据 send
	log.Debug("* sending to peer")
	in.Type = pb.Message_NOTIFICATION
	in.Cmd = pb.Message_MSG_BACK
	msgbytes, err := proto.Marshal(in)
	if err != nil {
		log.Error("* proto.Marshal Send wrong: " + err.Error())
	}

	if c, ok := Clients[in.GetTo()]; ok {
		c.send <- msgbytes
	} else {
		log.Warn("* Send message send fail, client offline?")
	}

}

func C2G_MsgBack(in *pb.Message) {
	if in.GetMsgid() == 0 {
		log.Warn("* when message back, msgid is not exit")
		return
	}
	err := DeleteMsgById(in.GetMsgid())
	if err != nil {
		log.Error("* delete message by id wrong:", err.Error())
		return
	}

	//处理数据ACK
	log.Debug("* sending ACK")
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_MSG_BACK,
		From:    in.GetFrom(),
		Time:    in.GetTime(),
		Msgid:   in.GetMsgid(),
		Isgroup: true,
		To:in.GetTo(),
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}
	if c, ok := Clients[ack.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, client offline?")
	}

	//给每个人存储转发
	idlist, err := GetGroupMember(in.GetTo())
	if err != nil {
		log.Error("* GetGroupMember wrong: " + err.Error())
		return
	}
	for _, id := range idlist {
		readysend := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_MSG_BACK,
			Msgid:   in.Msgid,
			Content: in.GetContent(),
			To:			in.GetTo(),
			Time:    in.GetTime(),
			Isgroup: true,
		}
		data, _ := proto.Marshal(readysend)
		if c, ok := Clients[id]; ok {
			c.send <- data
		} else {
			log.Warnf("* group member %v offline ", id)
		}
	}

}

func C2C_CreateSession(in *pb.Message) {
	err := InsertCouterTable(in.GetFrom(), in.GetTo())
	if err != nil {
		log.Error("* create session InsertCouterTable wrong", err.Error())
		return
	}

	//处理数据ACK
	log.Debug("* sending ACK")
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_CREATE_SESSION,
		To:      in.GetTo(),
		From:    in.GetFrom(),
		Time:    in.GetTime(),
		Isgroup: false,
	}
	bytes, err := proto.Marshal(ack)
	if err != nil {
		log.Error("* proto.Marshal ACK wrong: " + err.Error())
	}

	if c, ok := Clients[ack.GetFrom()]; ok {
		c.send <- bytes
	} else {
		log.Warn("* ACK message send fail, client offline?")
	}

	// 处理数据 send
	log.Debug("* sending to peer")
	tosend := &pb.Message{
		Type:    pb.Message_NOTIFICATION,
		Cmd:     pb.Message_CREATE_SESSION,
		To:      in.GetTo(),
		From:    in.GetFrom(),
		Time:    in.GetTime(),
		Isgroup: false,
	}

	msgbytes, err := proto.Marshal(tosend)
	if err != nil {
		log.Error("* proto.Marshal Send wrong: " + err.Error())
	}

	if c, ok := Clients[in.GetTo()]; ok {
		c.send <- msgbytes
	} else {
		log.Warn("* Send message send fail, client offline?")
	}
}