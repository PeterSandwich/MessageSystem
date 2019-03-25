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
    this.imgUrl = this.imgUrl[1].split("&");
    this.imgUrl = this.imgUrl[0].split(".")
    let src: string
    // console.log("this.imgurl:",this.imgUrl[1])
    switch (this.imgUrl[this.imgUrl.length-1]) {
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
    name=name[1].split("&");
    return name[0]
  }
  getFileSize(filepath:string){
    let filesize:string[]=filepath.split("&");
    let size = Number(filesize[1])
    if(size<1024){
      return size+"B"
    }else if(size>=1024&&size<1024*1024){
      return (size/1024).toFixed(2)+"KB"
    }else{
      return (size/(1024*1024)).toFixed(2)+"MB"
    }
  }
  downloadFile(filepath: string) {
    const a: HTMLAnchorElement = document.createElement('a');
    let Removesuffix: string[] = filepath.split("+");
    a.href = Removesuffix[0];
    let Removeprefix: string[] = Removesuffix[1].split("&");
    Removeprefix = Removeprefix[0].split(".")
    a.download = Removeprefix[0];
    a.name = Removesuffix[0];
    a.click();
    a.remove();
    console.log('download:' + a.href);
  }
  isshowpicVisible = false;
  aaa:string[]
  aa:string[]
  a:string
  showpicModal(aaaa:string): void {
    this.aaa = aaaa.split(".");
    this.aa = this.aaa[0].split("_");
    this.a = this.aa[0]+"."+this.aaa[1];
    console.log("this.a=",this.a)
    this.isshowpicVisible = true;
  }
  handleshowpicCancel(): void {
    this.isshowpicVisible = false;
  }
  videourl:string
  isshowvideoVisible = false;
  showvideoModal(url:string): void {
    let fileurl:string[] = url.split("+");

    console.log(fileurl[0]);

    this.videourl=fileurl[0];
    this.isshowvideoVisible = true;
  }
  handleshowvideoCancel(): void {
    this.isshowvideoVisible = false;
  }

}
