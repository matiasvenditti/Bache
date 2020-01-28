import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LandingContainerComponent } from './components/landing-container/landing-container.component';
import { HomeComponent } from './components/pages/home/home.component';
import { HomeContainerComponent } from './components/home-container/home-container.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    LandingContainerComponent,
    HomeComponent,
    HomeContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
