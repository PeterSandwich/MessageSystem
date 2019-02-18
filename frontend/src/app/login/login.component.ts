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
      this.us.postLoginData(body).subscribe(data => {
        console.log("data.status=", data.status)
        if(data.status==200){
          let respond:any = data["body"];
          alert("登录成功");
          this.us.isLogin=true;
          this.us.MyUserId = respond['id'];
          this.us.myImg = respond['head_img'];
          this.us.myName = respond['name']
          this.us.session_id=respond['session_id'];
          this.router.navigate(['chat']);
          console.log("data=", data, this.us.MyUserId, this.us.myName);
          this.ws.createSocket(environment.websocketUrl);
          this.ws.getNearestList();
          this.ws.getAddress();
        }
        else{
          alert("登录失败")
        }
      })
  }
}
