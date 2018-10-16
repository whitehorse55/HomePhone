import { FIREBASE_CONFIG } from './app.firebase.config';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataserviceProvider } from '../providers/dataservice/dataservice';
import { LoadingProvider } from '../providers/loading/loading';
import { LocalstorageProvider } from '../providers/localstorage/localstorage';
import { MultiPickerModule } from 'ion-multi-picker';
import { NativeAudio } from '@ionic-native/native-audio';
import { SmartAudioProvider } from '../providers/smart-audio/smart-audio';
import { EmailComposer } from '@ionic-native/email-composer';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from '@angular/fire';
import { FirestoreserviceProvider } from '../providers/firestoreservice/firestoreservice';
import { PushnotificationProvider } from '../providers/pushnotification/pushnotification';
import { Firebase } from '@ionic-native/firebase';
import { LocalNotifications } from '@ionic-native/local-notifications';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    MultiPickerModule,

    // angularJS module
    ///////////////////firebase related imports////////////
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireDatabaseModule,

    TranslateModule.forRoot({
      loader: {
       provide: TranslateLoader,
       useFactory: (setTranslateLoader),
       deps: [HttpClient]
     }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataserviceProvider,
    LoadingProvider,
    LoadingProvider,
    LocalstorageProvider,
    NativeAudio,
    SmartAudioProvider,
    EmailComposer,
    FirestoreserviceProvider,
    PushnotificationProvider,
    LocalNotifications,
    Firebase
  ]
})
export class AppModule {}
export function setTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
 }
