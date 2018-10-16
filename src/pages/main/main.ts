import { DataserviceProvider } from './../../providers/dataservice/dataservice';
import { LoadingProvider } from './../../providers/loading/loading';
import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public translate: TranslateService,
              public dataprovider : DataserviceProvider,
              public loadingprovider : LoadingProvider,
              public dataservice : DataserviceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

  onclickspainbutton() {
    this.translate.use('sp')
  }

  onclickenglishbutton() {
    this.translate.use('en')
  }

  onclickbuttons(type) {

    this.loadingprovider.showLoading()
    this.dataservice.getAllListData().then(result=>{
        this.gotoNextPage(type, result)
        this.loadingprovider.removeLoading()
    }).catch(er=>{
        this.loadingprovider.removeLoading()
    })


  }

  gotoNextPage(type, datalist)
  {
    switch (type) {
      case 'fa':
        this.navCtrl.push('FavoritePage',{datalist : datalist})
        break;

      case 're':
        this.navCtrl.push('RemediesPage',{datalist : datalist})
        break;

      case 'in':
        this.navCtrl.push('InformationPage',{datalist : datalist})
        break;

      default:
        break;
    }
  }
}
