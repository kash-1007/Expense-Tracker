import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'expense-tracker';
   // Initially, user is not logged in

  constructor() {
    // Check localStorage to see if user is already simulated as logged in
    
  }

  
}
