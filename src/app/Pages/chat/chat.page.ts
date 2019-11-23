import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  constructor( public actionSheetController: ActionSheetController ) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Subir Archivos',
      buttons: [{
        text: 'Camara',
        icon: 'camera',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Foto o Video',
        icon: 'images',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Documento',
        icon: 'document',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancelar',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

}
