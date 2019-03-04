import { Component,OnInit} from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { WebsocketService } from './websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(public login: UserService,private router: Router,private ws: WebsocketService){}

  ngOnInit(){
    this.router.navigate(["/login"])
  }
  // quit(){
  //   this.ws.global_message.chat_room_list.clear();
  //   this.ws.nearest_contact.contact_list = [];
  //   this.ws.closeSocket();
  //   this.login.quit().subscribe(data => {console.log(data)});
  //   this.login.isLogin=false;
  //   this.router.navigate(["/login"])
  // }
}
