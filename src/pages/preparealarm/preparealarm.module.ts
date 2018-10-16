import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreparealarmPage } from './preparealarm';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    PreparealarmPage,
  ],
  imports: [
    IonicPageModule.forChild(PreparealarmPage),
    TranslateModule,
    ComponentsModule
  ],
})
export class PreparealarmPageModule {}
