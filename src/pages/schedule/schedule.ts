import { LocalNotifications } from '@ionic-native/local-notifications';
import { PushnotificationProvider } from "./../../providers/pushnotification/pushnotification";
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController,
  Platform
} from "ionic-angular";

/**
 * Generated class for the SchedulePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-schedule",
  templateUrl: "schedule.html"
})
export class SchedulePage {
  mydata: string;
  isAndroid : boolean
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewctrl: ViewController,
    public notificationprovider: PushnotificationProvider,
    public localNotif : LocalNotifications,
    public platform : Platform
  ) {
    this.mydata = "";
    this.isAndroid = true
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SchedulePage");
  }

  onclickbuttons() {

    if(this.platform.is('android'))
    {
        this.isAndroid = true
    }else{
      this.isAndroid = false
    }

    this.localNotif.schedule({
      id: 1,
      text: 'SCHDULE TAKEN : ' + this.mydata,
      sound: this.isAndroid? 'assets/audio/beep.mp3': 'assets/audio/beep.mp3',
      data: { secret: "" }
    });

    this.notificationprovider
      .saveScheduletime(this.mydata)
      .then(res => {})
      .catch(er => {});
  }

  onclickcancelbutton() {
    console.log("clicked this");
    this.viewctrl.dismiss();
  }
}
