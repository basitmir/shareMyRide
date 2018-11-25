
import { Injectable } from '@angular/core';
import {AngularFireDatabase,AngularFireObject, AngularFireList} from 'angularfire2/database';

//import * as firebase from 'firebase';
import {User} from 'firebase/app';
import { profile } from '../../models/profile/profile';
import "rxjs/add/operator/take";
import { take } from 'rxjs/operators';
//import { Observable } from  'rxjs/Observable';
//import { take } from 'rxjs/operators';
//import { take } from 'rxjs/operator/take';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {

   //profileObject :AngularFireObject<profile>
   profileObject : AngularFireObject<profile>
   profileList:AngularFireList<profile>
   

  constructor(private database: AngularFireDatabase) {
    console.log('Hello DataProvider Provider');
  }
searchUser(firstName:string){
//const query=this.database.list('/profiles')
const query=this.database.list('/profiles',ref=>ref.orderByChild('firstName').equalTo(firstName));
return query.valueChanges().pipe(take(1));
}

searchDestination(destination:string){
  const result=this.database.list('shareride-details',ref=>ref.orderByChild('destination').equalTo(destination));
  return result.valueChanges().pipe(take(1));
}


 getProfile(user:User){

  this.profileObject= this.database.object(`/profiles/${user.uid}`);
  return this.profileObject.valueChanges().pipe(take(1));

 }
  async saveProfile(user:User , profile: profile ){
         this.profileObject= this.database.object(`/profiles/${user.uid}`);

         try{
               await this.profileObject.set(profile);
               return true;
         }
         catch(e){
           console.error(e);
           return false;

         }
  }
}
