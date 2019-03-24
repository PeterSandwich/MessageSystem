import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';
import { UserService } from '../../user.service';
import { environment } from '../../../environments/environment';
import { UploadService } from '../../file.service';
import { HttpEventType } from '@angular/common/http';
import { timeout, delay } from 'q';
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
  constructor(
    private ws: WebsocketService,
    private upload: UploadService,
    private us:UserService) { 
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
    newMsg.content = "1+"+file.name;
    newMsg.content_type = Protocol.Message.ContentType.FILE;
    newMsg.is_group = this.your_info.is_group;
    newMsg.send_time = sendtime;
    newMsg.arrive_time = 0;
    newMsg.loading_percent = this.percent;
    this.ws.global_message.chat_room_list.get(this.your_info.id).message_list.push(newMsg);
    // console.log("newMsg:",newMsg); 
    let idx=this.ws.global_message.chat_room_list.get(this.your_info.id).message_list.findIndex(e=>{return e.send_time==newMsg.send_time})


    this.upload.uploadFile(this.fileurl, file).subscribe((response: any) => {
      //未实现二次秒传
      //上传多个文件
      //
          //.log(response);
          if (response.type== HttpEventType.UploadProgress){
          this.percent =   Math.round(100*response.loaded/response.total);
          console.log(`File is ${this.percent}% loaded.`);
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
              msg.content = this.filep+"+"+file.name;
             }
             msg.isgroup = this.your_info.is_group;
              this.ws.sendMessage(msg);
              this.ws.global_message.chat_room_list.get(this.your_info.id).message_list[idx].content = msg.content;
              if (this.percent&&this.percent>=0){
              this.delay(3000).then(any=>{
              this.ws.global_message.chat_room_list.get(this.your_info.id).message_list[idx].loading_percent=this.percent;});
              }
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
}
