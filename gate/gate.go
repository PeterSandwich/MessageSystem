package main

import (
	"github.com/go-redis/redis"
	"google.golang.org/grpc"
	"sync"
)

type Gate struct {
	DB DbControl
	Grpc_conn *grpc.ClientConn
	Redis_conn *redis.Client
	SessToUid  map[string]int64 	// session ID, user ID
	UidToCli  map[int64]*Client 	// user ID, *Client
}


var once sync.Once
var singleton *Gate

func GetGateInstance() *Gate {

	once.Do(func(){

		Grpc_conn, err := grpc.Dial(":9877", grpc.WithInsecure())
		if err != nil {
			panic(err)
		}
		Redis_conn := redis.NewClient(&redis.Options{Addr:"localhost:6379",Password: "",DB:0})
		db := NewDBconnect()
		singleton = &Gate{
			DB:DbControl{db},
			Grpc_conn:Grpc_conn,
			Redis_conn:Redis_conn,
			SessToUid:make(map[string]int64),
			UidToCli: make(map[int64]*Client),
		}
	})
	return singleton

}


