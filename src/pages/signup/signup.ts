import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController} from 'ionic-angular';
import { LoginResponse } from '../../models/login/login-response.interface';
//import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { LoginPage } from '../login/login';
//import { AuthService } from '../../services/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})

export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private toastCntrl:ToastController, private alertCntrl:AlertController) {
  }

 register(event:LoginResponse){
   console.log(event);
  // console.log('Hello AuthProvider Provider11');
   if(!event.error){
    const toast=this.toastCntrl.create({
      message: "Account Sucessfully Created:" + event.result.email,
      duration: 3000,
      cssClass: "yourCssClassName"
    });
    this.navCtrl.push('LoginPage');
    toast.present();
   }
   else{
    const alert=this.alertCntrl.create({
      subTitle: 'Signup Failed!',
      message:event.error.message,
      buttons:['OK']
    })
    alert.present(); 
   }
 }
}


