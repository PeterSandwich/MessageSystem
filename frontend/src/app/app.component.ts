import { Component } from '@angular/core';
import {LoginService} from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WStest';

  constructor(private http: LoginService){}

  quit(){
    this.http.quit().subscribe(data => {console.log("退出")});
  }
}
