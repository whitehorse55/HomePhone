import { AngularFirestore } from 'angularfire2/firestore';
import { Platform } from 'ionic-angular';
// import { Firebase } from "@ionic-native/firebase";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';

/*
  Generated class for the PushnotificationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PushnotificationProvider {

  constructor(public http: HttpClient, public platfrom : Platform, public afs : AngularFirestore, public firebaseNative : Firebase) {
    console.log('Hello PushnotificationProvider Provider');
  }


  listenToNotifications()
  {
    return this.firebaseNative.onNotificationOpen()
  }

  saveScheduletime(time)
  {
    return new Promise((resolve, reject)=>{

      const notiData = {
        content : time
      }
      this.afs.collection('Notification').add(notiData)
    })
  }

  // async getToken(username)
  // {
  //    let token = "" ;
  //     if(this.platfrom.is('android'))
  //     {

  //       token = await this.firebaseNative.getToken()
  //       console.log("this is android device", token);
  //     }

  //     if(this.platfrom.is('ios'))
  //     {
  //       console.log("this is ios device");
  //       token = await this.firebaseNative.getToken()
  //       await this.firebaseNative.grantPermission()
  //     }

  //     console.log("this is token info", token);

  //     return this.saveTokenToFirestore(token, username)
  // }

  // private saveTokenToFirestore(token, username)
  // {
  //     if(!token) return

  //     const deviceRef = this.afs.collection('token')

  //     const docData = {
  //       tokeninfo : token,
  //       username : username
  //     }
  //     console.log("this is docdata info", docData);
  //     return deviceRef.doc(username).set(docData)
  // }


}
