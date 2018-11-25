
import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { first } from 'rxjs/operators';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthService {

  constructor(private auth:AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }
  isLoggedIn() {
    return this.auth.authState.pipe(first());
 }
 getAuthenticatedUser(){
   return this.auth.authState;
 }
  async createUserWithEmailAndPassword(account:account){
    try{
      return <LoginResponse>{
       result: await this.auth.auth.createUserWithEmailAndPassword(account.email,account.password)
  
      }
    }
   
    
  catch(e){
           
    return <LoginResponse>{
      error:e 
    };

}
  }

async signInWithEmailAndPassword(account:account){
  try{
  
    return <LoginResponse>{
      result: await this.auth.auth.signInWithEmailAndPassword(account.email,account.password)
    }

  }

  catch(e){
           
           return <LoginResponse>{
             error:e 
           };

  }
}
signout(){
  this.auth.auth.signOut();
}
}
