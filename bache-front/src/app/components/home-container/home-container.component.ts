import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.scss']
})
export class HomeContainerComponent implements OnInit {

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
