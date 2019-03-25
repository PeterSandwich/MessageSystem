import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import * as com from '../../common/im';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';
import { UserService } from '../../user.service';
import { EmojiService } from '../../emoji.service';
import { Emojis } from './emoji-model';
import { NzMessageService } from 'ng-zorro-antd';
import { environment } from '../../../environments/environment';
import { UploadService } from '../../file.service';
import { HttpEventType } from '@angular/common/http';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';
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
  emojis: Emojis[];
  private dropdown: NzDropdownContextComponent;
  
  constructor(
    public ws: WebsocketService,
    private us:UserService,
    private es:EmojiService,
    private upload: UploadService,
    private nzDropdownService: NzDropdownService,
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


  drawbackdata(item: com.MessageItem) {
    let at: number = parseInt(item.arrive_time.toString())
    let now: number = Date.now()
    if (now - at > 120000) {
      this.nms.create('warning', `时间超过两分钟，无法撤回`);
      return
    }
    let msg = new (Protocol.Message)
    msg.type = Protocol.Message.Type.REQUEST; //消息的类型的请求类型
    msg.cmd = Protocol.Message.CtrlType.MSG_BACK;// 消息撤回
    msg.from = this.us.MyUserId;              // 消息发送方
    msg.to = item.to;                   //消息接收方
    msg.content = item.content;             //消息内容
    msg.contentType = item.content_type;　  //消息类型
    msg.isgroup = item.is_group;                       //是不是群组消息
    msg.msgid = item.id;
    msg.sendTime = Date.now();

    this.ws.sendMessage(msg);

  }

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  close(e: NzMenuItemDirective): void {
    console.log(e);
    this.dropdown.close();
  }

  // 移动编辑框的光标在最后面
  movePonterToEnd(){ 
    if (window.getSelection) {//ie11 10 9 ff safari
      document.getElementById("divinput").focus(); //解决ff不获取焦点无法定位问题
      var range = window.getSelection();//创建range
      range.selectAllChildren(document.getElementById("divinput"));//range 选择obj下所有子内容
      range.collapseToEnd();//光标移至最后
    }
  }


  listenEdit(e){
    if (e.keyCode == 13 && !(e.ctrlKey)) {
      this.send();
      return;
    } 
    if (e.ctrlKey && e.keyCode == 13) {// ctrl+回车-->换行
      document.getElementById("divinput").innerHTML = document.getElementById("divinput").innerHTML + '<div><br></div>';
      this.movePonterToEnd()
    }
  }

  ngOnChanges(){
    this.showGroupMember();
    this.scollbuttom();
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
    document.getElementById("show_msg").scrollTop = document.getElementById("show_msg").scrollHeight
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


  // 文件上传功能代码
  picpath: string
  picurl: string
  
  fileurl = environment.apiUrl+'/upload'
  dfileurl='http://localhost:9988/files/9edbe55433e4_compress.jpg'
  filep = ""
  aaaa="9edbe55433e4_compress.jpg"
  
  filename: string
  show:boolean
  percent:number 
  selectFile(event: any) {
    let fileList: FileList = event.target.files;
    this.uploadFile(fileList);
  }
  
  imgurl:string[]
  uploadFile(files: FileList) {
    if (files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = files[0];
    if(file.size>200*1024*1024){
      console.log("file is too big!")
      return
    }
    //console.log(file.type)
    console.log(file.name)
    console.log(file.type)
    this.filename = file.name;
    
    let chat_room = this.ws.global_message.chat_room_list.get(this.your_info.id);
    if (!(chat_room.id == this.your_info.id && chat_room.is_group ==this.your_info.is_group)){
      console.log("消息与会话的信息不符合");
      return
    }
    let sendtime = Date.now();;
    let newMsg = new(com.MessageItem);
    newMsg.id = 0;
    newMsg.from = this.us.MyUserId;
    newMsg.to = this.your_info.id;
    newMsg.content = "1+"+file.name+"&"+file.size;
    newMsg.content_type = Protocol.Message.ContentType.FILE;
    newMsg.is_group = this.your_info.is_group;
    newMsg.send_time = sendtime;
    newMsg.arrive_time = 0;
    newMsg.loading_percent = this.percent;
    this.ws.global_message.chat_room_list.get(this.your_info.id).message_list.push(newMsg);
    this.scollbuttom();
    // console.log("newMsg:",newMsg); 
    let idx=this.ws.global_message.chat_room_list.get(this.your_info.id).message_list.findIndex(e=>{return e.send_time==newMsg.send_time})


    this.upload.uploadFile(this.fileurl, file).subscribe((response: any) => {
      //未实现二次秒传
      //上传多个文件
      //
          //.log(response);
          if (response.type== HttpEventType.UploadProgress){
          this.percent =   Math.round(100*response.loaded/response.total);
            this.ws.global_message.chat_room_list.get(this.your_info.id).message_list[idx].loading_percent = this.percent;
        }
          let filetype = -1;
          if (response["body"] != null) {
             console.log("response:",response)
            if (response["body"] != null) {
              this.filep = response["body"]["originalfile"];
              this.dfileurl=response["body"]["thumbnail"];
              filetype = response["body"]["filetype"];
              this.show = true;
            }
             let msg = new(Protocol.Message)
             msg.type = Protocol.Message.Type.REQUEST;
             msg.cmd = Protocol.Message.CtrlType.NONE;
             msg.from =  this.us.MyUserId;
             msg.to = this.your_info.id;
             msg.content = this.dfileurl;
             msg.contentType=filetype;
             msg.sendTime = sendtime;
             if(filetype == 2||filetype == 3){
              msg.content = this.filep+"+"+file.name+"&"+file.size;
             }
             msg.isgroup = this.your_info.is_group;
              this.ws.sendMessage(msg);
              this.ws.global_message.chat_room_list.get(this.your_info.id).message_list[idx].content = msg.content;
              
            }
         
          
        },
        (err) => {
          console.log("Upload Error:", err);
        }, () => {
          console.log("Upload done");
        }
      )
  }
  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  // 表情相关
  isEmojiVisible:boolean = false;
  handleEmojiCancel(){
    this.isEmojiVisible = false;
    this.movePonterToEnd()
  }
  addEmoji(emoji:string){
    document.getElementById("divinput").innerText = document.getElementById("divinput").innerText+ emoji ;
    this.isEmojiVisible = false;
    this.movePonterToEnd();
  }
  
}
