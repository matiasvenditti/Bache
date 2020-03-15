import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Credentials } from '../model/Credentials';
import { Observable } from 'rxjs';
import { JwtToken } from '../model/JwtToken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = `${environment.backendApi}/authenticate`;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<JwtToken> {
    return this.http.post<JwtToken>(this.baseUrl, credentials);
  }

  isAuthenticated() {
    return localStorage.getItem("token") != null;
  }

  logout() {
    localStorage.removeItem("token");
  }
}
