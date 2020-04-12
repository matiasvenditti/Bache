import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';


@Component({
  selector: 'app-new-bache-form',
  templateUrl: './new-bache-form.component.html',
  styleUrls: ['./new-bache-form.component.scss']
})
export class NewBacheFormComponent implements OnInit {

  newBacheForm: FormGroup;
  days: string[];

  constructor(private fb: FormBuilder, private calendarService: CalendarService) {
    this.newBacheForm = this.fb.group({
      // TODO: Form Controls here
    });
    this.days = this.calendarService.getWeekDays();
  }

  ngOnInit(): void {
  }

}
