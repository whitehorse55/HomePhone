import { LoadingController, Loading, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {

  loading : Loading

  constructor(public http: HttpClient, private loadingCtrl : LoadingController, public toastCtrl : ToastController) {
    console.log('Hello LoadingProvider Provider');
  }

      ////////////// function : show progress view///////////////////
      showLoading() {

        return new Promise((resolve, reject)=>{
          this.loading = this.loadingCtrl.create({
            content: 'Please wait...',
            dismissOnPageChange: true
          });
          this.loading.present();
          resolve(true)
        })

      }

      removeLoading()
      {
        return new Promise((resolve, reject)=>{
          this.loading.dismiss().then(res=>{
            resolve(true)
          }).catch(e=>reject(e))
        })

      }

      showToastView(msg)
      {
        return new Promise((resolve, reject)=>{
            let toast = this.toastCtrl.create({
              message : msg,
              duration : 3000,
              position : 'top'
            })

            toast.present().then(res=>{
              resolve(res)
            }).catch(er=>{
              reject(er)
            })

        })


      }


}
