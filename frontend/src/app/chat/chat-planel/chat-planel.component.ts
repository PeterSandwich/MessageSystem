import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';
import { MessageItem } from '../../common/im';
@Component({
  selector: 'app-chat-planel',
  templateUrl: './chat-planel.component.html',
  styleUrls: ['./chat-planel.component.css']
})
export class ChatPlanelComponent implements OnInit {


  @Input() my_head_img:string;
  @Input() your_info:com.ContactListItem;
  msg1:MessageItem ={
    id:1,
    from:1,
    to:2,
    content:"asdsad",
    content_type:0,
    arrive_time:1111111,
    send_time:123321,
    is_group:false,
    loading_present:0
  };
  msg2:MessageItem ={
    id:1,
    from:1,
    to:2,
    content:"asdsad",
    content_type:1,
    arrive_time:1111111,
    send_time:123321,
    is_group:false,
    loading_present:0
  };
  msg3:MessageItem ={
    id:1,
    from:1,
    to:2,
    content:"asdsad",
    content_type:2,
    arrive_time:1111111,
    send_time:123321,
    is_group:false,
    loading_present:0
  };
  msg4:MessageItem ={
    id:1,
    from:1,
    to:2,
    content:"asdsad",
    content_type:3,
    arrive_time:1111111,
    send_time:123321,
    is_group:false,
    loading_present:0
  };
  constructor() { 
  }

  ngOnInit() {
  }

  
}
