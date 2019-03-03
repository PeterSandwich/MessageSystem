package session

import (
	"MessageSystem/IM/config"
	"github.com/go-redis/redis"
	"github.com/satori/go.uuid"
	"go.uber.org/zap"
	"time"
)

var (
	redisConn *redis.Client
	Logger 	   *zap.Logger
)

func InitSession(){
	redisConn = redis.NewClient(&redis.Options{Addr: config.RedisUrlCfg(), Password: "", DB: 0})
	_, err := redisConn.Ping().Result()
	if err!=nil{
		return
		panic(err)
	}

	Logger, _ = zap.NewDevelopment()
}


func GenerateNewSessionId(uid int64) string {
	sessionid, _ := uuid.NewV4()
	redisConn.Set(sessionid.String(),uid,120*time.Minute)
	return sessionid.String()
}

func IsSessionExpired(sid string) (string, bool) {
	if len(sid) == 0 {
		Logger.Warn("IsSessionExpired session id: nil")
		return "",true
	}
	val, err := redisConn.Get(sid).Result()
	if err != nil  {// 当过期处理
		Logger.Warn("redis 过期")
		if err != redis.Nil{
			redisConn.Del(sid)
			Logger.Warn("redis get session in IsSessionExpired() : "+err.Error())
		}
		return "",true
	}
	return val, false
}

func DeleteSeesion(sid string){
	_, err := redisConn.Get(sid).Result()
	if err != nil {
		Logger.Warn("Delete session in DeleteSeesion()"+err.Error())
	}
	redisConn.Del(sid)
}

