import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WebsocketService } from './websocket.service';
import { LoginService } from './login.service';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
registerLocaleData(en);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                LoginComponent,
                ChatComponent,
                SignupComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                HttpClientModule,
                FormsModule,
                NgZorroAntdModule,
                BrowserAnimationsModule
            ],
            providers: [WebsocketService, WebsocketService, LoginService, { provide: NZ_I18N, useValue: en_US }],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map