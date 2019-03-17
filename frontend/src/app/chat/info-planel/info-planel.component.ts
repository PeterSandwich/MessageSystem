import { Component, OnInit,Input } from '@angular/core';
import * as com from '../../common/im';

@Component({
  selector: 'app-info-planel',
  templateUrl: './info-planel.component.html',
  styleUrls: ['./info-planel.component.css']
})
export class InfoPlanelComponent implements OnInit {


  @Input() name:string;
  @Input() head_img:string;
  @Input() your_info:com.ContactListItem;

  constructor() {

   }

  ngOnInit() {
      this.name = "未选择";
      this.head_img = "../../../assets/default_head_img.png";
      if(this.your_info.head_img)
        this.head_img=this.your_info.head_img;
      if(this.your_info.name)
        this.name=this.your_info.name;
  }

}
