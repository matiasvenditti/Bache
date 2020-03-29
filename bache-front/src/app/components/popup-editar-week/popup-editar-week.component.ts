import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-popup-editar-week',
  templateUrl: './popup-editar-week.component.html',
  styleUrls: ['./popup-editar-week.component.scss']
})
export class PopupEditarWeekComponent implements OnInit {

  editWeekForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}

