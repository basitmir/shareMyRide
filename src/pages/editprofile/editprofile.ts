import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  saveProfileResult(event:boolean){
  event ? this.navCtrl.setRoot('TabsPage'):console.log("not authenticated or Saved");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditprofilePage');
  }
  goToPrev(){
    this.navCtrl.pop();
  }
}
