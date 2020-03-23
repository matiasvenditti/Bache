import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/User';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})
export class UserContainerComponent implements OnInit {

//Lineas momentaneas                //No vaaaa
  isFriend: boolean = true;         //No vaaaa
  isntFriend: boolean = false;      //No vaaaa
//Tereminan lineas momentaneas      //No vaaaa

  //myUser: User;
  anotherUser = {
    name: 'Nombre',
    surname: 'Amigo',
  }    
  amistad: String;



  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.amistad = 'Amigo';
  }


//Lineas momentaneas                //No vaaaa
  onDisplayFriend(): void {         //No vaaaa
    this.anotherUser.name = 'Nombre';
    this.anotherUser.surname = 'Amigo';
    this.amistad = 'Amigos';
    this.isFriend = true;           //No vaaaa
    this.isntFriend = false;        //No vaaaa
  }                                 //No vaaaa
                                    //No vaaaa
  onDisplayIsntFriend(): void {     //No vaaaa
    this.anotherUser.name = 'Usuario';
    this.anotherUser.surname = 'no Amigo';
    this.amistad = 'Agregar amigo';
    this.isFriend = false;          //No vaaaa
    this.isntFriend = true;         //No vaaaa
  }                                 //No vaaaa
//Terminan lineas momentaneas       //No vaaaa

}
