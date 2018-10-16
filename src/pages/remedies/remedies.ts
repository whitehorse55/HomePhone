import { LoadingProvider } from './../../providers/loading/loading';
import { DataserviceProvider } from './../../providers/dataservice/dataservice';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, Loading } from 'ionic-angular';

/**
 * Generated class for the RemediesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remedies',
  templateUrl: 'remedies.html',
})
export class RemediesPage {

  datainfo : any
  datainfo_temp : any


  constructor(public navCtrl: NavController, public navParams: NavParams, public dataservice : DataserviceProvider, public loadingprovider : LoadingProvider) {
    this.datainfo = []
    this.datainfo_temp = []
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad RemediesPage');
    this.datainfo = this.navParams.get('datalist')
    this.datainfo_temp = this.navParams.get('datalist')
  }

  onclickbackbutton(type)
  {
    this.navCtrl.pop()
  }

  oninputserach(key)
  {
    console.log("this is keyinfo", key)
    if(key == '')
    {
      this.datainfo.push(...this.datainfo_temp)
    }else{
      console.log("this is keyinfo", this.datainfo)
      this.datainfo = this.datainfo_temp.filter(elem=> elem.nombre.toLowerCase().indexOf(key.toLowerCase()) > -1 )
      console.log("this is keyinfo", this.datainfo)
    }

  }

  onclickitem(index)
  {
    console.log("this is indexinfo", index)
    let iteminfo = this.datainfo[index]
    this.navCtrl.push('RemediesDetailPage',{iteminfo : iteminfo, type : 're'})
  }
}
