import { Component, OnInit, ElementRef,TemplateRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NzDropdownContextComponent, NzDropdownService, NzMenuItemDirective } from 'ng-zorro-antd';
import { NzMessageService } from 'ng-zorro-antd';
import { DomSanitizer } from '@angular/platform-browser'
import { WebsocketService } from '../websocket.service';
import { UserService } from '../user.service';
import { Injectable } from '@angular/core';
import { Protocol } from '../protocol/Protocol';
import * as com from '../common/im'
import { environment } from '../../environments/environment';
import { Long } from 'protobufjs';
import { ChatListComponent } from './chat-list/chat-list.component';
import { Router } from '@angular/router';


@Injectable()
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})



export class ChatComponent implements OnInit {

  selected_contact_list_item: com.ContactListItem; // 已选择的聊天会话人
  selected_address_list_item: com.ContactListItem;  // 已选择的通讯率人
  char_or_adress: boolean;        // 是在最近联系人列表还是通讯率列表里面
  loadDataOk:boolean = false;

  @ViewChild(ChatListComponent)
  private chatListComponent: ChatListComponent;

  my_id : number;
  my_img_url : string;
  my_name : string;

  showmsg : com.MessageItem[];

  userlist : com.NearestContact;
  userListDisplay:com.ContactListItem[];    //最近联系人和通讯录在前端切换显示需要的结构体
  createGroupList:com.CreateGroup;          //创建群组时，需要使用的结构体
  groupMemberList:com.ContactListItem[];    //群成员信息列表
  addMemberList:com.AddMemberItem[];        //群添加成员时，需要的结构体


  constructor(
    public ws:WebsocketService, 
    private us:UserService,    // 里面有 我的Id: this.us.MyUserId
    private el: ElementRef,
    public _d: DomSanitizer,
    private nzDropdownService: NzDropdownService,
    private message: NzMessageService,
    private router: Router
    ) {
      this.char_or_adress = true;
      
     }


    ngAfterViewInit() {
      this.el.nativeElement.focus();
    }
    
    ngOnInit(){
    if(!this.us.isLogin){this.router.navigateByUrl("/login")}
    this.ws.createSocket(environment.websocketUrl+"?session_id="+this.us.session_id);
    this.ws.global_message.chat_room_list = new Map<number|Long,com.ChatRoom>();
    this.ws.nearest_contact.contact_list = [];
    this.ws.address_book.contact_list = [];

    this.selected_contact_list_item = new(com.ContactListItem);
    this.selected_contact_list_item.name = "未选择";
    this.selected_contact_list_item.id = -1;
    
    this.selected_address_list_item = new(com.ContactListItem);

      this.userListDisplay = [];
      this.createGroupList=new(com.CreateGroup);
      this.createGroupList.contact_list = [];
      this.groupMemberList = [];
      this.addMemberList = [];
      // 初始化最近聊天列表及其聊天历史消息
      this.getNearestListAndMessage();
      this.getAddress();

      this.my_id = this.us.MyUserId;
      this.my_img_url = this.us.myImg;
      this.my_name = this.us.myName;
    }


    
    //1. 最近联系人选择会话，在最近联系人列表选择联系人进行聊天
    selectOneUser(contact_list_item: com.ContactListItem){
      
      // 选择了
      this.selected_contact_list_item = contact_list_item;

      // 发送ACK消息回后端，让后端知道这消息已读，徽标数清零
      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.ACK;
      msg.cmd = Protocol.Message.CtrlType.NONE;
      msg.from =  this.us.MyUserId;
      msg.to = contact_list_item.id;
      msg.contentType = Protocol.Message.ContentType.TEXT;
      // this.contentType = msg.contentType;
      msg.isgroup = contact_list_item.is_group;
      msg.sendTime = Date.now();
      this.ws.sendMessage(msg);

       // 徽标数清零
       let i = this.ws.nearest_contact.contact_list.findIndex(e => e.id == contact_list_item.id)
       this.ws.nearest_contact.contact_list[i].count = 0;

    }

    // 2.
    swichChatAndAddress(arg :boolean){
      this.char_or_adress = arg;
    }

    // 3.
    selectOneAddress(item: com.ContactListItem){
      this.selected_address_list_item = item;
    }


    // 4.  在通讯录选择一个人并且发送消息，需要跳转到聊天界面，并且在最近通讯录置顶该联系人
    startToChat(item: com.ContactListItem){
      this.chatListComponent.swichChatAndAddress(true);
      this.chatListComponent.selectToChat(item);
      this.chatToTop(item);
    }

    //5. 将一个联系人放在最顶上，如果没有则加上
    chatToTop(item: com.ContactListItem){
      this.ws.nearest_contact.contact_list = this.ws.nearest_contact.contact_list.filter((e)=>{return e.id!=item.id||e.name!=item.name});
      this.ws.nearest_contact.contact_list.push(item);
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
    let fileurl:string[] = url.split("+");

    console.log(fileurl[0]);

    this.videourl=fileurl[0];
    this.isshowvideoVisible = true;
  }
  handleshowvideoCancel(): void {
    this.isshowvideoVisible = false;
  }

  download(filepath:string) {
    window.open(filepath, '_blank');
    return;
  }
  getfilename(filepath:string):any{
    let name:string[] = filepath.split("+");
    return name[1]
  }
    // 调用浏览器的下载
    downloadFile(filepath:string) {
      const a: HTMLAnchorElement = document.createElement('a');
      let Removesuffix:string[] = filepath.split("+");
      a.href = Removesuffix[0];
      let Removeprefix:string[] = Removesuffix[1].split(".");
      a.download = Removeprefix[0];
      a.name=Removesuffix[0];
      a.click();
      a.remove();
      console.log('download:' + a.href);
    }


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
          for(let i=0;i<chat_room.message_list.length;i++){
            chat_room.message_list[i].loading_percent =-1;
          }
         this.ws.global_message.chat_room_list.set(chat_room.id,chat_room);

      }
      this.loadDataOk = true;
      console.log("最近联系人列表contact_list = ", this.ws.nearest_contact.contact_list);
      console.log("全局消息global_messgae = ", this.ws.global_message.chat_room_list);
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



  
}
  

