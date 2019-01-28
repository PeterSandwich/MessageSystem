package main

import (
	pb "../proto/protocol"
	"fmt"
	"github.com/go-redis/redis"
	"github.com/golang/protobuf/proto"
	"golang.org/x/net/context"
	"google.golang.org/grpc"
	"log"
	"net"

)




func main() {


	lis, err := net.Listen("tcp", ":9877")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	pb.RegisterToServerMsgServer(s, &GateRpc{})
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}



//==================== RPC 服务=============================

type GateRpc struct{}
// gRPC 两个服务之一， 数据流是 gate -> RPC server
// 任何消息都无处理的从gate转发到 这里
func (c *GateRpc)SendMsg(ctx context.Context, in *pb.MessageRequest) (*pb.ACKResponse,error) {

	switch in.TypeOfMsg {
	case pb.MessageRequest_C2CSEND_REQUEST:	C2CSendRequest(in)
	case pb.MessageRequest_C2GSEND_REQUEST:	C2GSendRequest(in)
	case pb.MessageRequest_CONTROL_REQUEST:
		switch in.TypeOfCtrl {
		case pb.MessageRequest_GROUP_ADDMEMBERS: AddMemberToGroup(in)
		case pb.MessageRequest_CREATE_GROUP: CreateGroup(in)
		}
	}
	return &pb.ACKResponse{},nil
}



// gRPC 两个服务之二， 数据流 RPC server -> gate ，
// 消息在这里已经包装好了，直接发到gate，就可以根据conn 发出去
func (c *GateRpc) ResponseToGate(in *pb.EmptyRequest,stream pb.ToServerMsg_ResponseToGateServer) error {
	engine := GetEngineInstance()
	subscribe := engine.Redis_conn.Subscribe("MessageQueue")
	for{
		result, e := subscribe.Receive()
		fmt.Println("subscribe.ReceiveTimeout(0)",result)
		if e != nil {
			panic(e)
		}
		switch msg := result.(type) {
		case *redis.Message:
			fmt.Println( "Received", msg.Payload, "on channel", msg.Channel)
			var data pb.MessageResponse
			e := proto.Unmarshal([]byte(msg.Payload), &data)
			if e != nil {
				panic(e)
			}
			if err := stream.Send(&data); err != nil {
				log.Printf("stream send error: %v\n",err)
			}
		default:
			fmt.Println(nil, "Got control message", msg)
		}
	}
	return nil
}








