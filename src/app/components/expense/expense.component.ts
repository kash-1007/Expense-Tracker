import { Component, OnInit } from '@angular/core';
import { ExpenseService, Expense } from '../../services/expense.service';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {
  expenses: Expense[] = [];

  // New expense object
  newExpense: Expense = {
    title: '',
    category: '',
    amount: 0,
    date: new Date().toISOString().split('T')[0] // Default to today
  };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  // Load all expenses from backend
  loadExpenses(): void {
    this.expenseService.getExpenses().subscribe((data) => {
      this.expenses = data;
    }, error => {
      console.error('Error fetching expenses:', error);
    });
  }

  // Add new expense
  addExpense(): void {
    if (this.newExpense.title && this.newExpense.category && this.newExpense.amount && this.newExpense.date) {
      this.expenseService.addExpense(this.newExpense).subscribe((createdExpense) => {
        this.expenses.push(createdExpense); // Add new expense directly to list
        this.newExpense = { title: '', category: '', amount: 0, date: new Date().toISOString().split('T')[0] }; // Reset form
      }, error => {
        console.error('Error adding expense:', error);
      });
    }
  }

  // Delete expense
  deleteExpense(id: number | undefined) {
    if (id === undefined) {
      console.error("Expense ID is undefined!");
      return;
    }
  
    if (confirm('Are you sure you want to delete this expense?')) {
      this.expenseService.deleteExpense(id).subscribe(
        () => {
          this.loadExpenses(); // Refresh the expense list after deletion
        },
        (error) => {
          console.error('Error deleting expense:', error);
        }
      );
    }
  }
  
}
