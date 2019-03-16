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
  @Output() change: EventEmitter<com.ContactListItem> = new EventEmitter<com.ContactListItem>();

  atChat: boolean = true;
  selectID: number;
  constructor() {
    this.head_img = '';
    this.name = ""
   }

  ngOnInit() {

  }

  selectToChat(item){
    this.selectID=item.id
    this.change.emit(item)
  }

}
