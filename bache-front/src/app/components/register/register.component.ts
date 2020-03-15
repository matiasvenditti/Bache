import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, Validators, FormControl, AbstractControl} from '@angular/forms';
import {User} from '../../model/User';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Credentials } from 'src/app/model/Credentials';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private auth: AuthService) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  onRegister() {
    this.userService.createUser(this.registerForm.value).subscribe((user: User) => {
      const loginCredentials: Credentials = {username: user.email, password: this.registerForm.value.password}
      this.auth.login(loginCredentials).subscribe(() => {
        this.router.navigate(['/home']);
      });
    });

  }

  isTouched(formControl: string): boolean {
    const control: AbstractControl = this.registerForm.get(formControl);
    return control.invalid && (control.dirty || control.touched);
  }

}
