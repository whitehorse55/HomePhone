import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataserviceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DataserviceProvider Provider');
  }

  getAllListData()
  {
    return new Promise((resolve, reject)=>{
      this.http.get('assets/data/data.json').subscribe(result=>{
          resolve(result)
      }, err=>{
          reject(err)
      })
    })
  }

}
