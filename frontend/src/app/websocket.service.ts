import { Injectable } from '@angular/core';
import { Protocol } from "./protocol/Protocol";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable()
export class WebsocketService {

  ws: WebSocket;
  collection: Protocol.Message = new(Protocol.Message);
  constructor(private http:HttpClient) { }

  createSocket(url:string){
    this.ws = new WebSocket(url);
    this.ws.onopen = function() {
      console.log("WebSocket打开")
    };
    this.ws.onmessage = function(evt) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(evt.data);
      reader.onload = function (e) {
      let buf = new Uint8Array(reader.result as ArrayBuffer);
      let conn = Protocol.Message.decode(buf);
      console.log(conn)}
      
    };
    this.ws.onclose = function() {
      console.log("WebSocket结束")
    };
  }

  sendMessage(message: any){
    this.ws.send(message);
  }

  getUserList(name:string):Observable<any>{
      let url  = environment.apiUrl+"/userlist?name"+name
      return this.http.get(url)
  }

  getChatList(){
    let url  = environment.apiUrl+"/chatlist"
    return this.http.get(url)
  }

  getChatMessageList(data){
    let url  = environment.apiUrl+"/histchat"
    return this.http.post(url,JSON.stringify(data))
  }
}


