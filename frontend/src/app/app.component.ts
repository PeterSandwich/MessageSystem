import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public login: UserService,private router: Router){}

  quit(){
    this.login.quit().subscribe(data => {console.log("退出")});
    this.login.isLogin=false;
    this.router.navigate(["/login"])
  }
}
