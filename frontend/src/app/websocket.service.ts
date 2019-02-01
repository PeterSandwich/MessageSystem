import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Long } from 'protobufjs';
import { UserService } from './user.service';
import { MesList } from './chat/data';

@Injectable()
export class WebsocketService {
  
//根据用户id，在右边列出信息。可以多弄一个数组来存
  ws: WebSocket;
  wsFriendList:FriendList;    
  wsMessageList:MessageList;
  wsUserList: Userlist;
  collection: Protocol.Message = new(Protocol.Message);
  constructor(private http:HttpClient,private us:UserService) { 
    this.wsFriendList = new(FriendList);
    this.wsFriendList.List = [];
    this.wsMessageList = new(MessageList);
    this.wsMessageList.List = [];
    this.wsUserList = new(Userlist);
    this.wsUserList.Ulist = [];
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
        console.log("COMMOM",conn);
        for(let i=0;i<this.wsMessageList.List.length;i++){
            if(conn.isgroup == this.wsMessageList.List[i].Isgroup&&
              ((conn.isgroup &&conn.to==this.wsMessageList.List[i].ID)||(!conn.isgroup &&conn.from==this.wsMessageList.List[i].ID))){
              let item = new(MessageItem);
              item.Mid = conn.msgid;
              item.From = conn.from;
              item.To = conn.from;
              if(conn.isgroup){
                item.To = conn.to;
              }
              item.Content = conn.content;
              item.ContentType =conn.contentType;
              item.Time = conn.time;
              this.wsMessageList.List[i].MList.push(item);
              console.log(this.wsMessageList.List[i]);
              break;
            }
        }
      }else if(conn.cmd == Protocol.Message.CtrlType.CREATE_SESSION){ //添加好友请求
        this.createSessById(conn,conn.from)
      }else if (conn.cmd == Protocol.Message.CtrlType.CREATE_GROUP || conn.cmd == Protocol.Message.CtrlType.GROUP_ADDMEMBERS){
        this.createGroupById(conn,conn.to)
      }else if(conn.cmd == Protocol.Message.CtrlType.MSG_BACK){
        for(let i=0;i<this.wsMessageList.List.length;i++){
          if(conn.isgroup == this.wsMessageList.List[i].Isgroup&&
            ((conn.isgroup &&conn.to==this.wsMessageList.List[i].ID)||(!conn.isgroup &&conn.from==this.wsMessageList.List[i].ID))){
             for(let j=0;j<this.wsMessageList.List[i].MList.length;j++){
              if (this.wsMessageList.List[i].MList[j].Mid == conn.msgid){
                this.wsMessageList.List[i].MList.slice(j,1);
                break;
              }
            }
          }
        }
      }
    }else if(conn.type==Protocol.Message.Type.ACK){
      if (conn.cmd == Protocol.Message.CtrlType.NONE){
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
      }else if(conn.cmd == Protocol.Message.CtrlType.CREATE_SESSION){//添加好友请求确认信息
       this.createSessById(conn,conn.to)
      }else if (conn.cmd == Protocol.Message.CtrlType.CREATE_GROUP || conn.cmd == Protocol.Message.CtrlType.GROUP_ADDMEMBERS){
        this.createGroupById(conn,conn.to)
      }
    }
  }


    createSessById(conn: Protocol.Message,uid: number|Long){
        let item = new(FriendItem);
        item.ID = uid;
        this.us.getUserbyId(item.ID).subscribe((data)=>{
          console.log("data=", data)
          item.Name = data["Name"];
          item.Headimg = data["Img_url"];
        });
        item.Counter = 1;
        item.Isgroup = false;
        this.wsFriendList.List.push(item);

        let sess = new(Session)
        sess.ID = item.ID
        sess.Isgroup = false;
        sess.MList = [];
        this.wsMessageList.List.push(sess);
   }
   createGroupById(conn: Protocol.Message,gid: number|Long){
    let item = new(FriendItem);
    item.ID = gid;
    this.us.getGroupById(item.ID).subscribe((data)=>{
      item.Name = data["Name"];
      item.Headimg = data["Headimg"];
    });
    item.Counter = 1;
    item.Isgroup = true;
    this.wsFriendList.List.push(item);

    let sess = new(Session)
    sess.ID = item.ID
    sess.Isgroup = true;
    sess.MList = [];
    this.wsMessageList.List.push(sess);
}
  

  // 发送信息，不在这里构造消息体
  sendMessage(message: Protocol.Message){
    message.time = Date.now()
    console.log("mes.contentype=",message.contentType);
    if (message.type ==  Protocol.Message.Type.REQUEST) {
      if(message.cmd == Protocol.Message.CtrlType.NONE){  // 单聊或群聊
        for(let i=0;i<this.wsMessageList.List.length;i++){
          if(message.isgroup == this.wsMessageList.List[i].Isgroup&&message.to==this.wsMessageList.List[i].ID){
            let item = new(MessageItem);
            item.Mid = 0;
            item.From = message.from;
            item.To = message.to;
            item.Content = message.content;
            item.ContentType =message.contentType;
            item.Time = message.time;
            this.wsMessageList.List[i].MList.push(item);
            break;
          }
        }
      }
    }else if(message.cmd == Protocol.Message.CtrlType.MSG_BACK){   // 撤回消息
      if(message.msgid == 0){
        alert("消息ＩＤ不存在，无法撤回");
      }
      for(let i=0;i<this.wsMessageList.List.length;i++){
        if (message.to==this.wsMessageList.List[i].ID && message.isgroup == this.wsMessageList.List[i].Isgroup){
          for(let j=0;j<this.wsMessageList.List[i].MList.length;j++){
            if (this.wsMessageList.List[i].MList[j].Mid == message.msgid){
              this.wsMessageList.List[i].MList.slice(j,1);
              break;
            }
          }
        }
      }
    }
    console.log("发送前的数据",message)
    this.ws.send(Protocol.Message.encode(message).finish());
  }


  // 按名字取得用户列表
  getUserList(name:string = ""):Observable<any>{//全部用户
      // console.log("name = " ,name);
      let url  = environment.apiUrl+"/userlist?name="+name
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
  HistoryMessage(info){
    this.getChatMessageList(info).subscribe((data:MsgList) => {
      console.log("历史消息原数据",data)
      this.wsMessageList.List =[];
      if (data.List == null) {
        data.List = [];
      }
      for(let i=0;i<data.List.length;i++){
          let session = new(Session);
          session.MList = [];
          if (data.List[i].length>0){
            session.ID = data.List[i][0].From;
            if (data.List[i][0].Isgroup ||session.ID == this.us.MyUserId) {
              session.ID = data.List[i][0].To;
            }
            session.Isgroup = data.List[i][0].Isgroup;
          }else{continue;}
          console.log("session.ID",session.ID, data.List[i][0].To,data.List[i][0].From)
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
        console.log("ContenType = ", session.MList);

      }
      console.log("历史消息",this.wsMessageList.List)
    })
  }
  InitChatList(){
    this.getChatList().subscribe((data: ChatList) => {
      console.log("聊天列表",data);
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


export class UserItem{
	ID :number; 
	Name :string;
	Img_url :string;
}
export class Userlist{
	Ulist: UserItem[];
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
