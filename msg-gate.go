package main

var DBmap *map[int64]*Client

type CenterLogic struct {
	clients *map[int64]*Client
	message chan []byte
}

func NewCenterLogic() *CenterLogic {
	db := make(map[int64]*Client)
	DBmap=&db
	return &CenterLogic{
		clients:&db,
		message:make(chan []byte),
	}
}



func (center *CenterLogic) Run(){
	for {
		select {
		case msg := <- center.message:
			DoingMsg(msg)
		}
	}
}