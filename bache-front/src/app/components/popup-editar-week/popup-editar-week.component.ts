import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {CalendarService} from '../../services/calendar.service';
import {state, trigger, style, transition, animate} from '@angular/animations';


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

  constructor(private calendarService: CalendarService, private fb: FormBuilder) {
    this.editWeekForm = this.fb.group({
      // TODO: Form Controls here
    });
  }

  ngOnInit(): void {
    this.weekDays = this.calendarService.getWeekDays();
  }

  toggleDays(): void {
    this.daysVisible = !this.daysVisible;
  }

}

