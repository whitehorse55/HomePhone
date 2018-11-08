import { LoadingProvider } from './../../providers/loading/loading';
import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ViewController
} from "ionic-angular";
import { EmailComposer } from "@ionic-native/email-composer";

/**
 * Generated class for the SendfriendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sendfriend",
  templateUrl: "sendfriend.html"
})
export class SendfriendPage {
  public mytitle: string;
  public myfriend: string;
  public mycontent: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public emailcomposer : EmailComposer,
    public loadingCtrl : LoadingProvider
  ) {
    this.mytitle = ''
    this.mycontent = ''
    let nombre = this.navParams.get("nombre");
    this.myfriend =
      "Te remito este interesante remedio: " + nombre;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SendfriendPage");
  }

  validate()
  {
    console.log("clicked validata function")
    if(this.mytitle == '' && this.mycontent == '' && this.myfriend == '')
    {
      this.loadingCtrl.showToastView('Please fill content')
    }else{
      this.sendReportUserRequest()
    }
  }

  sendReportUserRequest() {

    let email = {
      to: [],
      cc: [],
      bcc: [],
      attachment: [],
      subject: "Report Content",
      body:this.myfriend
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


  onclickcancelbutton() {
    this.viewCtrl.dismiss();
  }
}
