import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';
import { UserService } from '../../user.service';
import { EmojiService } from '../../emoji.service';
import { Emojis } from './emoji-model';
import { NzMessageService } from 'ng-zorro-antd';

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
  // public messageString: string = "";
  emojis: Emojis[];



  constructor(
    private ws: WebsocketService,
    private us:UserService,
    private es:EmojiService,
    private nms :NzMessageService
    ) { 
  }

  ngOnInit() {

    this.scollbuttom();
    this.emojis = [];
    this.es.initData().subscribe(data=>{
      if(data){
        for (let d in data) {
            let temp = new Emojis;
            temp.annotation = data[d]["annotation"];
            temp.name = data[d]["name"];
            temp.hexcode = data[d]["hexcode"];
            temp.shortcodes = data[d]["shortcodes"];
            temp.tags = data[d]["tags"];
            temp.emoji = data[d]["emoji"];
            temp.text = data[d]["text"];
            temp.type = data[d]["type"];
            temp.order = data[d]["order"];
            temp.group = data[d]["group"];
            temp.subgroup = data[d]["subgroup"];
            temp.version = data[d]["version"];
            this.emojis.push(temp);
        }
      }
    })
    

  }

  listenEdit(e){
    console.log(e);
    console.log(e.key)
    console.log(e.keyCode)
    if (e.keyCode == 13 && !(e.ctrlKey)) {
      this.send();
      return;
    } 
    if (e.ctrlKey && e.keyCode == 13) {// ctrl+回车-->换行
      document.getElementById("divinput").innerHTML = document.getElementById("divinput").innerHTML + '<div><br></div>';
      if (window.getSelection) {//ie11 10 9 ff safari
        document.getElementById("divinput").focus(); //解决ff不获取焦点无法定位问题
        var range = window.getSelection();//创建range
        range.selectAllChildren(document.getElementById("divinput"));//range 选择obj下所有子内容
        range.collapseToEnd();//光标移至最后
        
      }
    }

    
    
  }

  ngOnChanges(){
    this.showGroupMember();
    console.log("ngOnInit:",this.your_info)
  }

  send(){
    let content = document.getElementById("divinput").innerText.trim();//去除左边空格
    if(content == ""||this.your_info.id==-1){
      this.nms.create("warning","输入内容不能为空")
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
    document.getElementById("divinput").innerText = '';
      
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

  // 表情相关
  isEmojiVisible:boolean = false;
  handleEmojiCancel(){
    this.isEmojiVisible = false;
  }
  addEmoji(emoji:string){
    document.getElementById("divinput").innerText = document.getElementById("divinput").innerText+ emoji ;
    this.isEmojiVisible = false;
  }
  
}
