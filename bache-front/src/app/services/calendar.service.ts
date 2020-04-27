import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Calendar} from '../model/Calendar';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  days: string[] = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
  ];

  private calendarMapValues:Map<string, number> = 
    new Map([
        ["Domingo", 0],
        ["Lunes", 1],
        ["Martes", 2],
        ["Miercoles", 3],
        ["Jueves", 4],
        ["Viernes", 5],
        ["Sabado", 6]
    ]);

  baseUrl: string = `${environment.backendApi}/calendar`;

  constructor(private http: HttpClient) { }


  getWeekDays(): string[] {
    return this.days;
  }

  getUserCalendar(userId: number):Observable <Calendar>{
    return this.http.get<Calendar>(`${this.baseUrl}/${userId}`);
  }

  getMapValue(day: string):number{
    return this.calendarMapValues.get(day);
  }
}
