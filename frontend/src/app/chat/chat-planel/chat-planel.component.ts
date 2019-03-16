import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';
@Component({
  selector: 'app-chat-planel',
  templateUrl: './chat-planel.component.html',
  styleUrls: ['./chat-planel.component.css']
})
export class ChatPlanelComponent implements OnInit {


  @Input() my_head_img:string;
  @Input() your_info:com.ContactListItem;

  constructor() { 
  }

  ngOnInit() {
  }

}
