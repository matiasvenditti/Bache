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
import { ColumnaIzqComponent } from './components/columna-izq/columna-izq.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtInterceptor } from './utils/JwtInterceptor';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    LandingComponent,
    LandingContainerComponent,
    HomeComponent,
    HomeContainerComponent,
    ColumnaIzqComponent,
    HeaderComponent,
    HomeContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
