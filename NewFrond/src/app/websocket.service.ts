import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";

@Injectable()
export class WebsocketService {

  ws: WebSocket;
  collection: Protocol.MessageRequest = new(Protocol.MessageRequest);
  constructor() { }

  createSocket(url:string){
    this.ws = new WebSocket(url);

    this.ws.onopen = function() {
      console.log("流打开")
    };

    this.ws.onmessage = function(evt) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(evt.data);
      reader.onload = function (e) {
      let buf = new Uint8Array(reader.result as ArrayBuffer);
      let conn = Protocol.MessageResponse.decode(buf);
      console.log(conn)}
      
    };

    this.ws.onclose = function() {
      console.log("流结束")
    };
  }

  test(){
    let msg = new(Protocol.MessageResponse)
    msg.content = "testing websocket protocol buf"
    msg.msgid = 28;
    
    this.ws.send(Protocol.MessageRequest.encode(msg).finish())
  }
  sendMessage(message: any){
    this.ws.send(message);
  }
}
