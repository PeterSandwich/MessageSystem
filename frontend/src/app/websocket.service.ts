import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Protocol } from './protocol/c2g'

@Injectable()
export class WebsocketService {
ws: WebSocket;
  constructor() { }

  createObservableSocket(url:string):Observable<any>{
    this.ws = new WebSocket(url);
    return new Observable(observer => {
      // this.ws.onopen() = function(){}  //接收连接成功建立的响应函数
      this.ws.onmessage = (event)=> observer.next(event.data);  //接收服务器返回的消息函数
      this.ws.onerror = (event) => observer.error(event);  //接收异常信息的响应函数
      this.ws.onclose=(event)=>observer.complete();  //接收连接关闭的响应函数
      // this.ws.send(event.data) = function(data){}  //发送消息函数
      // this.ws.close() = function(){}  //连接关闭函数
    }) 
  }
  
  sendMessage(message: any){
    this.ws.send(JSON.stringify(message));
  }
}
