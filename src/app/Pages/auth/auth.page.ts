import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  email = "";
  password = "";

  constructor(private service: AuthService) {
  }

  ngOnInit() {

  }

  login() {

    // [routerLink]="'/app'"

    let user = {
      email: this.email,
      password: this.password,
      time_zone: "mexico/monterrey",
      role_id: "2"
    }
    this.service.encrypt(user.email);
    console.log(user);

    this.service.login(user);

  }

}
