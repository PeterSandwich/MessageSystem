import { Component, OnInit, Input } from '@angular/core';
import { MessageItem } from "../common/im";
//import { NzProgress } from 'ng-zorro-antd';
@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.css']
})
export class DialogboxComponent {
  @Input() msgitem: MessageItem;
  @Input() isme: boolean;
  @Input() img: string;
  @Input() percent: number;
  // OnInit() { console.log("this.id", this.isme); }

  constructor() { }
  showProgressBar:boolean = false;

  imgUrl: string[];
  switchpng(url: string) {
    this.imgUrl = url.split("+");
    this.imgUrl = this.imgUrl[1].split(".");
    let src: string
    // console.log("this.imgurl:",this.imgUrl[1])
    switch (this.imgUrl[1]) {
      case 'doc':
        src = "../../assets/DOC.png";
        break;
      case 'pdf':
        src = "../../assets/pdf.png";
        break;
      case 'ppt':
        src = "../../assets/ppt.png";
        break;
      case 'zip':
        src = "../../assets/RAR.png";
        break;
      case 'txt':
        src = "../../assets/txt.png";
        break;
    }
    return src;
  }
  getfilename(filepath: string) {
    let name: string[] = filepath.split("+");
    return name[1]
  }

  downloadFile(filepath: string) {
    const a: HTMLAnchorElement = document.createElement('a');
    let Removesuffix: string[] = filepath.split("+");
    a.href = Removesuffix[0];
    let Removeprefix: string[] = Removesuffix[1].split(".");
    a.download = Removeprefix[0];
    a.name = Removesuffix[0];
    a.click();
    a.remove();
    console.log('download:' + a.href);
  }
}
