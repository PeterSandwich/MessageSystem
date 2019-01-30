import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  ws: WebSocket;
  collection: Protocol.Message = new(Protocol.Message);
  constructor(private http:HttpClient) { }

  createSocket(url:string){
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
      console.log(conn)}
      
    };
    this.ws.onclose = function() {
      console.log("WebSocket结束")
    };
  }

  sendMessage(message: any){
    this.ws.send(message);
  }

  getUserList(name:string):Observable<any>{
      let url  = environment.apiUrl+"/userlist?name"+name
      return this.http.get(url)
  }

  getChatList(){
    let url  = environment.apiUrl+"/chatlist"
    return this.http.get(url)
  }

  getChatMessageList(data){
    let url  = environment.apiUrl+"/histchat"
    return this.http.post(url,JSON.stringify(data))
  }


  /////////////////////////////////////////////////////////////////
  FriendList = [
    {ID:1000021,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 1},
    {ID:1000022,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 9},
    {ID:1000023,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 0},
    {ID:1000024,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 4},
    {ID:1000025,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 5},
    {ID:1000026,NAME:"用户/群名",HEADIMG:"http://xxxxxxxxxx.jpg",ISGROUP: false,Counter: 3},
  ];

  MessageList = [
    {ID:1000021,ISGROUP: false,Message: [
      {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1000021,To:1, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
    ]},
    {ID:1000022,ISGROUP: false,Message: [
      {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
    ]},
    {ID:100001,ISGROUP: false,Message: [
      {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 0,From: 1,To: 2, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
    ]}

  ]
}


