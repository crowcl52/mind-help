import { Component, OnInit } from '@angular/core';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { IOSFilePicker } from '@ionic-native/file-picker/ngx';

import { ToastController } from '@ionic/angular';



@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {

  categorias = [
    { id: 1, value: 'Ansiedad' },
    { id: 2, value: 'Deprecion' },
    { id: 3, value: 'Dolor Cronico' },
    { id: 4, value: 'Insomnio' },
    { id: 5, value: 'Addicciones' },
    { id: 6, value: 'Familiares' },
    { id: 7, value: 'Parejas' },
    { id: 8, value: 'Deportes' },
  ]

  constructor(
    private fileOpener: FileOpener,
    private filePicker: IOSFilePicker,
    public toastController: ToastController
  ) { }

  ngOnInit() {
  }

  openFile() {
    this.presentToast();
    this.filePicker.pickFile()
      .then(uri => console.log(uri))
      .catch(err => console.log('Error', err));
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Your settings have been saved.',
      duration: 2000
    });
    toast.present();
  }

}
