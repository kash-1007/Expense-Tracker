import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AiMitraComponent } from './pages/ai-mitra/ai-mitra.component';
import { ShowExpensesComponent } from './pages/show-expenses/show-expenses.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NgChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';

import { ExpenseAnalysisComponent } from './pages/expense-analysis/expense-analysis.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogoutComponent } from './components/logout/logout.component';
@NgModule({
  declarations: [
    AppComponent,
    ExpenseComponent,
    NavbarComponent,
    DashboardComponent,
    AiMitraComponent,
    ShowExpensesComponent,
    ProfileComponent,
    ExpenseAnalysisComponent,
    RegistrationComponent,
    LoginComponent,
    LandingComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgChartsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
