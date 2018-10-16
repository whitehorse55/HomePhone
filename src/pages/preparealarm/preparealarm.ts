import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from './../../providers/smart-audio/smart-audio';
import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { LoadingProvider } from "../../providers/loading/loading";

/**
 * Generated class for the PreparealarmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-preparealarm",
  templateUrl: "preparealarm.html"
})
export class PreparealarmPage {
  normbe: any;
  number_alarm : any
  size_alarm : any

  isAlarm : boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCrl: LoadingProvider,
    public smartaudioProvider : SmartAudioProvider,
    public nativeaudio : NativeAudio
  ) {
    this.normbe = this.navParams.get("nombre");
    this.number_alarm = this.navParams.get('number')
    this.size_alarm = this.navParams.get('size')
    this.isAlarm = true

    console.log("this is test info=>", this.normbe, this.number_alarm, this.size_alarm)
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad PreparealarmPage");
  }

  ionViewWillEnter(){
    setTimeout(() => {
      this.isAlarm = false
      this.nativeaudio.play('animation')
      this.loadingCrl.showToastView("Done");
    // this.navCtrl.pop()
  }, 5000);
  }

  onclickbackbutton(info)
  {
    this.navCtrl.pop();
  }
}
