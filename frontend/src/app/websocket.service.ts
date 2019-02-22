import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders }from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Long } from 'protobufjs';
import { UserService } from './user.service';
import * as com from './common/im';
// import { FriendItem, chatRoom } from './chat/data';

@Injectable()
export class WebsocketService {
  
  session_id: string;
  ws: WebSocket;

  global_message: com.GlobalMessage;  //全局全部消息
  nearest_contact:com.NearestContact; // 最近联系人
  address_book: com.NearestContact; // 通讯录
  FriItem: com.NearestContactItem;


  collection: Protocol.Message = new(Protocol.Message);
  constructor(private http:HttpClient,private us:UserService) { 

    this.global_message = new(com.GlobalMessage);
    this.global_message.chat_room_list = new Map<number|Long,com.ChatRoom>();

    this.nearest_contact = new(com.NearestContact);
    this.nearest_contact.contact_list = [];

    this.address_book = new(com.NearestContact)
    this.address_book.contact_list = [];

    this.FriItem = new(com.NearestContactItem);

  }



  // 建立websocket链接
  createSocket(url:string){

    let that = this
    this.ws = new WebSocket(url);

    this.ws.onopen = function() {console.log("WebSocket打开");};
    this.ws.onmessage = function(evt) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(evt.data);
      reader.onload = function (e) {
      let buf = new Uint8Array(reader.result as ArrayBuffer);
      let conn = Protocol.Message.decode(buf);
      console.log(conn)
      that.parseNotification(conn)    //收到消息解析后分析消息
    }};
    this.ws.onclose = function() {console.log("WebSocket关闭")};
  }

  // 请求头部设置x-session-id
  createSessionHeader():HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('X-Session-Id', this.us.session_id);
    console.log("session=", this.us.session_id)
    return headers
  }

  // 获取通讯录
  getAddressBook():Observable<any>{
    let url  = environment.apiUrl+"/address-book"
    return this.http.get(url, {headers:this.createSessionHeader()})
  }

  // 获取最近联系人
  getNearestContact():Observable<any>{
    let url  = environment.apiUrl+"/recent-contact"
    return this.http.get(url, {headers:this.createSessionHeader()})
  }

  //获取最近联系人的最近聊天信息
  getNearestContactAndMessage(){
    let url  = environment.apiUrl+"/recent-contact-message"
    return this.http.get(url, {headers:this.createSessionHeader(),observe:'response'})
  }
  

  // 发送信息，不在这里构造消息体
  sendMessage(m: Protocol.Message){
    // console.log("mes.contentype=",message.contentType);
    //先发送出数据
    console.log("websocket发送前的数据:",m)
    this.ws.send(Protocol.Message.encode(m).finish());
    if (m.type ==  Protocol.Message.Type.REQUEST) {
      if(m.cmd == Protocol.Message.CtrlType.NONE){  
        this.DisplayMessagesLocally(m,m.to) // 说明是一条 单发或群发消息，在本地显示
      }
    }else if(m.cmd == Protocol.Message.CtrlType.MSG_BACK){  
      if(m.msgid == 0){
        alert("消息ＩＤ不存在，无法撤回");
      }else{

      }
        // 撤回消息
        // TODO 单聊或群聊发送消息 消息在本地消失
    }
    
  }


  //分析消息
  parseNotification(m:Protocol.Message){
    if (m.type==Protocol.Message.Type.NOTIFICATION){
      console.log("NOTIFICATION");
      if (m.cmd == Protocol.Message.CtrlType.NONE){
        if(m.isgroup){
          this.DisplayMessagesLocally(m,m.to)
        }else{
          this.DisplayMessagesLocally(m,m.from) // 说明是一条 单发或群发消息，在本地显示
        }
       
      }else if(m.cmd == Protocol.Message.CtrlType.CREATE_SESSION){ 
        // 说明是陌生人主动找你聊天,需要在本地创建和他聊天的chatroom
      }else if (m.cmd == Protocol.Message.CtrlType.CREATE_GROUP || m.cmd == Protocol.Message.CtrlType.GROUP_ADDMEMBERS){
       // 需要在本地创建和群聊天的chatroom
      }else if(m.cmd == Protocol.Message.CtrlType.MSG_BACK){
        // 消息撤回 需要删除本地消息,以示撤回
      }
    }else if(m.type==Protocol.Message.Type.ACK){
      if (m.cmd == Protocol.Message.CtrlType.NONE){
        // 发送的消息已经确认，把回送的 message id加入到那条信息 
      }else if(m.cmd == Protocol.Message.CtrlType.CREATE_SESSION){
      }else if (m.cmd == Protocol.Message.CtrlType.CREATE_GROUP || m.cmd == Protocol.Message.CtrlType.GROUP_ADDMEMBERS){
      }
    }
  }


  //下面是处理消息的
  
  DisplayMessagesLocally(m: Protocol.Message,room_id: number|Long){
    if (!this.global_message.chat_room_list.has(room_id)){
      console.log("没有这个会话，无法插入消息");
      return
    }
    let chat_room = this.global_message.chat_room_list.get(room_id);
    if (!(chat_room.id == room_id && chat_room.is_group == m.isgroup)){
      console.log("消息与会话的信息不符合");
      return
    }
    if(chat_room.message_list==null){
      chat_room.message_list = [];
    }
    let newMsg = new(com.MessageItem);
    newMsg.id = m.msgid;
    newMsg.from = m.from;
    newMsg.to = m.to;
    newMsg.content = m.content;
    newMsg.content_type = m.contentType;
    newMsg.is_group = m.isgroup;
    newMsg.arrive_time = m.time;

    chat_room.message_list.push(newMsg);
    console.log(chat_room);
    console.log(this.global_message.chat_room_list.get(room_id));
  }
}
