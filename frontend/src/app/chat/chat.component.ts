import { Component, OnInit } from '@angular/core';
import {WebsocketService  } from '../websocket.service';
import { Protocol } from '../protocol/Protocol';
import { MAX_UNSIGNED_VALUE } from 'long';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { MesList } from './data';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  

  from_id = 0;
  to_id = 0;
  group = 0;
  addgtoup_id = 0;
  content = "";
  group_name = '';
  list = [];
  tips = "";
  isslect: boolean;
  my_img_url = "https://wx4.sinaimg.cn/orj360/828ffde3gy1fpn79ydbrmj20hs0hs40k.jpg";
  constructor(public ws:WebsocketService) { 
   
  }

  msg1: MesList[] = [{from: this.from_id, to: this.to_id, msgid: 0, content:this.content, img_url:this.my_img_url}];
  ngOnInit() {
   console.log("msg1=", typeof(this.msg1));
   this.list = [];
   this.isslect = false;
  }


  // sendMsg() {
  //   console.log("had send message");
  //   let msg = new(Protocol.MessageRequest)
  //   msg.from = this.from_id;
  //   msg.to  = this.to_id;
  //   msg.content = this.content;
  //   msg.TypeOfMsg = Protocol.MessageRequest.RequestType.C2CSEND_REQUEST
  //   this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  //   console.log("msg = ", msg)
  // }
  i = 0;
  sendMsg(){
    // let len = this.list.length;
    var m = this.i;
    if (m > 0){
      this.msg1[m] = this.msg1[m-1];
    }
    this.msg1[m].from = this.from_id;
    this.msg1[m].to = this.to_id;
    this.msg1[m].msgid = 0;
    this.msg1[m].content = this.content;
    // console.log("content2= ", this.msg1[m]);
    let msg = this.msg1[m];
    // console.log("msg=", msg);
    // this.list.push(this.msg1[m]);
    this.list.push({from:this.from_id, to:this.to_id, msgid:0, content: this.content, img_url:this.my_img_url});
    console.log("this.newlist=", this.list);
    this.content = "";
    m++;
  }

  // sendToGoup() {
  //   console.log("had send message");
  //   let msg = new(Protocol.MessageRequest)
  //   msg.from = this.from_id;
  //   msg.group  = this.group;
  //   msg.content = this.content;
  //   msg.TypeOfMsg = Protocol.MessageRequest.RequestType.C2GSEND_REQUEST
  //   this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  // }

  // addMemToGoup() {
  //   console.log("had send message");
  //   let msg = new(Protocol.MessageRequest)
  //   msg.to = this.to_id;
  //   msg.group  = this.addgtoup_id;
  //   msg.TypeOfMsg = Protocol.MessageRequest.RequestType.CONTROL_REQUEST;
  //   msg.TypeOfCtrl = Protocol.MessageRequest.CtrlType.GROUP_ADDMEMBERS;
  //   this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  // }

  // createGroup(){
  //   console.log("had send message");
  //   let msg = new(Protocol.MessageRequest)
  //   msg.from = this.from_id;
  //   msg.content = this.group_name;
  //   msg.TypeOfMsg = Protocol.MessageRequest.RequestType.CONTROL_REQUEST;
  //   msg.TypeOfCtrl = Protocol.MessageRequest.CtrlType.CREATE_GROUP;
  //   this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  // }
  // test(){
  //   let msg = new(Protocol.MessageResponse)
  //   msg.content = "testing websocket protocol buf"
  //   msg.msgid = 28;
  //   console.log(Protocol.MessageRequest.encode(msg).finish())
  // }
  test2(id: number){
    this.to_id = id;
    this.isslect = true;
    console.log("to_id = ", this.to_id);
    console.log("from_id = ", this.from_id);
    console.log("content= ", this.content);

    switch(id){
      case 2: this.list = this.ws.contentList_id_2; break;
      case 4: this.list = this.ws.contentList_id_4; break;
      case 9: this.list = this.ws.contentList_id_9; break;
      default: this.list = []; break;
    } 
    console.log("list=", this.list)
  }
}

