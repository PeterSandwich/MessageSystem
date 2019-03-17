import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.css']
})
export class AddressItemComponent implements OnInit {
  @Input() head_img:string;
  @Input() name:string;
  @Input() selected: boolean;
  constructor() { }

  ngOnInit() {
  }

}
