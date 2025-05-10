import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  loginUser() {
    const loginData = {
      email: this.email.trim(),
      password: this.password.trim()
    };

    this.http.post<any>('http://localhost:8081/api/auth/login', loginData)
      .subscribe({
        next: (res) => {
          console.log('Login successful', res);
          this.router.navigate(['/dashboard']); // Or wherever you want to go after login
        },
        error: (err) => {
          this.errorMessage = 'Invalid email or password';
        }
      });
  }
}

