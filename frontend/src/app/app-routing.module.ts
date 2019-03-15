import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ChatComponent } from './chat/chat.component';
import { SignupComponent } from './signup/signup.component';
import { DevComponent } from './dev/dev.component';
const routes: Routes = [
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: "login",component:LoginComponent
  },
  {
    path: "chat",
    component:ChatComponent,
  },
  {
    path: "signup",component:SignupComponent
  },
  {
    path: "dev",component:DevComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
