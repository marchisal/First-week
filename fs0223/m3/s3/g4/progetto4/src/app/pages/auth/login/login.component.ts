import { Component } from '@angular/core';
import { LoginData } from '../interface/login-data';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
 data: LoginData = {
   email: '',
   password: ''
 }
}
