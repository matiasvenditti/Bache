import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/User';

@Component({
  selector: 'app-user-columna-izq',
  templateUrl: './user-columna-izq.component.html',
  styleUrls: ['./user-columna-izq.component.scss']
})
export class UserColumnaIzqComponent implements OnInit {

  @Input()
  user: User;

  @Input()
  amistad: String;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(["/home"]);
  }
}

