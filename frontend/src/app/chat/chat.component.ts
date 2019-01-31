import { Component, OnInit } from '@angular/core';
import { Protocol } from '../protocol/Protocol';
import { WebsocketService,FriendItem,Session,MessageItem } from '../websocket.service';
import { timer } from 'rxjs';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { UploadService } from '../file.service';
@Injectable()
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit {


  constructor(
    public ws:WebsocketService, 
    private us:UserService,    // 里面有 我的Id: this.us.MyUserId
    private upload: UploadService 
    ) { }

  ngOnInit(){}  




}



// 先不要管下面的
class Old {
old(){
  //////////////////////////////////////////////////////////////////////////////////////
  // getalluser(){
  //   this.ws.getUserList("").subscribe(data => {
  //     console.log(data)
  //   })
  // }

  // chatto=0;
  // chatToPeo(to:number){
  //   let msg = new(Protocol.Message)
  //   msg.type = Protocol.Message.Type.REQUEST;
  //   msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
  //   msg.from = this.us.MyUserId;
  //   msg.to = to;
  //   msg.time = Date.now();
  //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
  // }


  // c2c_to_id = 0;
  // c2c_content = ""
  // sendMsg() {
  //   let msg = new(Protocol.Message)
  //   msg.type = Protocol.Message.Type.REQUEST; //消息的类型的请求类型
  //   msg.cmd = Protocol.Message.CtrlType.NONE;// 消息的功能
  //   msg.from = this.us.MyUserId;              // 消息发送方
  //   msg.to = this.c2c_to_id;                   //消息接收方
  //   msg.content = this.c2c_content;             //消息内容
  //   msg.contentType = Protocol.Message.ContentType.TEXT;　  //消息类型
  //   msg.time = Date.now()                     //消息的发送时间
  //   msg.isgroup = false;                       //是不是群组消息
  //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
  // }

  // group_name = '';
  // createGroup(){
  //   let msg = new(Protocol.Message)
  //   msg.type = Protocol.Message.Type.REQUEST;
  //   msg.cmd = Protocol.Message.CtrlType.CREATE_GROUP;
  //   msg.from = this.us.MyUserId;
  //   msg.content = this.group_name;
  //   msg.userlist.push(this.us.MyUserId);
  //   msg.time = Date.now()
  //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
  // }

  // add_mem_id = 0;
  // gtoup_id = 0;
  // addMemToGoup() {
  //   let msg = new(Protocol.Message)
  //   msg.type = Protocol.Message.Type.REQUEST;
  //   msg.cmd = Protocol.Message.CtrlType.GROUP_ADDMEMBERS;
  //   msg.from = this.us.MyUserId;
  //   msg.group = this.gtoup_id;
  //   msg.userlist.push(this.add_mem_id);
  //   msg.time = Date.now()
  //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
  // }

  // c2g_group_id = 0;
  // c2g_content = "";

  // sendToGoup() {
  //   let msg = new(Protocol.Message)
  //   msg.type = Protocol.Message.Type.REQUEST;
  //   msg.cmd = Protocol.Message.CtrlType.NONE;
  //   msg.from =  this.us.MyUserId;
  //   msg.group  = this.c2g_group_id;
  //   msg.content = this.c2g_content;
  //   msg.isgroup = true;
  //   msg.time = Date.now();
  //   this.ws.sendMessage(Protocol.Message.encode(msg).finish())
  // }


  


  

  // picpath: string
  // GetPicUrl = "http://localhost:9988/getpic/"
  // picurl: string
  // fileurl = 'http://localhost:9988/upload'
  // dfileurl=""
  // filep = ""
  // filename: string
  // selectFile(event: any) {
  //   let fileList: FileList = event.target.files;
  //   this.uploadFile(fileList);
  // }

  // uploadFile(files: FileList) {
  //   if (files.length == 0) {
  //     console.log("No file selected!");
  //     return
  //   }
  //   let file: File = files[0];
  //   console.log(file.name)
  //   this.filename = file.name;
  //   this.upload.uploadFile(this.fileurl, file)
  //     .subscribe(
  //       (response: any) => {
  //         //.log(response);
  //         if (response["body"] != null) {
  //           if (response["body"]["code"] != 1) {
  //             console.log(response["body"]["data"]);
  //             this.filep = response["body"]["data"]["filepath"];
  //             this.dfileurl=response["body"]["data"]["fileurl"];
  //            // this.show = true;
  //           }
  //         }
  //         // if (event.type == HttpEventType.UploadProgress) {
  //         //   const percentDone = Math.round(100 * event.loaded / event.total);
  //         //   console.log(`File is ${percentDone}% loaded.`);
  //         // } else if (event instanceof HttpResponse) {
  //         //   console.log('File is completely loaded!');
  //         // }
  //       },
  //       (err) => {
  //         console.log("Upload Error:", err);
  //       }, () => {
  //         console.log("Upload done");
  //       }
  //     )
  //   //this.getpath();

  // }
  // getpath() {
  //   this.filep = "getpic/3ea62ac5fb0758efadb15e36_compress.jpg"
  //   console.log(this.filep);
  // }
  // download() {
  //   this.fileurl = "http://localhost:9876/files";
  //   window.open(this.fileurl, '_blank');
  //   return;
  // }
  //   // 调用浏览器的下载
  //   downloadFile() {
  //     const a: HTMLAnchorElement = document.createElement('a');
  //     a.href = this.dfileurl;
  //     a.download = 'download';
  //     a.click();
  //     a.remove();
  //     console.log('download:' + a.href);
  //   }

}}



