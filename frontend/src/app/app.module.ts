import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {WebsocketService } from './websocket.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule} from '@angular/forms';
import { C2cComponent } from './c2c/c2c.component';

@NgModule({
  declarations: [
    AppComponent,
    C2cComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [WebsocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
