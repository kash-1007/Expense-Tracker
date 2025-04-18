import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-show-expenses',
  templateUrl: './show-expenses.component.html',
  styleUrls: ['./show-expenses.component.css']
})
export class ShowExpensesComponent implements OnInit {
  expenses: any[] = [];
  filteredExpenses: any[] = [];

  filterDate: string = '';
  filterAmount: number | null = null;
  filterCategory: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchExpenses();
  }

  fetchExpenses() {
    this.http.get<any[]>('http://localhost:8081/api/expenses').subscribe(
      (data) => {
        this.expenses = data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        this.filteredExpenses = [...this.expenses]; // Initially show all
      },
      (error) => {
        console.error('Error fetching expenses:', error);
      }
    );
  }

  applyFilters() {
    const formatDate = (dateStr: string) => dateStr.split('T')[0];
  
    this.filteredExpenses = this.expenses.filter(exp => {
      const matchesDate = this.filterDate ? formatDate(exp.date) === this.filterDate : true;
      const matchesAmount = this.filterAmount !== null ? exp.amount == this.filterAmount : true;
      const matchesCategory = this.filterCategory
        ? exp.category.toLowerCase().includes(this.filterCategory.toLowerCase())
        : true;
  
      return matchesDate && matchesAmount && matchesCategory;
    });
  }
  

  clearFilters() {
    this.filterDate = '';
    this.filterAmount = null;
    this.filterCategory = '';
    this.filteredExpenses = [...this.expenses];
  }
}
