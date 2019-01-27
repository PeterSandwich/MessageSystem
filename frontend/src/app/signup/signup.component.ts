import { Component, OnInit } from '@angular/core';
import { LoginService  } from '../login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private login: LoginService) { }


  ngOnInit() {
  }
  name =''
  password = ''

  signup(){
      let body = {name:this.name,password:this.password}
      this.login.postSignupData(body).subscribe(data =>{
        console.log(data);
      })
  }
}
