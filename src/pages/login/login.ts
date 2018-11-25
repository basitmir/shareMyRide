import { Component, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
import { DataProvider } from '../../providers/data/data.service';
import { User } from 'firebase';
import { Subscription } from 'rxjs';
import { AuthService } from '../../providers/auth/auth.service';
//import { DataProvider } from '../../providers/data/data.service';
//import { User } from 'firebase';
//import { LoginResponse } from '../../models/login/login-response.interface';
//import { LoginResponse } from '../../models/login/loginInterface.interface';

//import { SignupPage } from '../signup/signup';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { AuthService } from '../../services/auth';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage implements OnDestroy {
  user = {} as User;

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
  constructor(public navCtrl: NavController, public navParams: NavParams, private toastcntrl:ToastController,private data:DataProvider,
    private auth:AuthService) {

    this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>{
        this.authenticatedUser = user ;
    })
  }

  //ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  //}

  



  login(event: LoginResponse){
         console.log(event);
         
   if(!event.error){
        console.log(event.result.email);

    /* this.toastcntrl.create({
      message: "Welcome to ShareMy Ride",
      duration:3000
     }).present();*/
    
     
//     this.navCtrl.setRoot('EditprofilePage');
this.data.getProfile(this.authenticatedUser).subscribe(profile =>{

  console.log(profile);

  if (profile) {
    this.toastcntrl.create({
      message: `Welcome to ShareMy Ride, `+ (profile.firstName) + " " +(profile.lastName),
      duration:3000
     }).present();
    this.navCtrl.setRoot("TabsPage");
  } else {
    this.navCtrl.push("EditprofilePage");
  }
});

}//if close

     
     
    
   }//login close

   ngOnDestroy():void{
    this.authenticatedUser$.unsubscribe();
  }
   
   }//class close
  
  

