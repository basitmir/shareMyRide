import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Channel } from '../../models/channels/channels.interface';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
//import { AngularFireList } from 'angularfire2/database';
//import { ChannnelMessages } from '../../models/channels/channel-messages.interface';
import { Observable } from 'rxjs';
import { ChannnelMessages } from '../../models/channels/channel-messages.interface';
import 'rxjs/add/operator/map';
import { profile } from '../../models/profile/profile';
import { AuthService } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { User } from 'firebase';
import { adminChat } from '../../models/channels/adminChat.interface';

/**
 * Generated class for the ChannelchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-channelchat',
  templateUrl: 'channelchat.html',
})
export class ChannelchatPage implements OnInit{

 channelMessages:Observable<any[]>
 userProfile:profile;
  channel:Channel;
 // owner:string;
  phoneNumber:number;
  value:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public chat:ChatServiceProvider,
    private auth:AuthService, private data:DataProvider) {


  }
  ngOnInit(){
    
    this.auth.getAuthenticatedUser().subscribe((user:User)=>{
      this.data.getProfile(user).subscribe((profile:profile)=>{
       this.userProfile=profile;
      this.phoneNumber=this.userProfile.phone;
    // this.owner=this.userProfile.firstName+this.userProfile.lastName;
      })
    })
   //this.slides.autoHeight=true; 
 }
   
  ionViewWillLoad() {
   this.channel= this.navParams.get('channel');
   
   
   this.channelMessages=this.chat.getChannelChatRef(this.channel.key).snapshotChanges().map(
    changes=>{
       return changes.map(c=>({
         key: c.payload.key, ...c.payload.val()
         
         
       }))
       
    });
      //console.log(this.chat.getChannelChatRef(this.channel.key).valueChanges());
  }

  
   
sendMessage(content:string){
  if(this.phoneNumber!=this.channel.phone){

        let channelMessage: ChannnelMessages={
          content
        }
       
        this.chat.sendChannelChatMessage(this.channel.key, channelMessage);
        }
        else{
    
          let channelMessage: adminChat={
            content,
           // owner:this.owner,
            phone:this.phoneNumber
          }
         // let admin={owner:this.owner,phone:this.phoneNumber}
          this.chat.sendAdminChannelChatMessage(this.channel.key, channelMessage);
        
        }
        
}





back(){
  this.navCtrl.popToRoot();
}

}
