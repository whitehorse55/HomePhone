import { LoadingProvider } from "./../providers/loading/loading";
import { SmartAudioProvider } from "./../providers/smart-audio/smart-audio";
import { Component } from "@angular/core";
import { Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { TranslateService } from "@ngx-translate/core";
import { PushnotificationProvider } from "../providers/pushnotification/pushnotification";
import { tap } from "rxjs/operators";
import { NativeAudio } from "@ionic-native/native-audio";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  rootPage: any = "MainPage";
  // rootPage:any = 'SendfriendPage';

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    translate: TranslateService,
    public smartaudioProvider: SmartAudioProvider,
    public pushprovider: PushnotificationProvider,
    public loadingCtrl: LoadingProvider,
    public nativeaudio : NativeAudio
  ) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      translate.setDefaultLang("sp");
      statusBar.hide();
      splashScreen.hide();
      this.nativeaudio.preloadComplex("animation", "assets/audio/beep.mp3",  1, 1 , 0)
      // this.nativeaudio.preloadSimple("animation", "assets/audio/beep.mp3")
      this.pushprovider
        .listenToNotifications()
        .pipe(
          tap(msg => {
            // show a toast
            console.log("message arrived", msg);
            let message = msg.aps.alert["title"] + "\n" + msg.aps.alert["body"];
            this.loadingCtrl.showToastView(message);
          })
        )
        .subscribe(res => {
          console.log("this is res", res.aps.alert["body"]);
        });
    });
  }
}
