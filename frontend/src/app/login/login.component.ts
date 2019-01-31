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

  constructor(private login: UserService,private ws: WebsocketService,private router: Router) { }
  name =''
  password = ''
  submit(){
      let body = {name:this.name,password:this.password}
      this.login.postLoginData(body).subscribe(data =>{
        if(data['Ok']){
          this.login.isLogin=true;
          this.router.navigate(['']);
          console.log(data['Uid']);
          this.login.MyUserId = data['Uid'];
          this.ws.createSocket(environment.websocketUrl);
          this.ws.InitChatList();
        }else{
          alert(data['Errmsg']);
        }

      })
  }
}
