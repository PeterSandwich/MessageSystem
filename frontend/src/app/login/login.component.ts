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
        console.log(data.status)
          console.log(data.body)
        
      })
  }
}
