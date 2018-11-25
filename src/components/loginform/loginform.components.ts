import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController} from 'ionic-angular';
//import { SignupPage } from '../signup/signup';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { account } from '../../models/account/account.interface';
import { LoginResponse } from '../../models/login/login-response.interface';
import { AuthService } from '../../providers/auth/auth.service';
//import { AuthService } from '../../providers/auth/auth.service';
/**
 * Generated class for the LoginformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'loginform',
  templateUrl: 'loginform.components.html'
})
export class LoginformComponent {
  
  @Output() loginStatus: EventEmitter<LoginResponse>;
  account ={} as account;
  submitAttempt:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private auth:AuthService,private loadcntrl:LoadingController
    ,private alertcntrl:AlertController) {
    
      this.loginStatus =new EventEmitter <LoginResponse>();
           
    }

  //ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  //}
signinform=new FormGroup({
email:new FormControl('',([Validators.required,Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$')])),
password:new FormControl('',([Validators.required,Validators.minLength(8)]))

});
 onsigninform(signinform:any){
   console.log(signinform.value);
 }
get email(){
  return this.signinform.get('email');
}
get password(){
  return this.signinform.get('password');
}


  /*onGoTo(){
     const loading= this.loadcntrl.create({
       spinner:'bubbles',
       content:'Signing you in...'
     });
     loading.present();

    if(this.signinform.valid){
      this.navCtrl.push('TabsPage');
      loading.dismiss();
     this.authServices.signin(this.email.value, this.password.value)
      .then(sucess => {
           loading.dismiss();
           //this.navCtrl.push(TabsPage);
          })
      .catch(error => {
        loading.dismiss();
        const alert= this.alertcntrl.create({
          subTitle:'Signin Failed!',
          message:error.message,
          buttons:['OK']
        });
        alert.present();
      });
  
    }
      

  
  else{
    loading.dismiss();
    const alert=this.alertcntrl.create({
      subTitle:'Signin Failed!',
      message:'Invalid login credentials',
      buttons:['OK']
    });
    //this.submitAttempt=true;
    alert.present();
   
 }
}*/

 async login(){
   const loading= this.loadcntrl.create({
    spinner:'bubbles',
    content:'Signing you in...'
  });
  loading.present();

 const loginResponse= await this.auth.signInWithEmailAndPassword(this.account);
  
 if(!loginResponse.error){
  loading.dismiss();
 }
 else{
  const alert= this.alertcntrl.create({
    subTitle:'Signin Failed!',
    message:loginResponse.error.message,
    buttons:['OK']
  });
  loading.dismiss();
  alert.present();
 }
 this.loginStatus.emit(loginResponse);
 
  /*const loading= this.loadcntrl.create({
    spinner:'bubbles',
    content:'Signing you in...'
  });
  loading.present();
  if(this.signinform.valid){*/
    
    /* try{
  const result:LoginResponse ={

    result: await this.afauth.auth.signInWithEmailAndPassword(this.account.email, this.account.password) 
  }
    
    
  
    this.loginStatus.emit(result);
    //loading.dismiss();
    //this.navCtrl.push('TabsPage');
 }
  

catch(errors){
  const error:LoginResponse={
    error:errors
  }
  this.loginStatus.emit(error);}
 /*loading.dismiss();
 
 const alert= this.alertcntrl.create({
   subTitle:'Signin Failed!',
   message:errors.message,
   buttons:['OK']
 });
 alert.present();

  }
  

}//ifclose
else{
  loading.dismiss();
    const alert=this.alertcntrl.create({
      subTitle:'Signin Failed!',
      message:'Invalid login credentials',
      buttons:['OK']
    });
    //this.submitAttempt=true;
    alert.present();

    
  }*/
 }
 onToSignup(){
  this.navCtrl.push('SignupPage');
}
}
