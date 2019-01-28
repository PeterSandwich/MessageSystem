import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable()
export class LoginService {
  constructor(private http: HttpClient) { }

  public isLogin = false;
  configUrl = environment.apiUrl;
  loginUrl = this.configUrl+"/login"
  signupUrl = this.configUrl+'/signup'
  quitUrl = this.configUrl+'/quit'
  postLoginData(data) {
    return this.http.post(this.loginUrl, data);
  }
  postSignupData(data) {
    return this.http.post(this.signupUrl, data);
  }
  quit(){
    return this.http.get(this.quitUrl);
  }
}
