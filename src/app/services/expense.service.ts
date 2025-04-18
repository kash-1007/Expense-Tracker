import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

export interface Expense {
  id?: number;
  title: string;
  category: string;
  amount: number;
  date: string;
}
export interface ExpenseAnalysis {
  category: string;
  amount: number;
}

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  private apiUrl = 'http://localhost:8081/api/expenses';
  private refreshNeeded$ = new Subject<void>();

  constructor(private http: HttpClient) {}

  // Fetch all expenses
  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:8081/api/expenses/latest').pipe(
      map(expenses => expenses.map(exp => ({
        ...exp,
        id: exp.id ?? Math.floor(Math.random() * 100000) // Assign random ID if missing
      }))),
      catchError(this.handleError)
    );
  }
  get refreshNeeded() {
    return this.refreshNeeded$;
  }

  // Add new expense
  addExpense(expense: Expense): Observable<Expense> {
    return this.http.post<Expense>(this.apiUrl, expense).pipe(tap(() => {
      this.refreshNeeded$.next();  // Notify dashboard to refresh
    }));
  }

  // Delete an expense
  deleteExpense(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }
  

  // Error handling
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server error (Code: ${error.status}): ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
  getCurrentMonthExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>('http://localhost:8081/api/expenses/current-month');
  }
  getExpenseAnalysisData(period: string): Observable<ExpenseAnalysis[]> {
    return this.http.get<ExpenseAnalysis[]>(`${this.apiUrl}/${period}`);
  }

}
