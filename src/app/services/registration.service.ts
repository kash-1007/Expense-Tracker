// src/app/services/registration.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  private baseUrl = 'http://localhost:8081';

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(`${this.baseUrl}/api/register`, data);
  }

  
    
  }
  

