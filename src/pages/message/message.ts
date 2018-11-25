import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { profile } from '../../models/profile/profile';
import { Message } from '../../models/messages/messages';
import { message_List } from '../../mocks/profiles/profiles';

/**
 * Generated class for the MessagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
selectedProfile:profile;

messageList:Message[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.messageList=message_List;
  
  }

  ionViewDidLoad() {
  
  this.selectedProfile=this.navParams.get('profile');
  
  }
  back(){
    this.navCtrl.push('SearchuserPage');
  }
}
