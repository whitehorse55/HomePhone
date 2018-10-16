import { MultiPickerModule } from 'ion-multi-picker';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RemediesDetailPage } from './remedies-detail';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RemediesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(RemediesDetailPage),
    TranslateModule,
    ComponentsModule,
    MultiPickerModule
  ],
})
export class RemediesDetailPageModule {}
