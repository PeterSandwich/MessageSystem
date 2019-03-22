import { Component, OnInit } from '@angular/core';
import { MessageItem } from '../common/im';
@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
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
  constructor() { }

  ngOnInit() {
  }

}
