
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

/*
  Generated class for the FirestoreserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirestoreserviceProvider {

  constructor(public http: HttpClient, public firestore : AngularFirestore) {
    console.log('Hello FirestoreserviceProvider Provider');
  }




  public getFavoriteList()
  {
    return new Promise((resolve,reject)=>{
      this.firestore.collection('favorite').valueChanges().subscribe(res=>{
        console.log("this is re", res)
        if(res.length > 0)
        {
          resolve(res)
        }else{
          reject(false)
        }

    }, er=>{
      reject(er)
    })
    })
  }

  public removeFavoriteFromList(key)
  {
    return new Promise((resolve,reject)=>{
      this.firestore.collection('favorite').doc(key).delete().then(res=>{
        resolve(true)
      }).catch(er=>{
        reject(er)
      })
    })
  }

  public saveFavoriteInfo(info)
  {
    return new Promise((resolve, reject)=>{
      let autokey = this.firestore.createId()
      let myinfo = {name : info['name'], defaultnum :info['defaultnum'], defaultsignal : info['defaultsignal'], key : autokey}
      this.firestore.collection('favorite').doc(autokey).set(myinfo).then(result=>{
        resolve(true)
      }).catch(err=>{
        reject(err)
      })
    })
  }

  public checkFavoriteStatus(name)
  {
    return new Promise((resolve, reject)=>{
      this.firestore.collection('favorite', res=> res.where('name','==', name)).valueChanges().subscribe(res=>{
          console.log("this is res =>", res)
          if(res.length > 0)
          {
            resolve(res)
          }else{
            reject(false)
          }

      }, er=>{
        reject(er)
      })
    })
  }

  public saveComments(comment, info)
  {
    console.log("this is test", comment, info);
      return new Promise((resolve, reject)=>{
        let mycolletion = this.firestore.collection('favorite', res=> res.where('name','==', info['name'])).doc(info['key'])
        mycolletion.ref.get().then(data=>{
            console.log("this is data",data)
            if(data.data()['comment'] == null){
                let data = []
                data.push(comment)
                mycolletion.update({comment : data})
            }else{

                let tempdata = data.data()['comment']
                tempdata.push(comment)
                mycolletion.update({comment : tempdata})
            }

            resolve(true)
        }).catch(er=>{
          reject(er)
        })
      })
  }

  public getComments(name)
  {
    return new Promise((resolve,reject)=>{
      this.firestore.collection('favorite', res=> res.where('name','==', name)).valueChanges().subscribe(res=>{
        console.log("this is res =>", res)
        if(res.length > 0)
        {
          resolve(res[0]['comment'])
        }else{
          reject(false)
        }

    }, er=>{
      reject(er)
    })
    })
  }

}
