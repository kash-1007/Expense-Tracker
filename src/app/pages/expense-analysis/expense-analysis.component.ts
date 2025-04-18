import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-expense-analysis',
  templateUrl: './expense-analysis.component.html',
  styleUrls: ['./expense-analysis.component.css']
})
export class ExpenseAnalysisComponent implements AfterViewInit {

  @ViewChild('dailyLineChart', { static: false }) dailyLineChart!: ElementRef;
  @ViewChild('dailyPieChart', { static: false }) dailyPieChart!: ElementRef;
  @ViewChild('weeklyLineChart', { static: false }) weeklyLineChart!: ElementRef;
  @ViewChild('weeklyPieChart', { static: false }) weeklyPieChart!: ElementRef;
  @ViewChild('monthlyLineChart', { static: false }) monthlyLineChart!: ElementRef;
  @ViewChild('monthlyPieChart', { static: false }) monthlyPieChart!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.createCharts();
  }

  createCharts(): void {
    this.createLineChart(this.dailyLineChart, ['Mon', 'Tue', 'Wed'], [100, 200, 150], 'Daily Line Chart');
    this.createPieChart(this.dailyPieChart, ['Food', 'Travel', 'Others'], [300, 500, 200]);

    this.createLineChart(this.weeklyLineChart, ['Week 1', 'Week 2', 'Week 3'], [700, 800, 650], 'Weekly Line Chart');
    this.createPieChart(this.weeklyPieChart, ['Bills', 'Groceries', 'Entertainment'], [400, 300, 200]);

    this.createLineChart(this.monthlyLineChart, ['Jan', 'Feb', 'Mar'], [2000, 1800, 2100], 'Monthly Line Chart');
    this.createPieChart(this.monthlyPieChart, ['Rent', 'Shopping', 'Savings'], [1000, 700, 400]);
  }

  createLineChart(canvasRef: ElementRef, labels: string[], data: number[], label: string): void {
    if (!canvasRef) return;

    new Chart(canvasRef.nativeElement, {
      type: 'line',
      data: {
        labels,
        datasets: [{
          label,
          data,
          borderColor: '#36A2EB',
          backgroundColor: 'rgba(54,162,235,0.2)',
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }

  createPieChart(canvasRef: ElementRef, labels: string[], data: number[]): void {
    if (!canvasRef) return;

    new Chart(canvasRef.nativeElement, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          label: 'Category Split',
          data,
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}
