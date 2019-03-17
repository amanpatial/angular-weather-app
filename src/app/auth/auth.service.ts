import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    email: string = 'aman.patial@gmail.com';
    password: string = 'AmanPatial';
    signedIn: boolean = false;

    constructor(private router: Router) { }

    SignIn(email: string, password: string) {
        if (this.email === email && this.password === password) {
            this.signedIn = true;
            this.router.navigate(['/forecast']);
        }
    }
    SignOut() {
        this.signedIn = false;
        this.router.navigate(['/today']);
    }
    isAuthenticated() {
        return this.signedIn;
    }
} 