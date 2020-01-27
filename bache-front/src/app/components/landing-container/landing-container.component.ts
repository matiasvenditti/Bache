import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-container',
  templateUrl: './landing-container.component.html',
  styleUrls: ['./landing-container.component.scss']
})
export class LandingContainerComponent implements OnInit {

  isLogin: boolean = true;
  isRegister: boolean = false;

  constructor() { }

  ngOnInit() {
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
