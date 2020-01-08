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

  email = "";
  password = "";

  publicKey = "wd2yTcKPlW9qcXWiv8MhQ8rOGHjcrJuC";
  secureIV = "sfsdfsdfsdf12345";

  constructor(private service: AuthService, private platform: Platform) {
  }

  ngOnInit() {

  }

  login() {

    // [routerLink]="'/app'"

    let user = {
      email: this.encrypt(this.email),
      password: this.encrypt(this.password),
      time_zone: "mexico/monterrey",
      role_id: "2"
    }

    this.encrypt(user.email);
    console.log(user);

    this.service.login(user);

  }


  encrypt(data) {
    let _key = CryptoJS.enc.Utf8.parse(this.publicKey);
    let _iv = CryptoJS.enc.Utf8.parse(this.secureIV);
    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data), _key, {
        keySize: 16,
        iv: _iv,
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }

}
