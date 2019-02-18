import { Server } from "tls";

 //获取最近联系人的最近聊天信息
 initHistoryMessage(){
    this.ws.getNearestContactMessage().subscribe(data => {
     console.log(data.status)
     if(data.status==200){
       if(data.body["size"]!=null){
         console.log(data.body)
       }
     }
   })
 }


 Server

 import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { HttpClient } from '@angular/common/http';
import { HttpHeaders }from '@angular/common/http'
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Long } from 'protobufjs';
import { UserService } from './user.service';
import * as com from './common/im';

@Injectable()
export class WebsocketService {
  
  session_id: string;
  ws: WebSocket;

  global_message: com.GlobalMessage;  //全局全部消息
  nearest_contact:com.NearestContact; // 最近联系人
  address_book: com.AddressBook; // 通讯录


  collection: Protocol.Message = new(Protocol.Message);
  constructor(private http:HttpClient,private us:UserService) { 

    this.global_message = new(com.GlobalMessage);
    this.global_message.chat_room_list = new Map<number|Long,com.ChatRoom[]>();

    this.nearest_contact = new(com.NearestContact);
    this.nearest_contact.contact_list = [];

    this.address_book = new(com.AddressBook)
    this.address_book.friends_list = [];
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
      //that.parseNotification(conn)    //收到消息解析后分析消息
    }};
    this.ws.onclose = function() {console.log("WebSocket关闭")};
  }

  // 请求头部设置x-session-id
  createSessionHeader():HttpHeaders {
    let headers = new HttpHeaders();
    headers = headers.set('"X-Session-Id', this.us.session_id);
    return headers
  }

  // 获取通讯录
  getAddressBook():Observable<any>{
    let url  = environment.apiUrl+"/api/address-book"
    return this.http.get(url, {headers:this.createSessionHeader()})
  }

  // 获取最近联系人
  getNearestContact():Observable<any>{
    let url  = environment.apiUrl+"/api/recent-contact"
    return this.http.get(url, {headers:this.createSessionHeader()})
  }

  //获取最近联系人的最近聊天信息
  getNearestContactMessage(){
    let url  = environment.apiUrl+"/api/recent-contact-message"
    return this.http.get(url, {headers:this.createSessionHeader(),observe:'response'})
  }
  