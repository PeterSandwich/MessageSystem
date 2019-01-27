import { Component, OnInit } from '@angular/core';
import { LoginService  } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login: LoginService) { }

  ngOnInit() {
  }
  name =''
  password = ''

  submit(){
      let body = {name:this.name,password:this.password}
      this.login.postLoginData(body).subscribe(data =>{
        console.log(data);
      })
  }
}
