import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error:string;
  constructor(public authService: AuthService) {
    
    }
  
  ngOnInit() {
  }

  login(loginForm) {
    this.authService.login(loginForm.value.email, loginForm.value.password);
    loginForm.value.email = loginForm.value.password = '';    
  }

  logout() {
    this.authService.logout();
  }

}
