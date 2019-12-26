import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { AES256 } from '@ionic-native/aes-256/ngx';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  publicKey = "wd2yTcKPlW9qcXWiv8MhQ8rOGHjcrJuC";
  secureIV = "sfsdfsdfsdf12345";

  private url = "https://test.mindhelp.mx/api/v1/";

  constructor(private http: HttpClient, public alertController: AlertController, private aes256: AES256) {}

  login(user) {
    let url = `${this.url}app_login`;
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
    this.aes256.encrypt(this.publicKey, this.secureIV, 'testdata')
      .then(res => console.log('Encrypted Data: ', res))
      .catch((error: any) => console.error(error));
  }

  desencrypt() {

    this.aes256.decrypt(this.publicKey, this.secureIV, 'encryptedData')
      .then(res => console.log('Decrypted Data : ', res))
      .catch((error: any) => console.error(error));
  }

}
