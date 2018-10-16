import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationdetailPage } from './informationdetail';

@NgModule({
  declarations: [
    InformationdetailPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationdetailPage),
    TranslateModule
  ],
})
export class InformationdetailPageModule {}
