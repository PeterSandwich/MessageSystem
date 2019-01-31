import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Long } from 'protobufjs';
import { UserService } from './user.service';

@Injectable()
export class WebsocketService {

  ws: WebSocket;
  wsFriendList:FriendList;
  wsMessageList:MessageList;
  collection: Protocol.Message = new(Protocol.Message);
  constructor(private http:HttpClient,private us:UserService) { 
    this.wsFriendList = new(FriendList);
    this.wsFriendList.List = [];
    this.wsMessageList = new(MessageList);
    this.wsMessageList.List = [];
  }


  // 建立websocket链接
  createSocket(url:string){
    let that = this
    this.ws = new WebSocket(url);
    this.ws.onopen = function() {
      console.log("WebSocket打开")
    };
    this.ws.onmessage = function(evt) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(evt.data);
      reader.onload = function (e) {
      let buf = new Uint8Array(reader.result as ArrayBuffer);
      let conn = Protocol.Message.decode(buf);
      that.parseNotification(conn)    //收到消息解析后分析消息
    }
      
    };
    this.ws.onclose = function() {
      console.log("WebSocket结束")
    };
  }

  //分析消息
  parseNotification(conn:Protocol.Message){
    if (conn.type==Protocol.Message.Type.NOTIFICATION){
      console.log("NOTIFICATION");
      if (conn.cmd == Protocol.Message.CtrlType.NONE){
        console.log("NONE");
        for(let i=0;i<this.wsMessageList.List.length;i++){
          if (conn.from==this.wsMessageList.List[i].ID && conn.isgroup == this.wsMessageList.List[i].Isgroup){
            let item = new(MessageItem);
            item.Mid = conn.msgid;
            item.From = conn.from;
            item.To = conn.to;
            item.Content = conn.content;
            item.ContentType =conn.contentType;
            item.Time = conn.time;
            this.wsMessageList.List[i].MList.push(item);
            break;
          }
        }
      }
    }else if(conn.type==Protocol.Message.Type.ACK){
      for(let i=0;i<this.wsMessageList.List.length;i++){
        if (conn.from==this.wsMessageList.List[i].ID && conn.isgroup == this.wsMessageList.List[i].Isgroup){
          for(let j=0;j<this.wsMessageList.List[i].MList.length;j++){
            if (this.wsMessageList.List[i].MList[j].Time == conn.time){
              this.wsMessageList.List[i].MList[j].Mid = conn.msgid;
              break;
            }
          }
          break;
        }
      }
    }
  }



  

  // 发送信息，不在这里构造消息体
  sendMessage(message: any){
    this.ws.send(message);
  }

  // 按名字取得用户列表
  getUserList(name:string = ""):Observable<any>{
      let url  = environment.apiUrl+"/userlist?name"+name
      return this.http.get(url)
  }

  

  getChatMessageList(data){
    let url  = environment.apiUrl+"/histchat"
    return this.http.post(url,JSON.stringify(data))
  }




  //  下面函数是登录的时候初始数据 
  //
  // 获取聊天列表，或者是好友聊天列表
  getChatList(){
    let url  = environment.apiUrl+"/chatlist"
    return this.http.get(url)
  }

  InitChatList(){
    this.getChatList().subscribe((data: ChatList) => {
      let HL =  new(HistList);
      HL.List = [];
      for(let i=0;i<data.List.length;i++){
        let FriItem:FriendItem = new(FriendItem);
        FriItem.ID=data.List[i].Id;
        FriItem.Name=data.List[i].Name;
        FriItem.Headimg=data.List[i].Headimg;
        FriItem.Isgroup=data.List[i].Isgroup;
        FriItem.Counter=data.List[i].Counter;
        this.wsFriendList.List.push(FriItem)

        let Ht = new(Hist);
        Ht.ID = data.List[i].Id;
        Ht.Isgroup = data.List[i].Isgroup;
        HL.List.push(Ht)
      }
      this.HistoryMessage(HL)
    })
  }

  HistoryMessage(info){
    this.getChatMessageList(info).subscribe((data:MsgList) => {
      console.log(data);
      this.wsMessageList.List =[];
      for(let i=0;i<data.List.length;i++){
          let session = new(Session);
          session.MList = [];
          if (data.List[i].length>0){
            session.ID = data.List[i][0].From;
            if (session.ID == this.us.MyUserId) {
              session.ID = data.List[i][0].To;
            }
            session.Isgroup = data.List[i][0].Isgroup;
          }
         for(let j=0;j<data.List[i].length;j++){
          let Item = new(MessageItem);
          Item.Mid = data.List[i][j].Mid;
          Item.From = data.List[i][j].From;
          Item.To = data.List[i][j].To;
          Item.Content = data.List[i][j].Content;
          Item.ContentType = data.List[i][j].ContentType;
          Item.Time = data.List[i][j].Time;
          session.MList.push(Item);
        }
        this.wsMessageList.List.push(session)
      }
    })
  }

  /////////////////////////////////////////////////////////////////
  // FriendList = [
  //   {ID:1000021,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 1},
  //   {ID:1000022,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 9},
  //   {ID:1000023,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 0},
  //   {ID:1000024,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 4},
  //   {ID:1000025,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 5},
  //   {ID:1000026,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 3},
  // ];

  // MessageList = [
  //   {ID:1000021,ISGROUP: false,Message: [
  //     {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 1,From: 1000021,To:1, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
  //   ]},
  //   {ID:1000022,ISGROUP: false,Message: [
  //     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
  //   ]},
  //   {ID:100001,ISGROUP: false,Message: [
  //     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
  //     {Mid: 0,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
  //   ]}

  // ]
}

export class FriendItem {
  ID: number|Long;
  Name: string;
  Headimg: string;
  Isgroup: boolean;
  Counter: number|Long;
}

export class FriendList {
  List: FriendItem[];
}

export class MessageItem {
  Mid: number|Long;
  From: number|Long;
  To: number|Long;
  Content: string;
  ContentType: number;
  Time: number|Long;
}
export class Session{
  ID: number|Long;
  Isgroup: boolean;
  MList: MessageItem[];
}
export class MessageList {
  List: Session[];
}


// 发送请求漫游消息的结构体
export class Hist {
  ID: number;
  Isgroup: boolean
}
export class HistList {
  List: Hist[]
}


//接收 好友列表的结构体
export class ChatItem {
  Sender:number
  Name: string
  Counter:number
  Headimg: string
  Id:number
  Isgroup:boolean
}
export class ChatList {
  List: ChatItem[]
}


// 接收 漫游信息的结构体
export class MsgItem{
 Mid: number;
 From: number;
 To: number;
 Content: string;
 ContentType: number;
 Time: number;
 Isgroup: boolean;
}

export class MsgList {
 List: MsgItem[][];
}




