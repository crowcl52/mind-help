import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBackComponent } from './header-back/header-back.component';
import { HeaderOnliComponent } from './header-onli/header-onli.component';
import { HeaderNotificationComponent } from './header-notification/header-notification.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderBackComponent,
    HeaderOnliComponent,
    HeaderNotificationComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    HeaderBackComponent,
    HeaderOnliComponent,
    HeaderNotificationComponent
  ]
})
export class ComponentsModule { }
