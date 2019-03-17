import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, Validators, FormControl } from '@angular/forms';
import { stat } from 'fs';
import { STATUS_CODES } from 'http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  genders = ['male', 'female'];
  signupForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.signupForm = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required])
    })

    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    )

    //set default value 
    this.signupForm.setValue({
      'name': 'Aman',
      'email': 'aman.patial@gmail.com2',
      'password': 'AmanPatial'
    })
  }
  onSubmit() {
    console.log('After submit', this.signupForm);
    console.log('Values', this.signupForm.value);
    //this.signupForm.reset();
  }

}
