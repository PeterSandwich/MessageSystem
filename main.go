package main

import (
	"database/sql"
	"github.com/go-redis/redis"
	"go.uber.org/zap"
	"net/http"
)

var (
	DB_conn    *sql.DB
	Redis_conn *redis.Client
	Clients    map[int64]*Client
	Logger 	   *zap.Logger
)

func init() {
	Logger, _ = zap.NewDevelopment()
	connStr := "postgres://dbuser:319079@139.199.196.31/imdb"
	db, err := sql.Open("postgres", connStr)
	if err != nil {
		Logger.Panic("can't open database:" + err.Error())
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
	http.HandleFunc("/upload", uploadFileHandler())
	fs := http.FileServer(http.Dir(uploadPath))
	http.Handle("/files/", http.StripPrefix("/files", fs))
	Logger.Info("IM Server Start at 9988")
	go Run()
	if err := http.ListenAndServe(":9988", nil); err != nil {
		Logger.Panic("IM Server " + err.Error())
	}
}