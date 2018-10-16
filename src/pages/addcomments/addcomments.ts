import { LoadingProvider } from './../../providers/loading/loading';
import { FirestoreserviceProvider } from './../../providers/firestoreservice/firestoreservice';
import { TranslateService } from "@ngx-translate/core";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the AddcommentsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-addcomments",
  templateUrl: "addcomments.html"
})
export class AddcommentsPage {
  passdata: any;
  currentLang: string;
  message: string;
  subject: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    public firestoreservice : FirestoreserviceProvider,
    public loadingCtrl : LoadingProvider
  ) {
    this.message = ''
    this.passdata = this.navParams.get("data");
    this.currentLang = this.translate.currentLang;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad AddcommentsPage");
  }

  onclickbackbutton(info) {
    this.navCtrl.pop();
  }

  onclickbuttons() {
    if(this.message == '')
    {
      this.loadingCtrl.showToastView('Please fill comment info')
    }else{
      this.firestoreservice.saveComments(this.message, this.passdata).then(res=>{
        this.loadingCtrl.showToastView('success')
        this.message = ''
      })
    }

  }
}
