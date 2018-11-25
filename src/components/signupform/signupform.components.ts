import { Component, Output, EventEmitter} from '@angular/core';
import { NavController, NavParams,  LoadingController} from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import {AngularFireAuth} from 'angularfire2/auth'
import { account} from '../../models/account/account.interface';
import { AuthService } from '../../providers/auth/auth.service';
import { LoginResponse } from '../../models/login/login-response.interface';
//import { DISABLED } from '@angular/forms/src/model';

/**
 * Generated class for the SignupformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */

@Component({
  selector: 'signupform',
  templateUrl: 'signupform.components.html'
})
export class SignupformComponent {

  @Output() registerStatus:EventEmitter<LoginResponse>;
  submitAttempt:boolean=false;
  formValid:boolean=true;

account={} as account


  constructor(public navCtrl: NavController, public navParams: NavParams,
  private loadcntrl:LoadingController,private auth:AuthService) {
  
     this.registerStatus=new EventEmitter<LoginResponse>();
    }
 
 signupform= new FormGroup({
 //name : new FormControl('',([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
 email : new FormControl('',([Validators.required,Validators.pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$')])),
 //phoneNumber : new FormControl('',([Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')])),
 password:new FormControl('',([Validators.required,Validators.minLength(8)])),
 repeatPassword : new FormControl('',Validators.required)
 });
 
/*
 get name(){
   return this.signupform.get('name');
  
 }
 get phoneNumber(){
  return this.signupform.get('phoneNumber');
}
*/
 get email(){
   return this.signupform.get('email');
 }

 
 get password(){
  return this.signupform.get('password');
}

get repeatPassword(){
  return this.signupform.get('repeatPassword');
}

  setBackButtonText(){
    
  }

check(){
  if(this.signupform.valid){
    this.formValid=false;
  }
}
onGoTo(){
    
  if(this.password.value != this.repeatPassword.value){
    this.submitAttempt=true;
  }
  else{
         /* const loading=this.laodcntrl.create({
          spinner:'bubbles',
          content: 'Signing you up...'
        });
       loading.present();
    //let data = this.signupform.value;
    this.authService.signup(this.email.value,this.password.value)
    .then(data1 => {loading.dismiss();})


    .catch(error =>{
      loading.dismiss();
      const alert=this.alertcntrl.create({
        subTitle: 'Signup Failed!',
        message:error.message,
        buttons:['OK']
      })
      alert.present();    
    });*/
  
    this.navCtrl.push('LoginPage');
}

  
//outer else
}//fun close

async register(){
    
        
  if(this.password.value != this.repeatPassword.value){
    this.submitAttempt=true;}
  
    else{

  
    const loading=this.loadcntrl.create({
      spinner:'bubbles',
      content: 'Signing you up...'
    });
    loading.present();
 
  console.log('Hello AuthProvider Provider1');
  const result = await this.auth.createUserWithEmailAndPassword(this.account);
  this.registerStatus.emit(result);
    loading.dismiss();
                  
 
/*catch(e){
  
    loading.dismiss();
    const alert=this.alertcntrl.create({
      subTitle: 'Signup Failed!',
      message:e.message,
      buttons:['OK']
    })
    alert.present();    
 this.registerStatus.emit(e);

         
         
  
  
  }
}//catch close*/}
  }//else close
}




