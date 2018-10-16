import { Platform } from "ionic-angular";
import { NativeAudio } from "@ionic-native/native-audio";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

/*
  Generated class for the SmartAudioProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SmartAudioProvider {
  audioType: string = "html5";
  sounds: any = [];

  constructor(
    public http: HttpClient,
    public natvieAudio: NativeAudio,
    public platform: Platform
  ) {
    console.log("Hello SmartAudioProvider Provider");
    if (platform.is("cordova")) {
      this.audioType = "native";
    }
    this.audioType = "native";
  }

  preload(key, asset) {
    return new Promise((resolve, reject)=>{
      let audio = {
        key: key,
        asset: asset,
        type: "native"
      };

      this.sounds.push(audio);

      resolve(true)
    })
    // if(this.audioType === 'html5'){

    //     let audio = {
    //         key: key,
    //         asset: asset,
    //         type: 'html5'
    //     };

    //     this.sounds.push(audio);

    // } else {

    //     this.natvieAudio.preloadSimple(key, asset);

    //     let audio = {
    //         key: key,
    //         asset: key,
    //         type: 'native'
    //     };

    //     this.sounds.push(audio);
    // }


  }

  play(key) {

    console.log("this is keyinfo", key);
    this.natvieAudio.play(key).then(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      }
    );
  }
}
