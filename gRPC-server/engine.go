package main

import (
	"github.com/go-redis/redis"
	"runtime"
	"sync"
)

type Engine struct {
	 DB DbControl
	 Redis_conn *redis.Client
	 Lock *sync.Mutex
}

var once sync.Once
var singleton *Engine

func GetEngineInstance() *Engine {

	once.Do(func(){
		Db := NewDBconnect()
		runtime.GOMAXPROCS(runtime.NumCPU())
		MyRedis := redis.NewClient(&redis.Options{
			Addr:     "localhost:6379",
			Password: "",
			DB:       0,
		})
		singleton = &Engine{
			DB:DbControl{Db},
			Redis_conn:MyRedis,
			Lock:new(sync.Mutex),
		}
	})
	return singleton
}
