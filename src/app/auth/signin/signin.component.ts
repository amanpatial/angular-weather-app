import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  OnSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    console.log('Sign in', email, password);
    this.authService.SignIn(email, password);
  }

}
