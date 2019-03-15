import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-dev',
  templateUrl: './dev.component.html',
  styleUrls: ['./dev.component.css']
})
export class DevComponent implements OnInit {
  @Input() head_img:string;
  @Input() name:string;
  @Input() count:number;
  @Input() time :number;
  @Input() tips :string;
  @Input() min_message :string;


  constructor() {
    this.head_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPDSqHLwSCvXoVaKQSai926DXs5MufxblRa_yZf0tFYN6ks-_';
    this.name = "pjw";
    this.time= 1552634513758;
    this.tips = "[3条]";
    this.min_message = "hello world";
    this.count = 0;
   }

  ngOnInit() {

  }

}
