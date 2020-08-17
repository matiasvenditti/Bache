import {Day} from '../Day';
import {Calendar} from './Calendar';

export interface ICalendarForm {
  days: Day[];
  startHour: string;
  endHour: string;
}

export interface ICalendarParser {
  parseNumberToTime(timeNumber: number): string;
  parseTimeToNumber(time: string): number;
  convertToCalendar(parse: ICalendarForm): Calendar;
}

export class CalendarForm implements ICalendarForm, ICalendarParser {
  days: Day[];
  startHour: string;
  endHour: string;
  constructor(calendar: Calendar) {
    this.days = calendar.days;
    this.startHour = this.parseNumberToTime(calendar.startHour);
    this.endHour = this.parseNumberToTime(calendar.endHour);
  }

  parseNumberToTime(timeNumber: number): string {
    const hours = Math.floor(timeNumber);
    const minutes = timeNumber % 1;
    const hour1 = Math.floor(hours / 10);
    const hour2 = Math.floor(hours % 10);
    const minutes1 = Math.floor(minutes / 10);
    const minutes2 = Math.floor(minutes % 10);
    return `${hour1}${hour2}:${minutes1}${minutes2}`;
  }

  parseTimeToNumber(time: string): number {
    const hours = +time.substring(0, 2);
    const minutes = (+time.substring(3, 5)) / 60;
    return hours + minutes;
  }

  convertToCalendar(parse: ICalendarForm): Calendar {
    const startHour = this.parseTimeToNumber(parse.startHour);
    const endHour = this.parseTimeToNumber(parse.endHour);
    return new Calendar(parse.days, startHour, endHour);
  }
}
