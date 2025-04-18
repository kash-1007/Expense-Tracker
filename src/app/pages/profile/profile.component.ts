import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  isDarkMode = false;
  isEditing = false;
  selectedImage: string = '';
  totalExpense: number = 0;

  user = {
    name: 'Kashish',
    email: 'kashish@example.com',
    phone: '+91-9876543210',
    startDate: new Date('2024-11-01'),
    profilePic: 'assets/profile.jpg',
    quote: 'Save today and enjoy tomorrow 🌸'
  };

  tempUser = { ...this.user };

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchTotalExpense();
    document.body.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }

  toggleEdit() {
    this.tempUser = { ...this.user };
    this.selectedImage = this.user.profilePic;
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
  }

  saveChanges() {
    this.user = { ...this.tempUser };
    this.user.profilePic = this.selectedImage;
    this.isEditing = false;
  }

  onFileSelected(event: Event) {
    const file = (event.target as HTMLInputElement)?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  fetchTotalExpense() {
    this.http.get<number>('http://localhost:8081/api/expenses/total')
      .subscribe({
        next: (data) => this.totalExpense = data,
        error: (err) => console.error('Error fetching total expense:', err)
      });
  }
}
