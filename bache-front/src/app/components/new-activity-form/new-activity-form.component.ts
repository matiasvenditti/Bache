import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';

@Component({
  selector: 'app-new-activity-form',
  templateUrl: './new-activity-form.component.html',
  styleUrls: ['./new-activity-form.component.scss']
})
export class NewActivityFormComponent implements OnInit {

  newActivityForm: FormGroup;
  days: string[];

  constructor(private calendarService: CalendarService) {
    this.days = this.calendarService.getWeekDays();
  }

  ngOnInit(): void {
  }

}

