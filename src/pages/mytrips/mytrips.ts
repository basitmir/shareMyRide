import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
//import {  AngularFireDatabase } from 'angularfire2/database';
import { sharerides } from '../../models/shareride/shareride.interface';
import { sharerideService } from '../../providers/shareride/shareride.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AuthService } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { User } from 'firebase';
import { profile } from '../../models/profile/profile';
import { SocialSharing } from '@ionic-native/social-sharing';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';
//import { Channel } from '../../models/channels/channels.interface';


@IonicPage()
@Component({
  selector: 'page-mytrips',
  templateUrl: 'mytrips.html',
})
export class MytripsPage {
  userProfile:profile;
  filteredData$:Observable<any[]>;
 // shareRideDetails$:Observable<sharerides[]>;
  channelListFilter:Observable<any[]>;
  
 // shareridelist:sharerides[]=shareRideList;
  constructor(public navCtrl: NavController, public navParams: NavParams, private getdetails:sharerideService,private auth:AuthService
    ,private data:DataProvider,private toast:ToastController,private sharing:SocialSharing,private modalcntrl:ModalController,
    private chat:ChatServiceProvider) {

  //  this.shareRideDetails$=this.getdetails.getrideDetails().valueChanges();
    //console.log(this.shareRideDetails$);
    this.auth.getAuthenticatedUser().subscribe((user:User)=>{
      this.data.getProfile(user).subscribe((profile:profile)=>{
      this.userProfile=profile;
     // console.log(this.userProfile)
    this.filteredData$= this.getdetails.filterData(this.userProfile.email).snapshotChanges().map(
      changes=>{
         return changes.map(c=>({
           key: c.payload.key, ...c.payload.val()
           
           
         }))
         
      });//filteredData$ close
    

      /*this.channelListFilter=this.chat.filterData(this.userProfile.phone).snapshotChanges().map(
        changes=>{
           return changes.map(c=>({
             key: c.payload.key, ...c.payload.val()
            
             
           }))
           
        });*/







    })
      
    })//user close

    
    
    
    
    /*this.shareRideDetails$= this.getdetails.getrideDetails().snapshotChanges().map(
      changes=>{
         return changes.map(c=>({
           key: c.payload.key, ...c.payload.val()
           
           
         }))
         
      });

      console.log(this.getdetails.getrideDetails().valueChanges());*/
      


      
      
  }//constructor close
  deleteDetails(sharerides:sharerides){

        //console.log(channel);
     // this.chat.removeChannel(channel);
    this.getdetails.removeDetails(sharerides)
    .then(()=>{
      this.toast.create({
        message: "Deleted !",
        duration:3000
       }).present();

    });
  }
  whatsappshare(sharerides:sharerides){
    this.sharing.shareViaWhatsApp(sharerides.firstName+sharerides.lastName+' '+'is going to'+' '+sharerides.destination+' '
    +'\nJoin him on'+'  '+sharerides.date+' '+'\nFor more info install ShareMy Ride...',null,'http://localhost:8100/#/ShareMy-Ride')
    .then(()=>{
           console.log("Message sent !");
    }).catch((error)=>{
      console.log(error);

    })

  }
  fbshare(sharerides:sharerides){
    this.sharing.shareViaFacebook(sharerides.firstName+sharerides.lastName+' '+'is going to'+' '+sharerides.destination+' '
    +'\nJoin him on'+'  '+sharerides.date+' '+'\nFor more info install ShareMy Ride...',null,'http://localhost:8100/#/ShareMy-Ride')
    .then(()=>{
           console.log("Message sent !");
    }).catch((error)=>{
      console.log(error);

    })

  }
  instashare(sharerides:sharerides){
    this.sharing.shareViaInstagram(sharerides.firstName+sharerides.lastName+' '+'is going to'+' '+sharerides.destination+' '
    +'\nJoin him on'+'  '+sharerides.date+' '+'\nFor more info install ShareMy Ride...'+'\nhttp://localhost:8100/#/ShareMy-Ride',null,)
    .then(()=>{
           console.log("Message sent !");
    }).catch((error)=>{
      console.log(error);

    })

  }
  onNotification(){
    const modal=this.modalcntrl.create('NotificationPage');
    modal.present();
  }
  goToHome(){
    this.navCtrl.push('TabsPage');
  }
}
