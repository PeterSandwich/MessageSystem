import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import * as com from '../../common/im';
import { UserService } from '../../user.service';
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
  constructor(private us:UserService) {
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


}
