import { ComponentsModule } from './../../components/components.module';
import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddcommentsPage } from './addcomments';

@NgModule({
  declarations: [
    AddcommentsPage,
  ],
  imports: [
    IonicPageModule.forChild(AddcommentsPage),
    TranslateModule,
    ComponentsModule
  ],
})
export class AddcommentsPageModule {}
