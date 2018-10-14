import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/services/login.service';
import { UserManagementRoutingModule } from './user-management-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserManagementRoutingModule
  ],
  declarations: [LoginComponent],
  providers: [LoginService]
})
export class UserManagementModule { }
