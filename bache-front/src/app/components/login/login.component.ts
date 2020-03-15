import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { JwtToken } from 'src/app/model/JwtToken';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onLogin() {
    this.auth.login(this.loginForm.value).subscribe((response: JwtToken) => {
      localStorage.setItem("token", response.token);
      this.router.navigate(["/home"]);
    });
  }

  isTouched(formControl: string): boolean {
    const control: AbstractControl = this.loginForm.get(formControl);
    return control.invalid && (control.dirty || control.touched);
  }

}
