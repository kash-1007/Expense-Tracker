import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChatbotService } from '../../services/chatbot.service';
@Component({
  selector: 'app-ai-mitra',
  templateUrl: './ai-mitra.component.html',
  styleUrls: ['./ai-mitra.component.css']
})
export class AiMitraComponent {
  userInput: string = '';
  messages: { role: string; content: string }[] = [];
  loading: boolean = false;

  constructor(private http: HttpClient) {}

  sendMessage() {
    if (!this.userInput.trim()) return;

    this.messages.push({ role: 'user', content: this.userInput });
    this.loading = true;

    const payload = {
      question: this.userInput,
      email: 'kashish@example.com'  // Replace this with real user email dynamically
    };
    

    this.http.post<any>('http://localhost:8081/api/chatbot', payload).subscribe({
      next: (response) => {
        this.messages.push({ role: 'bot', content: response.answer });
        this.loading = false;
        this.userInput = '';
      },
      error: () => {
        this.messages.push({ role: 'bot', content: 'We are processing!!! May be there is error in API key' });
        this.loading = false;
      }
    });
  }
}
