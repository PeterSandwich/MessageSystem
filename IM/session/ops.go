package session

import (
	"MessageSystem/IM/config"
	"github.com/go-redis/redis"
	"github.com/satori/go.uuid"
	"go.uber.org/zap"
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
	redisConn.Set(sessionid.String(),uid,0)//,	120*time.Minute)
	return sessionid.String()
}

func IsSessionExpired(sid string) (string, bool) {
	if len(sid) == 0 {
		Logger.Debug("IsSessionExpired session id: nil")
		return "",true
	}
	val, err := redisConn.Get(sid).Result()
	if err != nil  {// 当过期处理
		Logger.Warn(sid+" : redis 过期"+err.Error())
		if err != redis.Nil{

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
		return
	}
	redisConn.Del(sid)
}

