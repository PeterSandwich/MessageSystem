import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import * as com from '../../common/im'
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
  @Output() userchange: EventEmitter<com.ContactListItem> = new EventEmitter<com.ContactListItem>();
  @Output() address_user_swich: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() addresschange: EventEmitter<com.ContactListItem> = new EventEmitter<com.ContactListItem>();

  atChat: boolean = true;
  selectID: number;
  selectAddressID: number;
  constructor() {
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

  swichChatAndAddress(arg :boolean){
    this.atChat = arg;
    this.address_user_swich.emit(arg);
  }



}
