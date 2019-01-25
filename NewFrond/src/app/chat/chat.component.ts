import { Component, OnInit } from '@angular/core';
import {WebsocketService  } from '../websocket.service';
import { Protocol } from '../protocol/Protocol';




@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  

  from_id = 0;
  to_id = 0;
  group =0;
  addgtoup_id=0;
  content="";
  constructor(private ws:WebsocketService) { 
   
  }

  ngOnInit() {
    this.ws.createSocket("ws://localhost:9876/ws");
   
  }


  sendMsg() {
    console.log("had send message");
    let msg = new(Protocol.MessageRequest)
    msg.from = this.from_id;
    msg.to  = this.to_id;
    msg.content = this.content;
    msg.TypeOfMsg = Protocol.MessageRequest.RequestType.C2CSEND_REQUEST
    this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  }

  sendToGoup() {
    console.log("had send message");
    let msg = new(Protocol.MessageRequest)
    msg.from = this.from_id;
    msg.group  = this.group;
    msg.content = this.content;
    msg.TypeOfMsg = Protocol.MessageRequest.RequestType.C2GSEND_REQUEST
    this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  }

  addGoup() {
    console.log("had send message");
    let msg = new(Protocol.MessageRequest)
    msg.from = this.from_id;
    msg.group  = this.addgtoup_id;
    msg.TypeOfMsg = Protocol.MessageRequest.RequestType.CONTROL_REQUEST;
    msg.TypeOfCtrl = Protocol.MessageRequest.CtrlType.GROUP_ADDMEMBERS;
    this.ws.sendMessage(Protocol.MessageRequest.encode(msg).finish())
  }
  test(){
    let msg = new(Protocol.MessageResponse)
    msg.content = "testing websocket protocol buf"
    msg.msgid = 28;
    console.log(Protocol.MessageRequest.encode(msg).finish())
  }
  
}

