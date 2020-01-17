import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { AES256 } from '@ionic-native/aes-256/ngx';
import { Platform } from '@ionic/angular';
declare var cordova: any;
import * as CryptoJS from 'crypto-js';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  email = "aperezsandid@gmail.com";
  password = "12345678";

  publicKey = "wd2yTcKPlW9qcXWiv8MhQ8rOGHjcrJuC";
  secureIV = "sfsdfsdfsdf12345";

  constructor(private service: AuthService, private platform: Platform) {
  }

  ngOnInit() {

  }

  login() {

    // [routerLink]="'/app'"

    let user = {
      email: (this.email),
      password: (this.password),
      time_zone: "Asia/Kolkata",
      role_id: "2"
    }

    console.log(user);

    this.service.login(this.service.encrypt(user));

  }

}
