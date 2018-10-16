import { FirestoreserviceProvider } from './../../providers/firestoreservice/firestoreservice';
import { TranslateService } from "@ngx-translate/core";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the PreparePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-prepare",
  templateUrl: "prepare.html"
})
export class PreparePage {
  currentLang: any;
  normbe: any;

  number_alarm: any;
  size_alarm: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    public firebaseservice : FirestoreserviceProvider
  ) {
    this.currentLang = this.translate.currentLang;
    console.log("this is current lagn", this.currentLang);
    this.normbe = this.navParams.get("nombre");

    if (this.navParams.get("number") != null) {
      this.number_alarm = this.navParams.get("number");
      this.size_alarm = this.navParams.get("size");
    } else {
      this.getFirebaseData()
    }

  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PreparePage");
  }

  getFirebaseData() {
    this.firebaseservice.checkFavoriteStatus(this.normbe).then(res=>{
        this.number_alarm = res[0]['defaultnum']
        this.size_alarm = res[0]['defaultsignal']
    }).catch(er=>{

    })
  }

  onclickbackbutton() {
    this.navCtrl.pop();
  }

  onclickbuttons() {
    this.navCtrl.push("PreparealarmPage", { nombre: this.normbe, number : this.number_alarm, size : this.size_alarm });
  }
}
