import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
// import { MesList, FriendList, FriendItem, MessageList } from './data';


import { WebsocketService } from '../websocket.service';
// import { NearestContact, NearestContactItem, AddressBookItem, AddressBook } from '../common/im'
// import { WebsocketService,FriendItem,Session,MessageItem } from '../websocket.service';
import { timer, Observable, fromEvent} from 'rxjs';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { UploadService } from '../file.service';
import { Protocol } from '../protocol/Protocol';
import { fromBytes } from 'long';
import * as data from './data'
import * as com from '../common/im'
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

  my_id : number;
  my_img_url : string;
  my_name : string;

  addressList : com.AddressBookItem[];
  addressItem : com.AddressBookItem;




  to_name = ""
  to_img = "";
  // group = 0;
  // addgtoup_id = 0;
  content = "";
  // group_name = '';
  list = [];
  showmsg : com.MessageItem[];

  // searchContent : string = "";
  // searchFriend : string = "";
  // groupName : string = "";

  isVisible : boolean = false;
  isselect: boolean;
  isgroup: boolean = false;

  friendlist : com.NearestContact;
  addressbook : com.AddressBook;
  friend : com.NearestContactItem;
  // userlist : Userlist[];
  messagelist : com.MessageItem[];
  addGroupUserList:AddGroupUserlist;

  pressBoolean : boolean = false;
  px : string = "";
  py : string = "";
  // mesItem = MessageItem;
  contentType : number = 0;
  backMes : string = "";
  isPress : boolean = false;

  constructor(
    public ws:WebsocketService, 
    private us:UserService,    // 里面有 我的Id: this.us.MyUserId
    private upload: UploadService ,
    private el: ElementRef
    ) {
      this.addGroupUserList=new(AddGroupUserlist);
      this.addGroupUserList.AGlist = [];
      // this.userlist = [];
     }


    ngAfterViewInit() {
      // this.elementRef.nativeElement.focus();
      this.el.nativeElement.focus();
    }
    
    ngOnInit(){
      // this.friendlist = data.nearContractList;
      this.addressList = data.addressList;
      // this.messagelist = data.chatRoom;
      this.friendlist = this.ws.nearest_contact;
      console.log("friendlist = ", this.friendlist)
      this.my_id = this.us.MyUserId;
      this.my_img_url = this.us.myImg;
      this.my_name = this.us.myName;
      // console.log("id, name = ", this.my_id, this.my_name)

      this.scollbuttom();
      this.show=false
      this.pressBoolean = false;
      this.isPress = false;
    }

    getNear(){
      this.friendlist = this.ws.nearest_contact;
      console.log("getNear", this.friendlist);
    }
    getAddress(){
      this.friendlist = this.ws.address_book;
      console.log("getAddreses", this.friendlist);
    }

    his(event){//防止右键点击是弹出默认面板
      event.preventDefault();
      if(event.button != 2 || !this.isPress){
        this.pressBoolean = false;
        this.isPress= false;
        return;
      }
    }
    he(event, content: string){//可自定义右键事件
      if(event.button != 2){
        this.pressBoolean = false;
        this.isPress = false;
        return ;
      }
      this.isPress = true;
      this.backMes = content;
      this.pressBoolean = true;
      var px = event.clientX;
      var py = event.clientY;
      this.px = String(px) + 'px';
      this.py = String(py) + 'px';
      console.log("style=", this.px, this.py)
    }
    backdata(){
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST; //消息的类型的请求类型
      msg.cmd = Protocol.Message.CtrlType.MSG_BACK;// 消息的功
      msg.from = this.us.MyUserId;              // 消息发送方
      msg.to = this.to_id;                   //消息接收方
      msg.content = this.backMes;             //消息内容
      msg.contentType = this.contentType;　  //消息类型
      msg.isgroup = this.isgroup;                       //是不是群组消息
      // console.log("this.msg && this.to_id = ", msg, this.to_id);
      // this.ws.sendMessage(msg);
      this.backMes = "";
    }

    test2(index: number, id: number,name : string, img: string, isgroup: boolean){
      this.isselect = true;
      this.to_id = id;
      this.to_name = name;
      this.to_img = img;
      this.isgroup = isgroup;
      var flag : boolean = false;
      this.friend = this.friendlist.contact_list[index];
      for(let i = 0; i < this.friendlist.contact_list.length; i++){
        if(id == this.friendlist.contact_list[i].id){
          this.friendlist.contact_list[i].count = 0;
          this.showmsg = this.friendlist.contact_list[i].message_list;
          this.isgroup = this.friendlist.contact_list[i].is_group;
          flag = true;
        }
      }
      if(!flag){
          this.showmsg = [];
      }
      console.log("showmsg=", this.showmsg);
      this.scollbuttom();

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
        case false: this.sendC2C();this.scollbuttom();break;
        case true: this.sendToGoup();this.scollbuttom();break;
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
      this.contentType = msg.contentType;
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
      this.contentType = msg.contentType;
      // console.log("type=", msg.contentType)
      msg.isgroup = true;
      this.ws.sendMessage(msg);
      this.content = "";

    }

    

    clickMe(){
        var btn = document.getElementById("search");
        btn.focus();
        this.isVisible = document.hasFocus();
        // this.userlist = [];
    }
    outMe(){
      var btn = document.getElementById("search");
      btn.blur();
      this.isVisible = document.hasFocus();
      // this.userlist = [];
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
      // this.ws.getUserList(this.searchContent).subscribe(data => {
      //   this.userlist = data.Ulist;
      //   this.flag = false;
      // })
      // if(this.searchContent == ""){
      //   return;
      // }
      // if(this.userlist.length == 0) {
      //   this.flag = true;
      // }
    }
    addfriend(to: number){
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
      msg.from = this.us.MyUserId;
      msg.to = to;
      msg.time = Date.now();
      // this.ws.sendMessage(msg)
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
             this.contentType = msg.contentType;
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
      // for(let i=0;i<this.ws.wsFriendList.List.length;i++){
      //   if(this.ws.wsFriendList.List[i].Isgroup){continue;}
      //   let item = new(AddGroupUserItem);
      //   item.ID=Number(this.ws.wsFriendList.List[i].ID);
      //   item.Name=this.ws.wsFriendList.List[i].Name;
      //   item.Headimg=this.ws.wsFriendList.List[i].Headimg;
      //   item.Check = false;
      //   this.addGroupUserList.AGlist.push(item);
      // }
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
      // this.ws.sendMessage(msg);
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
    scollbuttom(){
      var dis = document.getElementById('scrolldIV');
      // var now = new Date(); //设置滚动条保持在最底部
      // now.getTime();
      try {
        dis.scrollTop = dis.scrollHeight;
    } catch(err) { }   
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

