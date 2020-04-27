import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';


@Component({
  selector: 'app-columna-izq',
  templateUrl: './columna-izq.component.html',
  styleUrls: ['./columna-izq.component.scss']
})
export class ColumnaIzqComponent implements OnInit {

  @Input()
  user: User;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {}

  onLogout() {
    this.auth.logout();
    this.router.navigate(["/login"]);
  }

}
