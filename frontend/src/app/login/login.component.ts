import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { WebsocketService } from '../websocket.service';
import {  Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private us: UserService,private ws: WebsocketService,private router: Router) { }
  name =''
  password = ''
  submit(){
      let body = {name:this.name,password:this.password}
      this.us.postLoginData(body).subscribe(data =>{
        if(data['Ok']){
          this.us.isLogin=true;
          this.router.navigate(['']);
          console.log(data['Uid']);
          this.us.MyUserId = data['Uid'];
          this.us.myName = data['Name'];
          this.us.myImg = data['Headimg'];
          this.ws.createSocket(environment.websocketUrl);
          this.ws.InitChatList();
        }else{
          alert(data['Errmsg']);
        }

      })
  }
}
