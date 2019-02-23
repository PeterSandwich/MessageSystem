import { Component, OnInit, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'
import { WebsocketService } from '../websocket.service';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { UploadService } from '../file.service';
import { Protocol } from '../protocol/Protocol';
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

  id: number  = 0;
  to_name = ""
  to_img = "";
  // group = 0;
  // addgtoup_id = 0;
  content = "";
  // group_name = '';
  list = [];
  showmsg : com.MessageItem[];

  searchContent : string = "";
  // searchFriend : string = "";
  // groupName : string = "";

  isVisible : boolean = false;
  isselect: boolean;
  isgroup: boolean = false;

  friendlist : com.NearestContact;
  addressbook : com.AddressBook;
  friend : com.NearestContactItem;
  userlist : com.NearestContact;;
  messagelist : com.MessageItem[];
  addGroupUserList:AddGroupUserlist;

  pressBoolean : boolean = false;
  px : string = "";
  py : string = "";
  // mesItem = MessageItem;
  contentType : number = 0;
  backMes : com.MessageItem ;
  isPress : boolean = false;
  index : number = 0;

  flag : boolean = false;

  constructor(
    public ws:WebsocketService, 
    private us:UserService,    // 里面有 我的Id: this.us.MyUserId
    private upload: UploadService ,
    private el: ElementRef,
    public _d: DomSanitizer
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

      // 初始化最近聊天列表及其聊天历史消息
      this.getNearestListAndMessage()


      // this.friendlist = data.nearContractList;
      //this.addressList = data.addressList;
      // this.messagelist = data.chatRoom;
      this.friendlist = this.ws.nearest_contact;
      // console.log("friendlist = ", this.friendlist)
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
      // console.log("getNear", this.friendlist);
    }
    // getAddress(){
    //   this.friendlist = this.ws.address_book;
    //   // console.log("getAddreses", this.friendlist);
    // }

    his(event){//防止右键点击是弹出默认面板
      event.preventDefault();
      if(event.button != 2 || !this.isPress){
        this.pressBoolean = false;
        this.isPress= false;
        return;
      }
    }
    he(event, item: com.MessageItem, id: number){//可自定义右键事件
      if(event.button != 2){
        this.pressBoolean = false;
        this.isPress = false;
        return ;
      }
      this.isPress = true;
      this.backMes = item;
      this.id = Number(item.id);
      // console.log("this.id", item)
      this.pressBoolean = true;
      var px = event.clientX;
      var py = event.clientY;
      this.px = String(px) + 'px';
      this.py = String(py) + 'px';
      // console.log("style=", this.px, this.py)
    }
    backdata(){
      ///////////////////////////////////////////////////////////
      //有一个bug需解决，撤回消息后聊天框仍存在，以后再改23333333333333//
      ///////////////////////////////////////////////////////////
      console.log("撤回")
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST; //消息的类型的请求类型
      msg.cmd = Protocol.Message.CtrlType.MSG_BACK;// 消息撤回
      msg.from = this.us.MyUserId;              // 消息发送方
      msg.to = this.backMes.to;                   //消息接收方
      msg.content = this.backMes.content;             //消息内容
      msg.contentType = this.backMes.content_type;　  //消息类型
      msg.isgroup = this.backMes.is_group;                       //是不是群组消息
      msg.msgid = this.backMes.id;
      msg.sendTime = Date.now();
      // console.log("this.msg && this.to_id = ", msg, this.to_id);
      this.ws.sendMessage(msg);
      // this.test2(this.index, this.to_id, this.to_name, this.to_img, this.isgroup)
      // window.onload
    }

    test2(index: number, id: number,name : string, img: string, isgroup: boolean){
      
      // 发送ACK消息回后端，让后端知道这消息已读，徽标数清零
      //////////////////////////////////////////
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.ACK;
      msg.cmd = Protocol.Message.CtrlType.NONE;
      msg.from =  this.us.MyUserId;
      msg.to = id;
      msg.content = this.content;
      msg.contentType = Protocol.Message.ContentType.TEXT;
      this.contentType = msg.contentType;
      msg.isgroup = isgroup;
      msg.sendTime = Date.now();
      this.ws.sendMessage(msg);
      ///////////////////////////////////
      this.to_id = id;
      this.index = index;
      this.isselect = true;
      console.log("this.id", id)
      this.to_name = name;
      this.to_img = img;
      this.isgroup = isgroup;
      var flag : boolean = false;

      if(this.ws.global_message.chat_room_list.has(id)){
        this.showmsg = this.ws.global_message.chat_room_list.get(id).message_list;
        this.isgroup = this.ws.global_message.chat_room_list.get(id).is_group;
        console.log("showmsg = ", this.showmsg);
          flag = true;
      }

      if(!flag){
          this.showmsg = [];
      }
      this.scollbuttom();

    }

    //在输入框回车发送消息
    enterToSendMsg(event: KeyboardEvent) {
      if(event.keyCode != (13 || 108)){
          return;
      }
      this.sendTextMessage()
    }

    //点击 发送 按钮发送消息
    clickToSendMsg(){
      this.sendTextMessage()
    }

  
    //发送文本消息
    sendTextMessage(){
      this.content = this.content.replace(/^\s*/,'');//去除左边空格
      if(this.content == ""){
        console.log("内容不能为空")
        return;
      }
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.NONE;
      msg.from = this.us.MyUserId;
      msg.to = this.to_id;
      msg.content = this.content;
      msg.contentType = Protocol.Message.ContentType.TEXT;
      this.contentType = msg.contentType;
      msg.isgroup = this.isgroup;
      msg.sendTime = Date.now();
      this.ws.sendMessage(msg);
      this.content = "";
      this.scollbuttom();
    }
    

    addfriend(to: number){
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
      msg.from = this.us.MyUserId;
      msg.to = to;
      msg.sendTime = Date.now();


      this.ws.sendMessage(msg)
      // this.ws.getNearestList();
      // this.ws.getAddress();
      this.ngOnInit()
    }
    keyUpSearch(name: string){ //搜索添加好友
      // this.ws.
      // this.ws.getUserList(this.searchContent).subscribe(data => {
      //   console.log("data2 = ", data.Ulist);
      //   this.userlist = data.Ulist;
      // })
      this.us.getuserlist(this.searchContent).subscribe(data => {
        // this.userlist = data
        console.log("userlist=", data);
        if(data['user_list'].length == 0){
          this.flag = true;
        }
        this.userlist = data['user_list'];
        this.flag = false;
      })
    }

    // clickMe(){
    //     var btn = document.getElementById("search");
    //     btn.focus();
    //     this.isVisible = document.hasFocus();
    //     // this.userlist = [];
    // }
    // outMe(){
    //   var btn = document.getElementById("search");
    //   btn.blur();
    //   this.isVisible = document.hasFocus();
    //   // this.userlist = [];
    // }
    // cancelEditingTodo(){
    //   this.isVisible = false;
    // }
    
    search(){
      // console.log("search=", this.searchContent);
      // this.ws.getAddress(this.searchContent).subscribe(data => {
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
    
    
  picpath: string
  picurl: string
  fileurl = 'http://localhost:9988/api/upload'
  dfileurl='http://localhost:9988/files/9edbe55433e4_compress.jpg'
  filep = ""
  aaaa="9edbe55433e4_compress.jpg"
  
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
            // console.log(response)
            if (response["body"] != null) {
              console.log(response["body"]);
              this.filep = response["body"]["originalfile"];
              this.dfileurl=response["body"]["thumbnail"];
              filetype = response["body"]["filetype"];
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
             if(filetype == 2){
              msg.content = this.filep;
             }
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
  }


  isshowpicVisible = false;
  aaa:string[]
  aa:string[]
  a:string
  showpicModal(aaaa:string): void {
    this.aaa = aaaa.split(".");
    this.aa = this.aaa[0].split("_");
    this.a = this.aa[0]+"."+this.aaa[1];
    console.log("this.a=",this.a)
    this.isshowpicVisible = true;
  }
  handleshowpicCancel(): void {
    this.isshowpicVisible = false;
  }
  download() {
    window.open(this.fileurl, '_blank');
    return;
  }
    // 调用浏览器的下载
    downloadFile(filepath:string) {
      const a: HTMLAnchorElement = document.createElement('a');
      a.href = filepath;
      let Removesuffix:string[] = filepath.split(".");
      let Removeprefix:string[] = Removesuffix[0].split("/");
      let name:string = Removeprefix[1];
      a.download = name;
      a.click();
      a.remove();
      // console.log('download:' + a.href);
    }



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                  //  by: pjw    


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //获取最近联系人及其历史消息
  getNearestListAndMessage(){
    this.ws.getNearestContactAndMessage().subscribe((data) => {

      console.log("一登录获取最近联系人及其历史消息",data);

      for(let i=0;i<data.body['chat_room_list'].length;i++){

        //最近联系人的（相当与一个chat room）
        let FriItem:com.NearestContactItem = new(com.NearestContactItem);
        FriItem.id=data.body['chat_room_list'][i].id;
        FriItem.name=data.body['chat_room_list'][i].name;
        FriItem.head_img=data.body['chat_room_list'][i].head_img;
        FriItem.is_group=data.body['chat_room_list'][i].is_group;
        FriItem.count=data.body['chat_room_list'][i].count;
        this.ws.nearest_contact.contact_list.push(FriItem);

         //历史消息 使用 this.global_message.chat_room_list[人或群的ID]获取历史消息
         let chat_room:com.ChatRoom = new(com.ChatRoom);
         chat_room.id = data.body['chat_room_list'][i].id;
         chat_room.name = data.body['chat_room_list'][i].name;
         chat_room.is_group = data.body['chat_room_list'][i].is_group;
         chat_room.message_list=data.body['chat_room_list'][i].message_list;
         this.ws.global_message.chat_room_list.set(chat_room.id,chat_room);

      }
      console.log("contact_list = ", this.ws.nearest_contact.contact_list);
      console.log("global_messgae = ", this.ws.global_message.chat_room_list);
    })
  }

  //获取通讯录
  getAddress(){
    this.ws.getAddressBook().subscribe((data) => {

      for(let i = 0; i < data.friends_list.length; i++){
          let  FriItem:com.NearestContactItem = new(com.NearestContactItem);
          FriItem.id=data['friends_list'].id;
          FriItem.name=data['friends_list'][i].name;
          FriItem.head_img=data['friends_list'][i].head_img;
          FriItem.is_group=data['friends_list'].is_group;
          FriItem.count= 0;
          this.ws.address_book.contact_list.push(FriItem)
      }
      console.log("this.address_book=", this.ws.address_book)
    })
  }


    /////////////////////////////////////////
    //// 创建群//////////////////////////////
    ////////////////////////////////////////
    
    GroupName = ''
    isAddGroupVisible = false;
    isAddGroupConfirmLoading = false;
    showAddGroupModal(): void {
      // for(let i=0;i<this.ws.global_message.chat_room_list[i];i++){
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

