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
import { HomeComponent } from './home/home.component';
import { UserService } from './user.service';
import { FileUploadModule } from 'ng2-file-upload'
import { UploadService } from '../app/file.service'
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    SignupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgZorroAntdModule,
    BrowserAnimationsModule,
    FileUploadModule
  ],
  providers: [WebsocketService,UserService, { provide: NZ_I18N, useValue: en_US },UploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
