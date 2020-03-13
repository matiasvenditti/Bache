import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { Credentials } from '../model/Credentials';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = `${environment.backendApi}/authenticate`;

  constructor(private http: HttpClient) { }

  login(credentials: Credentials): Observable<string> {
    return this.http.post<string>(this.baseUrl, credentials);
  }

  isAuthenticated() {
    return localStorage.getItem("token") != null;
  }

  // login(credentials: Credentials, cb: () => void) {
  //   this.auth(credentials).subscribe((token: string) => {
  //     localStorage.setItem("token", token);
  //     cb();
  //   });
  // }

  logout() {
    localStorage.removeItem("token");
  }
}
