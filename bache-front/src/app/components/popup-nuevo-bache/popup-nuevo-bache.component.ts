import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-popup-nuevo-bache',
  templateUrl: './popup-nuevo-bache.component.html',
  styleUrls: ['./popup-nuevo-bache.component.scss']
})
export class PopupNuevoBacheComponent implements OnInit {

  isBache: boolean = true;
  isActividad: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  onDisplayLogin(): void {
    this.isBache = true;
    this.isActividad = false;
  }

  onDisplayRegister(): void {
    this.isBache = false;
    this.isActividad = true;
  }


}
