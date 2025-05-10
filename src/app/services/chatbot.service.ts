import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatbotService {
  private apiUrl = 'http://localhost:8081/api/chatbot';  // URL of your Spring Boot API

  constructor(private http: HttpClient) {}

  askQuestion(question: string): Observable<any> {
    const body = { question };
    return this.http.post<any>(this.apiUrl, body);
  }
}
