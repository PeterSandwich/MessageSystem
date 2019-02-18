import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
// import { MesList, FriendList, FriendItem, MessageList } from './data';


import { WebsocketService,FriendList, Userlist, MessageList, MessageItem} from '../websocket.service';
// import { WebsocketService,FriendItem,Session,MessageItem } from '../websocket.service';
import { timer, Observable, fromEvent} from 'rxjs';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { UploadService } from '../file.service';
import { Protocol } from '../protocol/Protocol';
@Injectable()
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit {
  // @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  from_id = 1;
  to_id = 0;

  my_id = this.us.MyUserId;
  my_img_url = this.us.myImg;
  my_name = this.us.myName;

  to_name = ""
  to_img = "";
  // group = 0;
  // addgtoup_id = 0;
  content = "";
  // group_name = '';
  list = [];
  showmsg : MessageItem[];
  searchContent : string = "";
  searchFriend : string = "";
  groupName : string = "";

  idList : number[] = null;
  isVisible : boolean = false;
  isslect: boolean;
  isgroup: boolean = false;

  friendlist : FriendList;
  userlist : Userlist[];
  messagelist : MessageList;
  addGroupUserList:AddGroupUserlist;


  constructor(
    public ws:WebsocketService, 
    private us:UserService,    // 里面有 我的Id: this.us.MyUserId
    private upload: UploadService ,
    private el: ElementRef
    ) {
      this.addGroupUserList=new(AddGroupUserlist);
      this.addGroupUserList.AGlist = [];
      this.userlist = [];
     }


    ngAfterViewInit() {
      // this.elementRef.nativeElement.focus();
      this.el.nativeElement.focus();
    }
    
    ngOnInit(){
      this.friendlist = this.ws.wsFriendList;
      // console.log("friendList=", this.friendlist);
      this.friendlist = this.ws.wsFriendList;
      
      // console.log("friendList=", this.friendlist);
      // console.log("wsfriendlist=", this.ws.wsFriendList);
      this.messagelist = this.ws.wsMessageList;

      // console.log("messagelist = ", this.messagelist);
      // console.log("my=", this.us);
      // console.log("from_id=", this.my_id);
      var now = new Date(); //设置滚动条保持在最底部
      var div = document.getElementById('scrolldIV');
      now.getTime();
      div.scrollTop = div.scrollHeight;
      this.show=false
    }

    his(event){//防止右键点击是弹出默认面板
      event.preventDefault();
    }
    he(event){//可自定义右键事件
      if(event.button == 2)
        console.log("点击右键")
      else if(event.button == 1){
        console.log("点击了中键")
      }
      else if(event.button == 0){
        console.log("点击了左键")
      }
    }

    test2(id: number,name : string, img: string, isgroup: boolean){
      this.isslect = true;
      this.to_id = id;
      this.to_name = name;
      this.to_img = img;
      this.isgroup = isgroup;
      var flag : boolean = false;
      for(let i = 0; i < this.friendlist.List.length; i++){
        if(id == this.friendlist.List[i].ID){
          this.friendlist.List[i].Counter = 0;
        }
      }
      for(var i = 0; i < this.messagelist.List.length; i++){
        if(id == this.messagelist.List[i].ID){
          this.showmsg = this.messagelist.List[i].MList;
          this.isgroup = this.messagelist.List[i].Isgroup;
          flag = true;
        }
      }
      if(!flag){
          this.showmsg = [];
      }
    }
    sendMsg() {
      this.content = this.content.replace(/^\s*/,'');//去除左边空格
      // 去除所有空格: str = str.replace(/\s+/g,""); 
      // 去除两头空格: str = str.replace(/^\s+|\s+$/g,""); 
      // 去除左空格： str=str.replace( /^\s*/, ''); 
      // 去除右空格： str=str.replace(/(\s*$)/g, "");

      if(this.content == ""){
        console.log("输入内容为空")
        return;
      }
      var now = new Date();
      var div = document.getElementById('scrolldIV');
      now.getTime();
      div.scrollTop = div.scrollHeight;
      switch(this.isgroup){
        case false: this.sendC2C();break;
        case true: this.sendToGoup();break;
        default: console.log("default");break;
      }
    }
    sendC2C(){
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST; //消息的类型的请求类型
      msg.cmd = Protocol.Message.CtrlType.NONE;// 消息的功
      msg.from = this.us.MyUserId;              // 消息发送方
      msg.to = this.to_id;                   //消息接收方
      msg.content = this.content;             //消息内容
      msg.contentType = Protocol.Message.ContentType.TEXT;　  //消息类型
      msg.isgroup = false;                       //是不是群组消息
      // console.log("this.msg && this.to_id = ", msg, this.to_id);
      this.ws.sendMessage(msg);
      this.content = "";
  }
 
  sendToGoup() {
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.NONE;
      msg.from =  this.us.MyUserId;
      msg.to = this.to_id;
      msg.content = this.content;
      msg.contentType = Protocol.Message.ContentType.TEXT;
      // console.log("type=", msg.contentType)
      msg.isgroup = true;
      this.ws.sendMessage(msg);
      this.content = "";

    }

    

    clickMe(){
        var btn = document.getElementById("search");
        btn.focus();
        this.isVisible = document.hasFocus();
        this.userlist = [];
    }
    outMe(){
      var btn = document.getElementById("search");
      btn.blur();
      this.isVisible = document.hasFocus();
      this.userlist = [];
    }
    cancelEditingTodo(){
      this.isVisible = false;
    }
    flag : boolean;
    keyUpSearch(content: string){
      // this.ws.getUserList(this.searchContent).subscribe(data => {
      //   console.log("data2 = ", data.Ulist);
      //   this.userlist = data.Ulist;
      // })
    }
    search(){
      // console.log("search=", this.searchContent);
      this.ws.getUserList(this.searchContent).subscribe(data => {
        this.userlist = data.Ulist;
        this.flag = false;
      })
      if(this.searchContent == ""){
        return;
      }
      if(this.userlist.length == 0) {
        this.flag = true;
      }
    }
    addfriend(to: number){
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
      msg.from = this.us.MyUserId;
      msg.to = to;
      msg.time = Date.now();
      this.ws.sendMessage(msg)
    }


///////////////////////////////////////////////////////////////////
  picpath: string
  picurl: string
  fileurl = 'http://localhost:9988/upload'
  dfileurl="http://localhost:9988/upload/c4fb3e1e6b7e.jpg"
  filep = ""
  filename: string
  show:boolean
  selectFile(event: any) {
    let fileList: FileList = event.target.files;
    
    this.uploadFile(fileList);
  }

  uploadFile(files: FileList) {
    if (files.length == 0) {
      console.log("No file selected!");
      return
    }
    let file: File = files[0];
    if(file.size>10*1024*1024){
      console.log("file is too big!")
      return
    }
    //console.log(file.type)
    //console.log(file.name)
    this.filename = file.name;
    this.upload.uploadFile(this.fileurl, file).subscribe((response: any) => {
          //.log(response);
          let filetype = -1;
          if (response["body"] != null) {
            if (response["body"]["code"] != 1) {
              console.log(response["body"]["data"]);
              this.filep = response["body"]["data"]["originalfile"];
              this.dfileurl=response["body"]["data"]["thumbnail"];
              filetype = response["body"]["data"]["filetype"];
              console.log(this.dfileurl)
              this.show = true;

            }
            console.log("####",this.us.MyUserId,this.to_id,this.filep,this.dfileurl,filetype)
             let msg = new(Protocol.Message)
             msg.type = Protocol.Message.Type.REQUEST;
             msg.cmd = Protocol.Message.CtrlType.NONE;
             msg.from =  this.us.MyUserId;
             msg.to = this.to_id;
             msg.content = this.dfileurl;
             msg.contentType = filetype; 
             msg.isgroup = false;
             this.ws.sendMessage(msg);
             this.content = "";
          }
         
            
        },
        (err) => {
          console.log("Upload Error:", err);
        }, () => {
          console.log("Upload done");
        }
      )
    //this.getpath();

  }
  getpath() {
    this.filep = "getpic/3ea62ac5fb0758efadb15e36_compress.jpg"
    // console.log(this.filep);
  }
  download() {
    window.open(this.fileurl, '_blank');
    return;
  }
    // 调用浏览器的下载
    downloadFile() {
      const a: HTMLAnchorElement = document.createElement('a');
      a.href = this.filep;
      a.download = 'download';
      a.click();
      a.remove();
      // console.log('download:' + a.href);
    }

    /////////////////////////////////////////
    //// 创建群//////////////////////////////
    ////////////////////////////////////////
    
    GroupName = ''
    isAddGroupVisible = false;
    isAddGroupConfirmLoading = false;
    showAddGroupModal(): void {
      for(let i=0;i<this.ws.wsFriendList.List.length;i++){
        if(this.ws.wsFriendList.List[i].Isgroup){continue;}
        let item = new(AddGroupUserItem);
        item.ID=Number(this.ws.wsFriendList.List[i].ID);
        item.Name=this.ws.wsFriendList.List[i].Name;
        item.Headimg=this.ws.wsFriendList.List[i].Headimg;
        item.Check = false;
        this.addGroupUserList.AGlist.push(item);
      }
      this.isAddGroupVisible = true;
    }
    handleAddGroupCancel(): void {
      this.isAddGroupVisible = false;
      this.addGroupUserList.AGlist = [];
      this.GroupName = '';
    }
    handleAddGroupOk(){
      if(this.GroupName=='' || this.addGroupUserList.AGlist.length==0){
        alert("注意：群名不能为空并且至少选中一人");
        this.GroupName='';
        this.addGroupUserList.AGlist = [];
        return;
      }
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_GROUP;
      msg.from =  this.us.MyUserId;
      msg.content =  this.GroupName;
      msg.contentType = Protocol.Message.ContentType.TEXT; 
      msg.isgroup = true;
      msg.userlist = [];
      for(let i=0;i<this.addGroupUserList.AGlist.length;i++){
        if(this.addGroupUserList.AGlist[i].Check){
          // console.log(this.addGroupUserList.AGlist[i].ID);
          msg.userlist.push(this.addGroupUserList.AGlist[i].ID);
        }
      }
      msg.userlist.push(this.us.MyUserId);
      this.ws.sendMessage(msg);
      this.addGroupUserList.AGlist = [];
      this.GroupName = '';
      this.isAddGroupVisible = false;
    }


    
    /////////////////////////////////////////
    //// 添加成员//////////////////////////////
    ////////////////////////////////////////
    isAddFriendVisible = false;
    isAddFriendConfirmLoading = false;
    showAddFriendModal(): void {
      this.isAddFriendVisible = true;
    }
    handleAddFriendCancel(): void {
      this.isAddFriendVisible = false;
    }
    handleAddFriendOk(){

    }


    

}
  
export class AddGroupUserItem{
	ID :number; 
	Name :string;
  Headimg :string;
  Check: boolean;
}
export class AddGroupUserlist{
	AGlist: AddGroupUserItem[];
}

