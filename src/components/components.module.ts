import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { CustomheaderComponent } from './customheader/customheader';
import { BottombarComponent } from './bottombar/bottombar';
import { SearchbarComponent } from './searchbar/searchbar';
import { CustomitemComponent } from './customitem/customitem';
import { InformationComponent } from './information/information';
@NgModule({
	declarations: [CustomheaderComponent,
    BottombarComponent,
    SearchbarComponent,
    CustomitemComponent,
    InformationComponent],
	imports: [IonicModule, TranslateModule],
	exports: [CustomheaderComponent,
    BottombarComponent,
    SearchbarComponent,
    CustomitemComponent,
    InformationComponent]
})
export class ComponentsModule {}
