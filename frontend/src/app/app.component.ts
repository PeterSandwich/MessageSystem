import { Component } from '@angular/core';
import { load } from "protobufjs";
import {WebsocketService } from './websocket.service';
 @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private chat : WebsocketService){}
  ngOnInit(){
 
  }
  id = 1;
  msg = '';
  to = 2;
  connect(){
    this.chat.createObservableSocket("ws://139.199.196.31:9876/ws?id="+this.id)
    .subscribe(
      data => {alert(data);},
      err => console.log(err),
      ()=>console.log("流已结束")
    );
  }
  sendMsg() {
    console.log("had send message");

    this.chat.sendMessage({"PackType":2,"Body":JSON.stringify({"From":this.id, "To":this.to, "Content":this.msg})})
  }
  
}
