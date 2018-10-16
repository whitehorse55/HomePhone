import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InformationcontactPage } from './informationcontact';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    InformationcontactPage,
  ],
  imports: [
    IonicPageModule.forChild(InformationcontactPage),
    ComponentsModule,
    TranslateModule
  ],
})
export class InformationcontactPageModule {}
