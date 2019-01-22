package main

import (
	"MessageSystem/model"
	"fmt"
	"net/http"
	"time"
)


var DbCtrl *model.DbControl
func main() {

	fmt.Println("server start...",time.Now().Unix())
	DbCtrl = &model.DbControl{Db:model.NewDBconnect()}
	logic := NewCenterLogic()
	go logic.Run()


	fs:=http.FileServer(http.Dir("./frontend/dist/MessageSystem"))
	http.HandleFunc("/ws",func(w http.ResponseWriter, r *http.Request){
		 serverWs(logic,w,r)
	})

	http.Handle("/",fs)

	err := http.ListenAndServe(":9876", nil)
	if err != nil {
		panic(err)
	}

}
