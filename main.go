package main

import (
	"database/sql"
	"github.com/go-redis/redis"
	log "github.com/sirupsen/logrus"
	"net/http"
	"os"
)

var (
	DB_conn    *sql.DB
	Redis_conn *redis.Client
	Clients    map[int64]*Client
)

func init() {
	customFormatter := new(log.TextFormatter)
	customFormatter.FullTimestamp = true                    // 显示完整时间
	customFormatter.TimestampFormat = "2006-01-02 15:04:05" // 时间格式
	customFormatter.DisableTimestamp = false                // 禁止显示时间
	customFormatter.DisableColors = false                   // 禁止颜色显示
	log.SetFormatter(customFormatter)
	log.SetOutput(os.Stdout)
	log.SetLevel(log.DebugLevel)

	// 全局变量初始化
	connStr := "postgres://dbuser:319079@139.199.196.31/imdb"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		panic("sql can't open :" + err.Error())
	}
	DB_conn = db
	Redis_conn = redis.NewClient(&redis.Options{Addr: "localhost:6379", Password: "", DB: 0})
	Clients = make(map[int64]*Client)
}

func main() {

	http.HandleFunc("/api/signup", signUpHandle)
	http.HandleFunc("/api/login", loginHandle)
	http.HandleFunc("/api/quit", quitHandle)
	http.HandleFunc("/api/user", GetUser)
	http.HandleFunc("/api/group", GetGroup)
	http.HandleFunc("/api/userlist", GetUserList)
	http.HandleFunc("/api/chatlist", GetChatList)
	http.HandleFunc("/api/histchat", GetHistrotyMessage)
	http.Handle("/static/", staticFileHandler())
	http.HandleFunc("/", indexFileServer)
	http.HandleFunc("/ws", func(w http.ResponseWriter, r *http.Request) {
		ServeWs(w, r)
	})
	//fileserver
	http.HandleFunc("/upload", uploadFileHandler())
	http.HandleFunc("/files/", downloadfilehandler())
	fs := http.FileServer(http.Dir(uploadPath))
	http.Handle("/getpic/", http.StripPrefix("/getpic", fs))

	log.Info("* IM Server Start")
	go Run()
	if err := http.ListenAndServe(":9988", nil); err != nil {
		log.Panic("* IM Server " + err.Error())
	}
}
