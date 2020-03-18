import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-columna-izq',
  templateUrl: './columna-izq.component.html',
  styleUrls: ['./columna-izq.component.scss']
})
export class ColumnaIzqComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }

}
