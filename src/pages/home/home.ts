import { Component } from '@angular/core';
import { NavController, ModalController, IonicPage } from 'ionic-angular';
//import { OfferridePage } from '../offerride/offerride';
//import { FindridePage } from '../findride/findride';
//import { NotificationPage } from '../notification/notification';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public modalcntrl:ModalController) {

  }
goTo(){
  this.navCtrl.push('OfferridePage');
}
 goToRide(){
  this.navCtrl.push('FindridePage');
}
  onNotification(){
  const modal=this.modalcntrl.create('NotificationPage');
  modal.present();
}
}
