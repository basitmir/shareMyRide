import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController} from 'ionic-angular';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
import { Observable } from 'rxjs';
import { Channel } from '../../models/channels/channels.interface';
import 'rxjs/add/operator/map';
//import { Channel } from '../../models/channels/channels.interface';
//import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channels',
  templateUrl: 'channels.html',
})
export class ChannelsPage {
channelList:Observable<any[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalcntrl:ModalController
    ,private chat:ChatServiceProvider) {
  }
 
  ionViewWillLoad() {
      this.getChannel();
  }
   
  onNotification(){
    const modal=this.modalcntrl.create('NotificationPage');
    modal.present();
  }
getChannel(){
  this.channelList=this.chat.getChannelListRef().snapshotChanges().map(
    changes=>{
       return changes.map(c=>({
         key: c.payload.key, ...c.payload.val()
        
         
       }))
       
    });
    
}
selectChannel(channel:Channel){
  this.navCtrl.push('ChannelchatPage',{channel});
  
}
}
