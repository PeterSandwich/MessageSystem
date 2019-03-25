import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import * as com from '../../common/im';
import { UserService } from '../../user.service';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {

  @Input() head_img:string;
  @Input() name:string;
  @Input() userlist;
  @Input() addressbook;
  @Input() searchResp;
  @Input() searching: boolean;
  @Output() userchange: EventEmitter<com.ContactListItem> = new EventEmitter<com.ContactListItem>();
  @Output() address_user_swich: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addresschange: EventEmitter<com.ContactListItem> = new EventEmitter<com.ContactListItem>();

  atChat: boolean = true;
  selectID: number;
  selectAddressID: number;
  friend_keyword: string;
  searchuserlist : com.NearestContact;

  searchVisible:boolean;  // 添加好友显示弹框
  createGroupVisible:boolean; // 创建群聊显示弹框
  createGroupList:com.CreateGroup;  //创建群组时，显示给用户选择，需要使用的结构体
  GroupList:com.CreateGroup;

  constructor(
    private us:UserService,
    private ws:WebsocketService,
    private message: NzMessageService,
    private router:Router) {
    this.head_img = '';
    this.name = "";
    this.createGroupList=new(com.CreateGroup);
    this.createGroupList.contact_list = [];
    this.GroupList=new(com.CreateGroup);
    this.GroupList.contact_list = [];
    this.searchResp = this.ws.address_book.contact_list;
   }

  ngOnInit() {

  }

  // 最近联系人选一个人
  selectToChat(item){
    this.searching = false;
    this.selectID=item.id
    this.userchange.emit(item)
  }

  //通讯录里面选一个人
  selectToAddress(item){
    
    this.selectAddressID=item.id
    this.addresschange.emit(item);

  }

  // 聊天和通讯录切换
  swichChatAndAddress(arg :boolean){
    this.atChat = arg;
    this.address_user_swich.emit(arg);
  }

  searchMonitorList(keyword:string){
  
    if(keyword){
      keyword = keyword.trim()
      if (keyword == "") {  this.searching = false;;return;}
      this.searchResp = this.ws.address_book.contact_list.filter(e => {return e.name.includes(keyword)});
      this.searching =true;
    }else{
      this.searching = false;
    }
    
  }


  handleSearchCancel(){
    console.log("handleSearchCancel");
    this.searchVisible = false;
    this.searchuserlist=null;
  }

  search(name:string){
    console.log(name);
    this.searchuserlist=null;
    if(name=='')return;
      this.us.getuserlist(name).subscribe(data => {
        console.log("userlist=", data);
        if(data['user_list'].length == 0){
          this.searchuserlist=null;
          return
        }
        this.searchuserlist = data['user_list'];
      })
  }

  addfriend(to){
    if(to == this.us.MyUserId){this.message.create("warning",'不能添加自己为好友');return;}
      for(let i=0;i<this.ws.nearest_contact.contact_list.length;i++){
        if(this.ws.address_book.contact_list[i].id == to){
          this.message.create("warning",'好友已存在');
          return;
        }
      }

      let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_SESSION;
      msg.from = this.us.MyUserId;
      msg.to = to;
      msg.sendTime = Date.now();
      this.ws.sendMessage(msg);
      this.message.create("success",'添加好友已发送邀请');
  }


  //创建群组相关
  handleCreateGroupCancel(){
    this.createGroupVisible = false;
  }

  filteruser(name:string){
    name = name.trim();
    if(name==""){
      this.createGroupList.contact_list=this.GroupList.contact_list;
      return
    }
    this.createGroupList.contact_list = this.GroupList.contact_list.filter(e => {
      return  e.name.includes(name)
    })
  }

  showAddGroupModal() {
    this.createGroupList.contact_list = [];
    let list = this.ws.address_book.contact_list;
    if(list.length==0){this.message.create('warning',"列表无联系人，不可创建群");return;}
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
   this.GroupList.contact_list = this.createGroupList.contact_list
   console.log("创建群组显示列表：",this.createGroupList.contact_list);
   this.createGroupVisible = true;
  }

  creategroup(name: string){
    name=name.trim()
    if(name==""){this.message.create('warning',"群名不能为空");return;}
    let useridlist = [];
    for(let i=0;i<this.createGroupList.contact_list.length;i++){
      if(this.createGroupList.contact_list[i].selected){
        useridlist.push(this.createGroupList.contact_list[i].id);
      }
    }
    if(useridlist.length==0){this.message.create('warning',"未选择群成员");return;}
    let msg = new(Protocol.Message)
      msg.type = Protocol.Message.Type.REQUEST;
      msg.cmd = Protocol.Message.CtrlType.CREATE_GROUP;
      msg.from =  this.us.MyUserId;
      msg.content =  name;
      msg.contentType = Protocol.Message.ContentType.TEXT; 
      msg.isgroup = true;
      msg.userlist = useridlist;
      this.ws.sendMessage(msg)
  
      this.createGroupVisible = false;   
  }

  quit(){
    this.us.isLogin = false;
    this.ws.closeSocket();
    this.router.navigateByUrl("/login");
  }
}
