import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment.prod';
import {User} from '../model/User';
import {Observable} from 'rxjs';
import {UserDTO} from '../dto/UserDTO';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = `${environment.backendApi}/user`;

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`$${this.baseUrl}/${id}`);
  }

  createUser(user: UserDTO): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}`, user);
  }

  deleteUser(id: number): Observable<number> {
    return this.http.delete<number>(`${this.baseUrl}`);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.baseUrl}/${id}`, user);
  }
}
