import { Component, OnInit, ElementRef,TemplateRef } from '@angular/core';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { DomSanitizer } from '@angular/platform-browser'
import { WebsocketService } from '../websocket.service';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { UploadService } from '../file.service';
import { Protocol } from '../protocol/Protocol';
import * as com from '../common/im'
import { environment } from '../../environments/environment';
import { Long } from 'protobufjs';


@Injectable()
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit {

  from_id = 1;
  to_id = 0;

  my_id : number;
  my_img_url : string;
  my_name : string;


  id: number  = 0;
  to_name = ""
  to_img = "";
  content = "";
  searchFriend='';
  list = [];
  showmsg : com.MessageItem[];

  searchContent : string = "";


  isVisible : boolean = false;
  isselect: boolean;
  isgroup: boolean = false;

  userlist : com.NearestContact;
  userListDisplay:com.ContactListItem[];    //最近联系人和通讯录在前端切换显示需要的结构体
  createGroupList:com.CreateGroup;          //创建群组时，需要使用的结构体
  groupMemberList:com.ContactListItem[];    //群成员信息列表
  addMemberList:com.AddMemberItem[];        //群添加成员时，需要的结构体

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
    public _d: DomSanitizer,
    private nzDropdownService: NzDropdownService,
    private message: NzMessageService
    ) {
      
     }


    ngAfterViewInit() {
      this.el.nativeElement.focus();
    }
    
    ngOnInit(){
    this.ws.createSocket(environment.websocketUrl+"?session_id="+this.us.session_id);
    this.ws.global_message.chat_room_list = new Map<number|Long,com.ChatRoom>();
    this.ws.nearest_contact.contact_list = [];
    this.ws.address_book.contact_list = [];

      this.userListDisplay = [];
      this.createGroupList=new(com.CreateGroup);
      this.createGroupList.contact_list = [];
      this.groupMemberList = [];
      this.addMemberList = [];
      // 初始化最近聊天列表及其聊天历史消息
      this.getNearestListAndMessage();
      this.getAddress();
      this.showNearestContactList();

      this.my_id = this.us.MyUserId;
      this.my_img_url = this.us.myImg;
      this.my_name = this.us.myName;


      this.scollbuttom();
      this.show=false
      this.pressBoolean = false;
      this.isPress = false;
    }

    // 显示 最近联系人列表
    showNearestContactList(){
      this.userListDisplay = this.ws.nearest_contact.contact_list
    }

    // 显示 通讯录列表
    showAddressBook(){
      this.userListDisplay =this.ws.address_book.contact_list
    }


    he(event, item: com.MessageItem, id: number){//可自定义右键事件
      if(event.button != 2){
        this.pressBoolean = false;
        this.isPress = false;
        return ;
      }
      this.isPress = true;
      this.backMes = item;
    }
    backdata(item: com.MessageItem){
      ///////////////////////////////////////////////////////////
      //有一个bug需解决，撤回消息后聊天框仍存在，以后再改23333333333333//
      ///////////////////////////////////////////////////////////
      console.log("撤回",item)
      let at :number = parseInt(item.arrive_time.toString())
      let now :number = Date.now()
      if (now-at>120000){
        this.message.create('warning', `时间超过两分钟，无法撤回`);
        return
      }
      
      let msg = new(Protocol.Message)
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

    selectOneUser(index: number, id: number,name : string, img: string, isgroup: boolean){
      
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

      // 徽标数清零
      let i = this.ws.nearest_contact.contact_list.findIndex(e => e.id == id)
      this.ws.nearest_contact.contact_list[i].count = 0;

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
      
      if(to == this.us.MyUserId){alert("不能添加自己为好友");return;}
      for(let i=0;i<this.ws.nearest_contact.contact_list.length;i++){
        if(this.ws.nearest_contact.contact_list[i].id == to){
          alert("已是好友");
          return;
        }
      }

      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
      msg.from = this.us.MyUserId;
      msg.to = to;
      msg.sendTime = Date.now();
      this.ws.sendMessage(msg)
    }

    keyUpSearch(name: string){ //搜索添加好友
      // this.ws.
      // this.ws.getUserList(this.searchContent).subscribe(data => {
      //   console.log("data2 = ", data.Ulist);
      //   this.userlist = data.Ulist;
      // })
      if(this.searchContent=='')return;
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
  
  fileurl = environment.apiUrl+'/upload'
  dfileurl='http://localhost:9988/files/9edbe55433e4_compress.jpg'
  filep = ""
  aaaa="9edbe55433e4_compress.jpg"
  
  filename: string
  show:boolean
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
    this.filename = file.name;
    this.upload.uploadFile(this.fileurl, file).subscribe((response: any) => {
          //.log(response);
          let filetype = -1;
          if (response["body"] != null) {
            // console.log(response)
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
             msg.to = this.to_id;
             msg.content = this.dfileurl;
             if(filetype == 2||filetype == 3){
              msg.content = this.filep;
             }
             msg.contentType = filetype; 
             this.contentType = msg.contentType;
             msg.isgroup = this.isgroup;
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
  switchpng(url:string):any{
  this.imgurl=url.split(".")
  let src:string
switch(this.imgurl[1]){
  case 'doc':
    src="/files/DOC.png";
    break;
  case 'pdf':
    src="/files/pdf.png";
    break;
  case 'ppt':
    src="/files/ppt.png";
  break;
  case 'zip':
    src="/files/RAR.png";
  break;
  case 'txt':
    src="/files/txt.png";
  break;
}
return src;
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
  videourl:string
  isshowvideoVisible = false;
  showvideoModal(url:string): void {
    this.videourl=url;
    this.isshowvideoVisible = true;
  }
  handleshowvideoCancel(): void {
    this.isshowvideoVisible = false;
  }




  download(filepath:string) {
    window.open(filepath, '_blank');
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
      console.log('download:' + a.href);
    }



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                                  //  by: pjw    


    ////////////////////////////////////////////////////////////////////////////////////////////////////////////

  //获取最近联系人及其历史消息
  getNearestListAndMessage(){
    this.ws.getNearestContactAndMessage().subscribe((data) => {

      console.log("一登录获取最近联系人及其历史消息",data);
      if(data.status == 255){
        alert(data.body["Error"]);
        return
      }
      for(let i=0;i<data.body['chat_room_list'].length;i++){

        //最近联系人的（相当与一个chat room）
        let FriItem:com.ContactListItem = new(com.ContactListItem);
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
      if(this.ws.address_book.contact_list.length>0){this.ws.address_book.contact_list = [];}
      if(data==null){console.log("通讯录为空");return;}
      for(let i = 0; i < data.friends_list.length; i++){
          let  FriItem:com.ContactListItem = new(com.ContactListItem);
          FriItem.id=data['friends_list'][i].id;
          FriItem.name=data['friends_list'][i].name;
          FriItem.head_img=data['friends_list'][i].head_img;
          FriItem.is_group=data['friends_list'][i].is_group;
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
    showAddGroupModal() {

      let list = this.ws.address_book.contact_list;
      if(list.length==0){alert("列表无联系人，不可创建群");return;}

      console.log("list:",this.ws.address_book.contact_list)
      for(let i=0;i<list.length;i++){
        if(list[i].is_group==false){
          let item = new com.CreateGroupItem;
          item.id = list[i].id;
          item.name = list[i].name;
          item.head_img =list[i].head_img;
          item.selected = false;
          this.createGroupList.contact_list.push(item);
        }
     }
     this.isAddGroupVisible = true;
     console.log("创建群组显示列表：",this.createGroupList.contact_list);
    }


    handleAddGroupCancel(): void {
      this.isAddGroupVisible = false;
      this.createGroupList.contact_list = [];
      this.GroupName = '';
    }
    handleAddGroupOk(){
      if(this.GroupName=='' ){
        alert("注意：群名不能为空");
        this.GroupName='';
        this.createGroupList.contact_list = [];
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
      for(let i=0;i<this.createGroupList.contact_list.length;i++){
        if(this.createGroupList.contact_list[i].selected){
          msg.userlist.push(this.createGroupList.contact_list[i].id);
        }
      }
      if(msg.userlist.length == 0){
        alert("注意：至少选择一个人");
        return;
      }

      this.createGroupList.contact_list = [];
      this.GroupName = '';
      this.isAddGroupVisible = false;

      this.ws.sendMessage(msg)
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


  showGroupMember(){
    this.us.getGroupMember(this.to_id).subscribe(data => {
      this.groupMemberList = [];
      console.log(data)
      for(let i=0;i<data['length'];i++){
        let item = new com.ContactListItem;
        item.id = data[i]['id'];
        item.name = data[i]['name'];
        item.head_img = data[i]['head_img'];
        this.groupMemberList.push(item)
      }
    })
  }

  isAddMemberVisible = false;
  showAddMemberModal(){
    let list = this.ws.address_book.contact_list;
      if(list.length==0){alert("列表无联系人，群不可加人");return;}
   
      this.us.getGroupMember(this.to_id).subscribe(data => {
        this.groupMemberList = [];
        console.log(data)
        for(let i=0;i<data['length'];i++){
          let item = new com.ContactListItem;
          item.id = data[i]['id'];
          item.name = data[i]['name'];
          item.head_img = data[i]['head_img'];
          this.groupMemberList.push(item)
        }
        
        this.addMemberList = []
        for(let i=0;i<list.length;i++){
          if(list[i].is_group==false){
            let item = new com.AddMemberItem;
            item.id = list[i].id;
            item.name = list[i].name;
            item.head_img =list[i].head_img;
            item.selected = false;
            item.existed = false;
            if (this.groupMemberList.findIndex(e => e.id == item.id)>0){
              item.existed = true;
            }
            this.addMemberList.push(item);
          }
        }
        this.isAddMemberVisible = true;
      })
  }
  handleAddMemberCancel(){
    this.isAddMemberVisible = false;
  }
  handleAddMemberOK(){
    let msg = new(Protocol.Message)
    msg.type = Protocol.Message.Type.REQUEST;
    msg.cmd = Protocol.Message.CtrlType.GROUP_ADDMEMBERS;
    msg.from =  this.us.MyUserId;
    msg.to =  this.to_id;
    msg.isgroup = true;
    msg.userlist = [];
    for(let i=0;i<this.addMemberList.length;i++){
      if(this.addMemberList[i].selected){
        msg.userlist.push(this.addMemberList[i].id);
      }
    }
    if(msg.userlist.length == 0){
      alert("注意：至少选择一个人");
      return;
    }
    console.log("选择添加的人:",msg.userlist)
    this.ws.sendMessage(msg)
    this.isAddMemberVisible = false;
  }
  addMember(){
    
  }


  private dropdown: NzDropdownContextComponent;

  contextMenu($event: MouseEvent, template: TemplateRef<void>): void {
    this.dropdown = this.nzDropdownService.create($event, template);
  }

  close(e: NzMenuItemDirective): void {
    console.log(e);
    this.dropdown.close();
  }

}
  


