import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { MesList } from './chat/data';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  chatList = [//用户列表的数组， id, 名字，头像
    {id:1,name:"xiaohua",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:2,name:"sdafa",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:3,name:"超大女",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:4,name:"红人馆",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:5,name:"二七万达",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:6,name:"不GV分",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:7,name:"曲儿",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:8,name:"百度",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:9,name:"健康与",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:10,name:"请问",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:11,name:"各位大哥",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:12,name:"郭浩然",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:13,name:"我去二群",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {id:14,name:"xiaoh任何ua",img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"}
  ]
  contentList_id_2: MesList[] = [ //聊天内容的列表
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:2, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:2, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"}
  ]
  contentList_id_4 :MesList[] = [ //聊天内容的列表
    {from:0, to:4, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:4, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:4, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:4, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:4, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:4, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
  ]
  contentList_id_9: MesList[] = [ //聊天内容的列表
    {from:0, to:9, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:9, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:9, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:9, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:9, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:9, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:9, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:0, to:9, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
    {from:9, to:0, msgid:0, content:"我发送了一条消息", img_url:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg"},
  ]
//根据用户id，在右边列出信息。可以多弄一个数组来存
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
  FriendList = [
    {ID:1000021,NAME:"用户/群名1",HEADIMG:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg",ISGROUP: false,Counter: 1},
    {ID:1000022,NAME:"用户/群名2",HEADIMG:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg",ISGROUP: false,Counter: 9},
    {ID:1000023,NAME:"用户/群名3",HEADIMG:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg",ISGROUP: false,Counter: 0},
    {ID:1000024,NAME:"用户/群名4",HEADIMG:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg",ISGROUP: false,Counter: 4},
    {ID:1000025,NAME:"用户/群名5",HEADIMG:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg",ISGROUP: false,Counter: 5},
    {ID:1000026,NAME:"用户/群名6",HEADIMG:"https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg",ISGROUP: false,Counter: 3},
  ];

  MessageList = [
    {ID:1000021,ISGROUP: false,Message: [
      {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1000021,To:1, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 1000021, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
    ]},
    {ID:1000022,ISGROUP: false,Message: [
      {Mid: 1,From: 1,To: 1000022, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 1000022, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1000022,To: 1, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
    ]},
    {ID:1000023,ISGROUP: false,Message: [
      {Mid: 1,From: 1,To: 1000023, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1000021,To: 1, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 1,From: 1,To: 1000023, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844},
      {Mid: 0,From: 1,To: 1000023, Gid: 0, Content: "hello",ContentType: 0,Time: 1585484844}
    ]}

  ]
}


