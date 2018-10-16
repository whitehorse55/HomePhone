import { FirestoreserviceProvider } from './../../providers/firestoreservice/firestoreservice';
import { Favorite } from './../../Model/favorite';
import { LocalstorageProvider } from './../../providers/localstorage/localstorage';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoadingProvider } from '../../providers/loading/loading';

/**
 * Generated class for the RemediesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remedies-detail',
  templateUrl: 'remedies-detail.html',
})
export class RemediesDetailPage {

  passdata : any

  defaultnum : any
  defaultsignal : any

  dependentColumns : any
  dependentSignalColumns : any

  isFavorite = false

  type_info : string

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalcontroller : ModalController,
              public localstorage : LocalstorageProvider,
              public firestoreprovider : FirestoreserviceProvider,
              public loadingservice : LoadingProvider) {

    this.passdata = this.navParams.get('iteminfo')
    console.log("this is passdata")
    this.type_info = this.navParams.get('type')
    this.defaultnum = "4"
    this.defaultsignal = "X"
    this.isFavorite = false
    this.generateData()

  }

  private generateData()
  {
    this.dependentColumns = [
      {
        options: [
          { text: '4', value: '4' },
          { text: '5', value: '5' },
          { text: '6', value: '6' },
          { text: '7', value: '7' },
          { text: '8', value: '8' },
          { text: '9', value: '9' },
          { text: '10', value: '10' },
          { text: '11', value: '11' },
          { text: '12', value: '12' },
          { text: '13', value: '13' },
          { text: '14', value: '14' },
          { text: '15', value: '15' },
          { text: '16', value: '16' },
          { text: '17', value: '17' },
          { text: '18', value: '18' },
          { text: '19', value: '19' },
          { text: '20', value: '20' },
          { text: '21', value: '21' },
          { text: '22', value: '22' },
          { text: '23', value: '23' },
          { text: '24', value: '24' },
          { text: '25', value: '25' },
          { text: '26', value: '26' },
          { text: '27', value: '27' },
          { text: '28', value: '28' },
          { text: '29', value: '29' },
          { text: '30', value: '30' },
          { text: '31', value: '31'},
          { text: '32', value: '32' },
          { text: '33', value: '33' },
          { text: '34', value: '34' },
          { text: '35', value: '35' },
          { text: '36', value: '36' },
          { text: '37', value: '37' },
          { text: '38', value: '38' },
          { text: '39', value: '39' },
          { text: '40', value: '40' },
          { text: '41', value: '41' },
          { text: '42', value: '42' },
          { text: '43', value: '43' },
          { text: '44', value: '44' },
          { text: '45', value: '45' },
          { text: '46', value: '46' },
          { text: '47', value: '47' },
          { text: '48', value: '48' },
          { text: '49', value: '49' },
          { text: '50', value: '50' },
          { text: '60', value: '60' },
          { text: '70', value: '70' },
          { text: '80', value: '80' },
          { text: '90', value: '90' },
          { text: '100', value: '100' },
          { text: '200', value: '200' },
          { text: '300', value: '300' },
          { text: '400', value: '400' },
          { text: '500', value: '500' },
          { text: '600', value: '600' },
          { text: '700', value: '700' },
          { text: '800', value: '800' },
          { text: '900', value: '900' },
          { text: '1000', value: '1000' },
          { text: '2000', value: '2000' },
          { text: '3000', value: '3000' },
          { text: '4000', value: '4000' },
          { text: '5000', value: '5000' },
          { text: '6000', value: '6000'},
          { text: '7000', value: '7000' },
          { text: '8000', value: '8000' },
          { text: '9000', value: '9000' },
          { text: '10000', value: '10000' },
          { text: '20000', value: '20000' },
          { text: '30000', value: '30000' },
          { text: '40000', value: '40000' },
          { text: '50000', value: '50000' },
          { text: '60000', value: '60000' },
          { text: '70000', value: '70000' },
          { text: '80000', value: '80000' },
          { text: '90000', value: '90000' },
          { text: '100000', value: '100000' },
        ]
      }];

      this.dependentSignalColumns = [
        {
          options: [
            { text: 'X', value: 'X' },
            { text: 'DH', value: 'DH' },
            { text: 'C', value: 'C' },
            { text: 'CH', value: 'CH' },
            { text: 'K', value: 'K' },
            { text: 'LM', value: 'LM' },

          ]
        }];
  }

  ionViewDidLoad() {
    this.firestoreprovider.checkFavoriteStatus(this.passdata['nombre']).then(result=>{
        this.isFavorite = true
    }).catch(er=>{

    })

    console.log('ionViewDidLoad RemediesDetailPage');
  }

  onclickbackbutton(key)
  {
    this.navCtrl.pop()
  }

  onclickbuttons(type)
  {
    switch (type) {
      case 'pre':
        console.log("this is temp", this.type_info, this.passdata)
        if(this.type_info == 're')
        {
          this.navCtrl.push('PreparePage', {nombre : this.passdata.nombre, number :  this.defaultnum, size : this.defaultsignal})
        }else{
          this.navCtrl.push('PreparePage', {nombre : this.passdata.name})
        }

        break;

      case 'add':
        // this.navCtrl.push('RemediesPage')
        if(!this.isFavorite)
        {
          this.saveFavoriteInfo()
        }

        break;

      case 'sch':
        let modal = this.modalcontroller.create('SchedulePage', {nombre : this.passdata.nombre})
        modal.present()
        // this.navCtrl.push('SchedulePage', {nombre : this.passdata.nombre})
        break;

      case 'sen':
        let modal1 = this.modalcontroller.create('SendfriendPage', {nombre : this.passdata.nombre})
        modal1.present()
        // this.navCtrl.push('InformationPage')
        break;

        case 'addcom':
        // let modal2 = this.modalcontroller.create('AddcommentsPage', {nombre : this.passdata.nombre})
        // modal2.present()
        console.log("this si ", this.passdata['name'])
        this.navCtrl.push('AddcommentsPage', {data : this.passdata})
        break;

        case 'opencom':
        // let modal1 = this.modalcontroller.create('SendfriendPage', {nombre : this.passdata.nombre})
        // modal1.present()
        this.navCtrl.push('OpenPage', {data : this.passdata})
        break;

      default:
        break;
    }
  }

  saveFavoriteInfo()
  {
      let info = {name : this.passdata['nombre'], defaultnum : this.defaultnum, defaultsignal : this.defaultsignal}
      this.firestoreprovider.saveFavoriteInfo(info).then(result=>{
          this.loadingservice.showToastView('success')
          this.isFavorite = true
      }).catch(er=>{
        this.loadingservice.showToastView(er)
      })

  }

  onclickFavoriteButton()
  {

    if(this.type_info == 'fa')
    {
      console.log("onclicked fa button",this.passdata['key'])
      this.firestoreprovider.removeFavoriteFromList(this.passdata['key']).then(res=>{
        this.navCtrl.pop()
      }).catch(er=>{
        this.loadingservice.showToastView(er)
      })
    }
  }

}
