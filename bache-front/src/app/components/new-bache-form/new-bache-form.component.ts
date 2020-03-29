import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';


@Component({
  selector: 'app-new-bache-form',
  templateUrl: './new-bache-form.component.html',
  styleUrls: ['./new-bache-form.component.scss']
})
export class NewBacheFormComponent implements OnInit {

  newBacheForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
