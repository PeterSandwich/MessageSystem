package hub

import (
	"MessageSystem/IM/dbops"
	pb "MessageSystem/IM/protoc"
	"github.com/go-redis/redis"
	"github.com/golang/protobuf/proto"
	"go.uber.org/zap"
	"time"
)

var (
	Clients    map[int64]*Client
	Logger 	   *zap.Logger
	redisConn *redis.Client
)

func init() {
	Clients = make(map[int64]*Client)
	redisConn = redis.NewClient(&redis.Options{Addr: "redishost:6379", Password: "", DB: 0})
}


func Run(logger *zap.Logger) {
	Logger = logger
	subscribe := redisConn.Subscribe("message_queue")
	for {
		result, err := subscribe.Receive()
		if err != nil {
			Logger.Error("message queue receive data :"+err.Error())
		}
		switch msg := result.(type) {
		case *redis.Message:
			MessageScheduling([]byte(msg.Payload))
		default:
		}
	}
}

// 消息调度
func MessageScheduling(data []byte) {
	msg := &pb.Message{}
	err := proto.Unmarshal(data, msg)
	if err != nil {
		Logger.Error("Unmarshal protocol data :" + err.Error())
		return
	}
	if msg.GetType() == pb.Message_REQUEST {
		switch msg.GetCmd() {
		case pb.Message_NONE: sendRequestDispose(msg)
		case pb.Message_CREATE_GROUP: createGroupRequest(msg)
		case pb.Message_CREATE_SESSION: createChatSession(msg)
		case pb.Message_GROUP_ADDMEMBERS: groupAddMemRequest(msg)
		case pb.Message_MSG_BACK: withdrawMessage(msg)
		}
	} else if msg.Type == pb.Message_ACK {
		if msg.Cmd == pb.Message_NONE {
			messageAckUpdate(msg)
		}
	}
}

// 无法根据消息体执行相应任务时返回
func errorRequestResponse(in *pb.Message, who int64,code pb.Message_ErrorCode){
	resp := &pb.Message{
		Type:    pb.Message_ERROR,
		Errcode: code,
		Cmd:     pb.Message_NONE,
		Msgid:   -1,
		To:      in.GetTo(),
		From:    in.GetFrom(),
		ArriveTime:    time.Now().Unix(),
		SendTime:in.GetSendTime(),
		ContentType:in.ContentType,
		Isgroup: in.GetIsgroup(),
	}
	data, err := proto.Marshal(resp)
	if err != nil {
		Logger.Warn(err.Error())
		return
	}
	if c, ok := Clients[who]; ok {
		c.send <- data
	} else {
		Logger.Info("User offline",zap.Int64("user-id",who))
	}
}

// 消息转发
func messageForward(resp *pb.Message, who int64){
	data, err := proto.Marshal(resp)
	if err != nil {
		Logger.Warn(err.Error())
		return
	}
	if c, ok := Clients[who]; ok {
		c.send <- data
	} else {
		Logger.Info("User offline",zap.Int64("user-id",who))
	}
}

// 消息处理：存储，分发
func sendRequestDispose(in *pb.Message){
	ctime := time.Now().Unix()
	messageId, err := dbops.MessageStore(in.From, in.To, in.Content, int(in.ContentType), ctime, in.Isgroup)
	if err != nil {
		Logger.Warn(err.Error())
		errorRequestResponse(in,in.GetFrom(),pb.Message_REQUEST_BODY_PARAMS_ERROR)
	}
	in.Msgid = messageId
	if in.Isgroup{ // 群聊
		gid := in.GetTo()
		groupIdList, err := dbops.GetGroupAllMemberId(in.GetTo())
		if err != nil {
			Logger.Warn(err.Error())
			errorRequestResponse(in,in.GetFrom(),pb.Message_REQUEST_BODY_PARAMS_ERROR)
			return
		}
		go func(list []int64){
			ack := &pb.Message{
				Type:    pb.Message_ACK,
				Cmd:     pb.Message_NONE,
				Msgid:   messageId,
				To:      in.GetTo(),
				From:    in.GetFrom(),
				ArriveTime:    ctime,
				SendTime:in.GetSendTime(),
				Content:in.Content,
				ContentType:in.ContentType,
				Isgroup: in.GetIsgroup(),
			}
			messageForward(ack,in.GetFrom())

			for _,uid := range list{
				if uid == in.GetFrom() {continue}
				resp := &pb.Message{
					Type:    pb.Message_NOTIFICATION,
					Cmd:     pb.Message_NONE,
					Msgid:   messageId,
					To:      in.GetTo(),
					From:    in.GetFrom(),
					ArriveTime:    ctime,
					SendTime:in.GetSendTime(),
					Content: in.Content,
					ContentType:in.ContentType,
					Isgroup: in.GetIsgroup(),
				}
				messageForward(resp,uid)
			}

		}(groupIdList)

		for _,uid := range groupIdList {
			err := dbops.MessageCounter(gid,uid)
			if err != nil {
				Logger.Warn(err.Error())
			}
		}
	}else{// 单聊
		go func(){
			ack := &pb.Message{
				Type:    pb.Message_ACK,
				Cmd:     pb.Message_NONE,
				Msgid:   messageId,
				To:      in.GetTo(),
				From:    in.GetFrom(),
				ArriveTime:    ctime,
				SendTime:in.GetSendTime(),
				Content:in.Content,
				ContentType:in.ContentType,
				Isgroup: in.GetIsgroup(),
			}
			messageForward(ack,in.GetFrom())
			resp := &pb.Message{
				Type:    pb.Message_NOTIFICATION,
				Cmd:     pb.Message_NONE,
				Msgid:   messageId,
				To:      in.GetTo(),
				From:    in.GetFrom(),
				ArriveTime: ctime,
				SendTime:in.GetSendTime(),
				Content:in.Content,
				ContentType:in.ContentType,
				Isgroup: in.GetIsgroup(),
			}
			messageForward(resp,in.GetTo())
		}()
		err := dbops.MessageCounter(in.GetFrom(), in.GetTo())
		if err != nil {
			Logger.Warn(err.Error())
			return
		}
	}

}

// 创建群聊
func createGroupRequest(in *pb.Message) {
	gid, gname, err := dbops.CreateGroupStore(in.GetFrom(), in.GetContent())
	if err != nil {
		Logger.Warn(err.Error())
		errorRequestResponse(in,in.GetFrom(),pb.Message_GROUP_CREATION_FAILED)
		return
	}
	in.Userlist = append(in.Userlist,in.GetFrom())
	_ = dbops.GroupAddUsers(gid, in.Userlist)

	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_CREATE_GROUP,
		From:    in.GetFrom(),
		ArriveTime: time.Now().Unix(),
		SendTime:in.GetSendTime(),
		To:      gid,
		Isgroup: true,
		Content: gname,
	}
	messageForward(ack,in.GetFrom())

	for _, id := range in.Userlist {
		if id==in.GetFrom() {continue}
		resp := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_CREATE_GROUP,
			From:    in.GetFrom(),
			ArriveTime: time.Now().Unix(),
			SendTime:in.GetSendTime(),
			To:      gid,
			Isgroup: true,
			Content: gname,
		}
		messageForward(resp,id)
	}

}

// 拉人进群
func groupAddMemRequest(in *pb.Message) {
	if !in.GetIsgroup() {
		errorRequestResponse(in,in.GetFrom(),pb.Message_REQUEST_BODY_PARAMS_ERROR)
		return
	}

	info, err := dbops.GetGroupById(in.To)
	if err!=nil {
		errorRequestResponse(in,in.GetFrom(),pb.Message_REQUEST_BODY_PARAMS_ERROR)
		return
	}

	_ = dbops.GroupAddUsers(in.To, in.Userlist)

	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_GROUP_ADDMEMBERS,
		From:    in.GetFrom(),
		ArriveTime:  time.Now().Unix(),
		SendTime:in.GetSendTime(),
		Isgroup: true,
		Content: info.Name,
		To:in.GetTo(),
	}
	messageForward(ack,in.GetFrom())

	for _, id := range in.Userlist {
		resp := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_GROUP_ADDMEMBERS,
			From:    in.GetFrom(),
			ArriveTime:    time.Now().Unix(),
			SendTime:in.GetSendTime(),
			Isgroup: true,
			Content: info.Name,
			To:in.GetTo(),
		}
		messageForward(resp,id)
	}
}

// 消息撤回
func withdrawMessage(in *pb.Message){


	if in.GetMsgid() < 1 {
		errorRequestResponse(in,in.GetFrom(),pb.Message_REQUEST_BODY_PARAMS_ERROR)
		return
	}
	t,err:=dbops.GetMessageArriveTime(in.Msgid)
	if err!=nil ||time.Now().Sub(time.Unix(t,0))>time.Minute*2{
		errorRequestResponse(in,in.GetFrom(),pb.Message_WITHDRAW_MESSAGE_FAILED)
		return
	}
	err = dbops.DeleteMsgById(in.GetMsgid())
	if err != nil {
		Logger.Warn(err.Error())
		errorRequestResponse(in,in.GetFrom(),pb.Message_WITHDRAW_MESSAGE_FAILED)
		return
	}

	ack := &pb.Message{
		Type:        pb.Message_ACK,
		Cmd:         pb.Message_MSG_BACK,
		Msgid:       in.GetMsgid(),
		To:          in.GetTo(),
		From:        in.GetFrom(),
		ArriveTime:    time.Now().Unix(),
		SendTime:in.GetSendTime(),
		ContentType: in.ContentType,
		Isgroup:     in.GetIsgroup(),
	}
	messageForward(ack, in.GetFrom())

	if in.Isgroup { // 群聊
		gid := in.GetTo()
		groupIdList, err := dbops.GetGroupAllMemberId(gid)
		if err != nil {
			Logger.Warn(err.Error())
			errorRequestResponse(in, in.GetFrom(), pb.Message_REQUEST_BODY_PARAMS_ERROR)
			return
		}
		for _, uid := range groupIdList {
			if uid == in.GetFrom() {continue}
			resp := &pb.Message{
				Type:        pb.Message_NOTIFICATION,
				Cmd:         pb.Message_MSG_BACK,
				Msgid:       in.GetMsgid(),
				From:        in.GetFrom(),
				To:          in.GetTo(),
				ArriveTime:    time.Now().Unix(),
				SendTime:in.GetSendTime(),
				ContentType: in.ContentType,
				Isgroup:     in.GetIsgroup(),
			}
			messageForward(resp, uid)
		}
	}else{
		resp := &pb.Message{
			Type:    pb.Message_NOTIFICATION,
			Cmd:     pb.Message_MSG_BACK,
			Msgid:   in.GetMsgid(),
			To:      in.GetTo(),
			From:    in.GetFrom(),
			ArriveTime: time.Now().Unix(),
			SendTime:in.GetSendTime(),
			ContentType:in.ContentType,
			Isgroup: in.GetIsgroup(),
		}
		messageForward(resp,in.GetTo())
	}
}

// 添加好友
func createChatSession(in *pb.Message) {
	if in.GetIsgroup() {
		errorRequestResponse(in,in.GetFrom(),pb.Message_REQUEST_BODY_PARAMS_ERROR)
		return
	}
	err := dbops.NewChatSession(in.GetFrom(), in.GetTo())
	if err != nil {
		Logger.Error("create chat session  wrong"+err.Error())
		errorRequestResponse(in,in.GetFrom(),pb.Message_CHAT_SESSION_CREATION_FAILED)
		return
	}

	//处理数据ACK
	ack := &pb.Message{
		Type:    pb.Message_ACK,
		Cmd:     pb.Message_CREATE_SESSION,
		To:      in.GetTo(),
		From:    in.GetFrom(),
		ArriveTime: time.Now().Unix(),
		SendTime:in.GetSendTime(),
		Isgroup: false,
	}
	messageForward(ack,in.GetFrom())

	// 处理数据 send
	send := &pb.Message{
		Type:    pb.Message_NOTIFICATION,
		Cmd:     pb.Message_CREATE_SESSION,
		To:      in.GetTo(),
		From:    in.GetFrom(),
		ArriveTime: time.Now().Unix(),
		SendTime:in.GetSendTime(),
		Isgroup: false,
	}
	messageForward(send,in.GetTo())
}

// 收到消息确认
func messageAckUpdate(in *pb.Message){
	Logger.Debug("ACK",zap.Int64("from",in.GetFrom()),zap.Int64("to",in.GetTo()),zap.Bool("isGroup",in.GetIsgroup()))
	err := dbops.UpdateCounterTable(in.GetFrom(), in.GetTo(), in.GetIsgroup())
	if err != nil {
		Logger.Warn(err.Error())
	}
}


