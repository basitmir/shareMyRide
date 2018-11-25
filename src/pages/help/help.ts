import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
//import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-help',
  templateUrl: 'help.html',
})
export class HelpPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modalcntrl:ModalController) {
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad HelpPage');
  }
   
  onNotification(){
    const modal=this.modalcntrl.create('NotificationPage');
    modal.present();
  }


}
