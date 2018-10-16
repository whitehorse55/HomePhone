import { Constant } from './../../Constant/Constant';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TranslateService } from '@ngx-translate/core';

/**
 * Generated class for the InformationdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informationdetail',
  templateUrl: 'informationdetail.html',
})
export class InformationdetailPage {

  // type : string
  content: string
  currentLang : string

  constructor(public navCtrl: NavController, public navParams: NavParams, public translate : TranslateService) {
    let type = this.navParams.get('content')

    this.currentLang  = this.translate.currentLang


    switch (type) {
      case 'help':

      if(this.currentLang == 'en')
      {
        this.content = Constant.CONTENT_HELP_EN
      }else{
        this.content = Constant.CONTENT_HELP_SP
      }

        console.log("this istete", this.content)
        break;

      case 'about':
      if(this.currentLang == 'en')
      {
        this.content = Constant.CONTENT_ABOUT_EN
      }else{
        this.content = Constant.CONTENT_ABOUT_SP
      }

        break;

      case 'legacy':
      if(this.currentLang == 'en')
      {
        this.content = Constant.CONTENT_LEGY_EN
      }else{
        this.content = Constant.CONTENT_LEGY_SP
      }
        break;

      case 'contact':

        break;

      default:
        break
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationdetailPage');
  }

  onclickbackbutton()
  {
    this.navCtrl.pop()
  }
}
