import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public actionSheetController: ActionSheetController ) {}

  async declinePatient() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Why are you decline this request',
      buttons: [ {
        text: 'My patient and I couldn’t connect',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'My patient asked me to cancel',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Patient no-show',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Im not available',
        handler: () => {
          console.log('Favorite clicked');
        }
      },{
        text: 'Cancel',
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
