// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  // Method to set token in localStorage
  setToken(token: string): void {
    localStorage.setItem('jwtToken', token);
  }

  // Method to get token from localStorage
  getToken(): string | null {
    return localStorage.getItem('jwtToken');
  }

  // Optional: Method to check if the user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  // Optional: Method to remove token when logging out
  logout(): void {
    localStorage.removeItem('jwtToken');
  }
}
