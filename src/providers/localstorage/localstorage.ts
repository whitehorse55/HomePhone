import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the LocalstorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalstorageProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LocalstorageProvider Provider');
  }

  public saveUserInfo(info) {
    let temp = JSON.stringify(info)
    console.log("this is tempinfo==>", temp)
    window.localStorage.setItem('favoriteinfo', JSON.stringify(info));
  }

  public getUserinfo(){
    return new Promise((resolve, reject)=>{
      let fa_list = window.localStorage.getItem('favoriteinfo');
      let json_falist = JSON.parse(fa_list);
      if(json_falist == null && json_falist.length == 0)
      {
        reject(false)
      }else{
        resolve(json_falist)
      }
    })
  }

}
