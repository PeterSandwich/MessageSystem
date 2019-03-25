import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { ShowComponent } from './show/show.component';
const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: "login",
    component:LoginComponent
  },
  {
    path: "chat",
    component:ChatComponent,
  },
  {
    path: "signup",
    component:SignupComponent
  },
  {
    path: "box",
    component:DialogboxComponent
  },
  {
    path: "show",
    component:ShowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
