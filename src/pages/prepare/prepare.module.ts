import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreparePage } from './prepare';

@NgModule({
  declarations: [
    PreparePage,
  ],
  imports: [
    IonicPageModule.forChild(PreparePage),
    TranslateModule
  ],
})
export class PreparePageModule {}
