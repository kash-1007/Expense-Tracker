import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseAnalysisService {
  private apiUrl = 'http://localhost:8081/api/expenses-analysis'; // Change with your actual API URL

  constructor(private http: HttpClient) {}

  getExpenseAnalysis(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
