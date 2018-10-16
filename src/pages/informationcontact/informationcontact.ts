import { EmailComposer } from '@ionic-native/email-composer';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from "ionic-angular";
import { TranslateService } from "@ngx-translate/core";

/**
 * Generated class for the InformationcontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-informationcontact",
  templateUrl: "informationcontact.html"
})
export class InformationcontactPage {
  subject: string;
  message: string;
  currentLang: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public translate: TranslateService,
    private toastCtrl: ToastController,
    public emailcomposer : EmailComposer
  ) {
    this.currentLang = this.translate.currentLang;
    this.message = "";
    this.subject = "";
  }

  onclickbuttons() {
    if (this.message == "" || this.subject == "") {
      this.notifyMessage("Tienes que escribir un asunto");
    } else {
      this.sendReportUserRequest();
    }
  }

  sendReportUserRequest() {
    let email = {
      to: [],
      cc: [],
      bcc: [],
      attachment: [],
      subject: this.subject,
      body: this.message
    };

    this.emailcomposer.addAlias("gmail", "com.google.android.gm");
    this.emailcomposer.addAlias("outlook", "com.microsoft.android.outlook");
    this.emailcomposer.open(email);

    this.emailcomposer
      .isAvailable()
      .then((available: boolean) => {
        console.log("this is available", available);
        if (available) {
          //Now we know we can send
          // Send a text message using default options
          this.emailcomposer.open(email);
        }
      })
      .catch(err => {
        console.log("====================================");
        console.log(err);
        console.log("====================================");
      });
  }

  onclickbackbutton(type) {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad InformationcontactPage");
  }

  notifyMessage(msg) {
    this.toastCtrl
      .create({
        message: msg,
        duration: 3000,
        cssClass: "mytoast",
        position: "top"
      })
      .present();
  }
}
