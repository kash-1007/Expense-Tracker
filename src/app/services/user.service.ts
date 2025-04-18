// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8081/api/user/details';  // Protected endpoint

  constructor(private http: HttpClient, private authService: AuthService) {}

  getUserDetails(): Observable<any> {
    const token = this.authService.getToken(); // Get the JWT token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`); // Set token in Authorization header

    return this.http.get(this.apiUrl, { headers }); // Make the GET request with the token
  }
}
