import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import * as com from '../../common/im';
import { UserService } from '../../user.service';
import { WebsocketService } from '../../websocket.service';
import { Protocol } from '../../protocol/Protocol';
import { NzMessageService } from 'ng-zorro-antd';
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

  searchVisible:boolean;


  constructor(private us:UserService,private ws:WebsocketService,private message: NzMessageService) {
    this.head_img = '';
    this.name = ""
   }

  ngOnInit() {

  }

  // 最近联系人选一个人
  selectToChat(item){
    this.selectID=item.id
    this.userchange.emit(item)
  }

  //通讯录里面选一个人
  selectToAddress(item){
    this.selectAddressID=item.id
    this.addresschange.emit(item)
  }

  // 聊天和通讯录切换
  swichChatAndAddress(arg :boolean){
    this.atChat = arg;
    this.address_user_swich.emit(arg);
  }

  searchMonitorList(keyword){
    this.searchResp = [];
    if(keyword){
      this.us.searchAddress(keyword).subscribe((data)=>{
        console.log(data);
        if(data&&data['friends_list']){
          this.searchResp = data['friends_list'];
          this.searching = true;
        }
      });  
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

}
