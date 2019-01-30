import { Component, OnInit } from '@angular/core';
import { Protocol } from "../protocol/auth";

@Component({
  selector: 'app-c2c',
  templateUrl: './c2c.component.html',
  styleUrls: ['./c2c.component.css']
})
export class C2cComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  person = new Protocol.AuthRequest;
  

}
