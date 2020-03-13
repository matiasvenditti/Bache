import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LandingComponent } from './pages/landing/landing.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuard } from './utils/AuthGuard';

const routes: Routes = [
  {path: 'login', component: LandingComponent},
  {path: 'home', component: HomeComponent},
  {path: 'landing', component: LandingComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
