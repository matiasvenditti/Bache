import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';


@Component({
  selector: 'app-popup-editar-week',
  templateUrl: './popup-editar-week.component.html',
  styleUrls: ['./popup-editar-week.component.scss']
})
export class PopupEditarWeekComponent implements OnInit {

  editWeekForm: FormGroup;
  weekDays: string[];

  daysVisible: boolean = false;
  upVisible: boolean = false;
  downVisible: boolean = true;

  constructor(private calendarService: CalendarService) { }

  ngOnInit(): void {
    this.weekDays = this.calendarService.getWeekDays();
  }

  displayDays(): void {
    this.daysVisible = true;
    this.upVisible = true;
    this.downVisible = false;
  }

  hideDays(): void {
    this.daysVisible = false;
    this.upVisible = false;
    this.downVisible = true;
  }

}

