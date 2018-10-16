import { ComponentsModule } from './../../components/components.module';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OpenPage } from './open';

@NgModule({
  declarations: [
    OpenPage,
  ],
  imports: [
    IonicPageModule.forChild(OpenPage),
    ComponentsModule
  ],
})
export class OpenPageModule {}
