import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { UsersComponent } from './users/users.component';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ForgotPasswordComponent, UsersComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
