import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {Calendar} from '../../model/calendar/Calendar';
import {CalendarForm, ICalendarForm} from '../../model/calendar/CalendarForm';
import { DAYS_OF_WEEK } from 'angular-calendar';
import { lastDayOfISOWeek } from 'date-fns/esm';


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
  errorHours: boolean = false;
  errorDays: boolean = false;

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

    //TODO: Implementar getWeekDays()
    this.weekDays = this.calendarService.getWeekDays();
  }

  toggleDays(): void {
    this.daysVisible = !this.daysVisible;
  }

  submitUpdate() {
    if(this.hoursOk() && this.daysOk()){
      const value: ICalendarForm = this.editWeekForm.value;
      const result = this.calendarForm.convertToCalendar(value);
      console.log(result);
    }
  }

  isChecked(day: string): boolean{
    let variable = false;
    this.calendarForm.days.forEach(element => {
      if (element.dayName == day) {variable = true;}
    });
    return variable;

  }

  clickCheckbox(checkbox: string):void{
    console.log(checkbox);
    console.log(document.getElementById(checkbox));
    var res = checkbox.substring(0,checkbox.length-1);
    console.log(res);
    //console.log(checkbox.value);
    // if (checkbox.checked == true){
    //   this.editWeekForm.value.days.add(checkbox.value);
    // } else {
    //   this.editWeekForm.value.days.remove(checkbox.value);
    // }
    console.log(this.editWeekForm.value.days);
  }

  hoursOk(){
    const value = this.editWeekForm.value;
    if (value.endHour < value.startHour){
      this.errorHours = true;
      return false;
    }
    this.errorHours = false;
    return true;
  }
  daysOk(){
    // var checkboxes = document.getElementsByName('check');
    // checkboxes.forEach((item) => {
    //   if (item.checked == true ) ;
    // })
    // console.log(checkboxes);
    return true;
  }

}
