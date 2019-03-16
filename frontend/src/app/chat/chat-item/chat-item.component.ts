import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-chat-item',
  templateUrl: './chat-item.component.html',
  styleUrls: ['./chat-item.component.css']
})
export class ChatItemComponent implements OnInit {

  @Input() head_img:string;
  @Input() name:string;
  @Input() count:number;
  @Input() time :number;
  @Input() tips :string;
  @Input() min_message :string;
  @Input() selected: boolean;



  constructor() {
    // this.head_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPDSqHLwSCvXoVaKQSai926DXs5MufxblRa_yZf0tFYN6ks-_';
    // this.time= 1552634513758;
    // this.tips = "[3条]";
    // this.min_message = "hello world";
   }

  ngOnInit() {

  }

}
