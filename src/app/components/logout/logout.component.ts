import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';  // Import Router to redirect

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout(); // Call the logout method from AuthService
    alert('You have logged out.');

    // Redirect to the login page after logout
    this.router.navigate(['/login']);
  }
}
