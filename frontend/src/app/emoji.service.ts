import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmojiService {

  constructor(private http: HttpClient) { }

  initData(){
    return this.http.get("/assets/emojidata.json")
  }
}


