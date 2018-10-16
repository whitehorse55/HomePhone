import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendfriendPage } from './sendfriend';

@NgModule({
  declarations: [
    SendfriendPage,
  ],
  imports: [
    IonicPageModule.forChild(SendfriendPage),
    TranslateModule
  ],
})
export class SendfriendPageModule {}
