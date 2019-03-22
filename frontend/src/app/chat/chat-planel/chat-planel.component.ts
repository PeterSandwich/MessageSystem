import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';

@Component({
  selector: 'app-chat-planel',
  templateUrl: './chat-planel.component.html',
  styleUrls: ['./chat-planel.component.css']
})
export class ChatPlanelComponent implements OnInit {


  @Input() my_head_img:string;
  @Input() my_id:number;
  @Input() your_info:com.ContactListItem;
  @Input() who;

  constructor(private ws: WebsocketService) { 
  }

  ngOnInit() {
    this.scollbuttom()
  }

  send(content:string){
    content = content.replace(/^\s*/,'');//去除左边空格
    if(content == ""||this.your_info.id==-1){
      return;
    }
  let msg = new(Protocol.Message)
  msg.type = Protocol.Message.Type.REQUEST;
  msg.cmd = Protocol.Message.CtrlType.NONE;
  msg.from = this.my_id;
  msg.to = this.your_info.id;
  msg.content =content;
  msg.contentType = Protocol.Message.ContentType.TEXT;
  msg.isgroup = this.your_info.is_group;
  msg.sendTime = Date.now();
  this.ws.sendMessage(msg);
  this.scollbuttom();
    
  }

  scollbuttom(){
    var div = document.getElementById('show_msg');
    div.scrollTop = div.scrollHeight;
  
  }
  
}
