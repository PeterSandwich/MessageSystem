import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';
import { UserService } from '../../user.service';

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
  show_members:boolean = false;
  group_members;
  constructor(private ws: WebsocketService,private us:UserService) { 
  }

  ngOnInit() {
    this.scollbuttom();
  }
  ngOnChanges(){
    this.showGroupMember();
    console.log("ngOnInit:",this.your_info)
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

  showGroupMember(){
    if (this.your_info.is_group) {
      this.us.getGroupMember(this.your_info.id).subscribe(data => {
        this.group_members = [];
        console.log(data)
        for(let i=0;i<data['length'];i++){
          let item = new com.ContactListItem;
          item.id = data[i]['id'];
          item.name = data[i]['name'];
          item.head_img = data[i]['head_img'];
          this.group_members.push(item)
        }
      })
    }
    
  }
  
}
