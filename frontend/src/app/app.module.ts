import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {WebsocketService  } from './websocket.service';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { NgZorroAntdModule,NZ_I18N,en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { UserService } from './user.service';
import { UploadService } from '../app/file.service';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ShowComponent } from './show/show.component'
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    SignupComponent,
    DialogboxComponent,
    ShowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
  ],
  providers: [WebsocketService,UserService, { provide: NZ_I18N, useValue: en_US },UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
