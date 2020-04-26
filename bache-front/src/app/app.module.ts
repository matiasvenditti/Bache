import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

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
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { CalendarComponent } from './components/calendar/calendar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ColumnaDerComponent } from './components/columna-der/columna-der.component';
import { PopupEditarWeekComponent } from './components/popup-editar-week/popup-editar-week.component';
import { PopupNuevoBacheComponent } from './components/popup-nuevo-bache/popup-nuevo-bache.component';
import { NewBacheFormComponent } from './components/new-bache-form/new-bache-form.component';
import { NewActivityFormComponent } from './components/new-activity-form/new-activity-form.component';
import { UserComponent } from './pages/user/user.component';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { UserColumnaIzqComponent } from './components/user-columna-izq/user-columna-izq.component';
import { registerLocaleData } from '@angular/common';

import localeEs from '@angular/common/locales/es-AR';
registerLocaleData(localeEs, 'es-AR');

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
    HomeContentComponent,
    CalendarComponent,
    ColumnaDerComponent,
    PopupEditarWeekComponent,
    PopupNuevoBacheComponent,
    NewBacheFormComponent,
    NewActivityFormComponent,
    UserComponent,
    UserContainerComponent,
    UserColumnaIzqComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'es-AR' },  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
