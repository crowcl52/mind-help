import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController, Platform } from '@ionic/angular';
import * as CryptoJS from 'crypto-js';




@Injectable({
  providedIn: 'root'
})
export class AuthService {

  publicKey = "wd2yTcKPlW9qcXWiv8MhQ8rOGHjcrJuC";
  secureIV = "sfsdfsdfsdf12345";

  private url = "https://test.mindhelp.mx/api/v1/";

  constructor(private http: HttpClient, public alertController: AlertController, private platform: Platform) { }

  login(user) {
    let url = `${this.url}app_login`;
    this.http.post(url, user).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err.error.msg);
      this.presentAlert(err.error.msg);
    })
  }

  register(user){
    let url = `${this.url}register`;
    this.http.post(url, user).subscribe(data => {
      console.log(data)
    }, err => {
      console.log(err.error.msg);
      this.presentAlert(err.error.msg);
    })
  }

  async presentAlert(msg) {
    const alert = await this.alertController.create({
      header: 'Error',
      subHeader: '',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

  encrypt(data) {
    let _key = CryptoJS.enc.Utf8.parse(this.publicKey);
    let _iv = CryptoJS.enc.Utf8.parse(this.secureIV);

    let encrypted = CryptoJS.AES.encrypt(
      JSON.stringify(data), _key, {
        keySize: 128,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      });
    return encrypted.toString();
  }

  decrypt(data) {
    let _key = CryptoJS.enc.Utf8.parse(this.publicKey);
    let _iv = CryptoJS.enc.Utf8.parse(this.secureIV);

    let decrypted = CryptoJS.AES.decrypt(
     data, _key, {
        keySize: 128,
        iv: _iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8)
    return decrypted;
  }


}
