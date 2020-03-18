import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

  isLogin: boolean = true;
  isRegister: boolean = false;
  myUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserByEmail(localStorage.getItem("email")).subscribe((user : User) => {
      this.myUser = user;
    });
  } 

  onDisplayLogin(): void {
    this.isLogin = true;
    this.isRegister = false;
  }

  onDisplayRegister(): void {
    this.isLogin = false;
    this.isRegister = true;
  }

}
