import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ExpenseAnalysisComponent } from './pages/expense-analysis/expense-analysis.component';
import { AiMitraComponent } from './pages/ai-mitra/ai-mitra.component';
import { ShowExpensesComponent } from './pages/show-expenses/show-expenses.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './components/landing/landing.component';
import { LogoutComponent } from './components/logout/logout.component';
const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'expense-analysis', component: ExpenseAnalysisComponent },
  { path: 'ai-mitra', component: AiMitraComponent },
  { path: 'show-expenses', component: ShowExpensesComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'logout', component: LogoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
