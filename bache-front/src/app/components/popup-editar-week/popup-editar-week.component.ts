import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Calendar} from '../../model/calendar/Calendar';
import {CalendarForm, ICalendarForm} from '../../model/calendar/CalendarForm';


@Component({
  selector: 'app-popup-editar-week',
  templateUrl: './popup-editar-week.component.html',
  styleUrls: ['./popup-editar-week.component.scss'],
  animations: [
    trigger('rotation', [
      state('down', style({
        transform: 'rotate(0)'
      })),
      state('up', style({
        transform: 'rotate(-180deg)'
      })),
      transition('down <=> up', [
        animate('0.3s ease-out')
      ])
    ])
  ]
})
export class PopupEditarWeekComponent implements OnInit {

  editWeekForm: FormGroup;
  weekDays: string[];

  daysVisible: boolean = false;

  @Input()
  calendar: Calendar;

  calendarForm: CalendarForm;

  constructor(private calendarService: CalendarService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.calendarForm = new CalendarForm(this.calendar);
    this.editWeekForm = this.fb.group({
      // TODO: Form Controls here
      // theme: [null, Validators.required],
      startHour: [this.calendarForm.startHour, [Validators.required]],
      endHour: [this.calendarForm.endHour, Validators.required],
      days: [this.calendarForm.days, Validators.required]
    });

    this.weekDays = this.calendarService.getWeekDays();
  }

  toggleDays(): void {
    this.daysVisible = !this.daysVisible;
  }

  submitUpdate() {
    const value: ICalendarForm = this.editWeekForm.value;
    const result = this.calendarForm.convertToCalendar(value);
    console.log(result);
  }

}
