import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthService } from '../../providers/auth/auth.service';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }
signout(){
  this.auth.signout();
  this.navCtrl.setRoot('LoginPage');
}
oneditProfile(){
  this.navCtrl.push('EditprofilePage');
}
goToHome(){
   this.navCtrl.pop();
}
}
