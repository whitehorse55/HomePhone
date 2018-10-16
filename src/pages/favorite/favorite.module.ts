import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritePage),
    ComponentsModule
  ],
})
export class FavoritePageModule {}
