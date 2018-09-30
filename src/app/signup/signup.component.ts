import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  private error:string;
  constructor(public authService: AuthService) { }

  ngOnInit() {
  }
  signup(signupForm) {
    this.authService.signup(signupForm.value.email, signupForm.value.password);
    signupForm.value.email = signupForm.value.password = '';
  }
  
}
