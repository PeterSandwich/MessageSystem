import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  constructor(private login: UserService,private router: Router) { }

  ngOnInit() {
  }
  name =''
  password = ''
  head_img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMPDSqHLwSCvXoVaKQSai926DXs5MufxblRa_yZf0tFYN6ks-_'

  signup(){
      let body = {name:this.name,password:this.password,head_img:this.head_img}
      this.login.postSignupData(body).subscribe(data =>{
        // console.log(data);
       if(data.status==200)
       alert("注册成功");
       this.router.navigate(['login']);
      })
  }

}
