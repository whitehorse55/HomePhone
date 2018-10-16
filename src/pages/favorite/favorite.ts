import { LoadingProvider } from './../../providers/loading/loading';
import { FirestoreserviceProvider } from "./../../providers/firestoreservice/firestoreservice";
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-favorite",
  templateUrl: "favorite.html"
})
export class FavoritePage {
  datainfo: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public firestoreserice: FirestoreserviceProvider,
    public loadingCtrl : LoadingProvider
  ) {
  }


  ionViewWillEnter(){
    console.log("this is view will tetnere")
    this.datainfo = []
    this.getFavoriteData();
  }

  ionViewDidLoad() {

    console.log("ionViewDidLoad FavoritePage");
  }

  oninputserach(key) {}

  onclickbackbutton(info) {
    this.navCtrl.pop();
  }

  getFavoriteData() {
    this.firestoreserice
      .getFavoriteList()
      .then((res : any[]) => {
        this.datainfo.push(...res);
        console.log("this is get res =>", this.datainfo)
      })
      .catch(er => {
        this.loadingCtrl.showToastView("Don't have Favorite info")
      });
  }

  onclickitem(index)
  {
    let iteminfo = this.datainfo[index]
    console.log("this is getdfdf res =>", iteminfo)
    this.navCtrl.push('RemediesDetailPage',{iteminfo : iteminfo, type : 'fa'})
  }
}
