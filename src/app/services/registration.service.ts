// src/app/services/registration.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient, private authService: AuthService) {}

  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/api/register`, data);
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post("http://localhost:8080/api/register/login", credentials, {
      responseType: 'text' as 'json'
    });
    
  }
  

  getUserDetails(): Observable<any> {
    const token = this.authService.getToken(); // get token from localStorage
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
  
    return this.http.get('http://localhost:8081/api/register/details', { headers });
  }
  
}
