import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  configUrl = 'http://localhost:9876/api';
  loginUrl = this.configUrl+"/login"
  signupUrl = this.configUrl+'/signup'
  postLoginData(data) {
    return this.http.post(this.loginUrl, data);
  }
  postSignupData(data) {
    return this.http.post(this.signupUrl, data);
  }
}
