import { LoadingProvider } from './../../providers/loading/loading';
import { FirestoreserviceProvider } from "./../../providers/firestoreservice/firestoreservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the OpenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-open",
  templateUrl: "open.html"
})
export class OpenPage {
  passdata: any;
  datainfo: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestoreprovider: FirestoreserviceProvider,
    public loadingCtrl : LoadingProvider
  ) {
    this.passdata = this.navParams.get("data");
    this.datainfo = this.passdata['comment']
   this.getAllCommentsData()
  }


  getAllCommentsData() {
    console.log("this is padd", this.passdata)
    this.firestoreprovider
      .getComments(this.passdata["name"])
      .then(res => {
        this.datainfo = res;
      })
      .catch(er => {
        this.loadingCtrl.showToastView('Not exist Comment inf.')
      });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad OpenPage");
  }

  onclickbackbutton() {
    this.navCtrl.pop();
  }
}
