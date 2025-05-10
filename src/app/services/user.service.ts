import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8081/api/user';

  constructor(private http: HttpClient) {}

  getUserProfile(email: string) {
    return this.http.get<any>(`${this.apiUrl}/profile?email=${email}`);
  }
}
