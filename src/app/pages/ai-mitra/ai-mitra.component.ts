import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-ai-mitra',
  templateUrl: './ai-mitra.component.html',
  styleUrls: ['./ai-mitra.component.css']
})
export class AiMitraComponent implements OnInit {
  chatMessages: { text: string, type: string }[] = [];
  userMessage: string = "";
  monthlyExpenses: any[] = [];

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadCurrentMonthExpenses();
  }

  loadCurrentMonthExpenses(): void {
    this.expenseService.getCurrentMonthExpenses().subscribe(data => {
      this.monthlyExpenses = data;
    });
  }

  sendMessage(): void {
    if (!this.userMessage.trim()) return;

    this.chatMessages.push({ text: this.userMessage, type: 'user' });

    let botReply = this.generateResponse(this.userMessage);
    this.chatMessages.push({ text: botReply, type: 'bot' });

    this.userMessage = ""; // Clear input field
  }

  generateResponse(message: string): string {
    if (message.toLowerCase().includes("total spent")) {
      let total = this.monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
      return `You have spent ₹${total} this month.`;
    }

    if (message.toLowerCase().includes("suggest savings")) {
      let total = this.monthlyExpenses.reduce((sum, expense) => sum + expense.amount, 0);
      let suggestion = total > 10000 ? "You should reduce spending on non-essential items." : "You're on track! Keep it up.";
      return `Based on your spending of ₹${total}, ${suggestion}`;
    }

    return "I'm here to assist with your expenses. Try asking about 'total spent' or 'suggest savings'.";
  }
}
