import { Component } from '@angular/core';
import {LoginService} from './login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WStest';

  constructor(public login: LoginService,private router: Router){}

  quit(){
    this.login.quit().subscribe(data => {console.log("退出")});
    this.login.isLogin=false;
    this.router.navigate(["/login"])
  }
}
