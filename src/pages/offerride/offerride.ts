import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { NgForm,FormGroup,FormControl, Validators } from '@angular/forms';
//import { TabsPage } from '../tabs/tabs';
import { AlertController } from 'ionic-angular';
import { sharerides } from '../../models/shareride/shareride.interface';
//import {AngularFireDatabase} from  'angularfire2/database';
//import { isNullOrUndefined, isUndefined } from 'util';
import { AuthService } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { User } from 'firebase';
import { profile } from '../../models/profile/profile';
import { sharerideService } from '../../providers/shareride/shareride.service';
import { ChatServiceProvider } from '../../providers/chat-service/chat-service';

/**
 * Generated class for the OfferridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var google;
@IonicPage()
@Component({
  selector: 'page-offerride',
  templateUrl: 'offerride.html',
})
export class OfferridePage implements OnInit {

sharerides:sharerides={
  tripType:'ONE WAY TRIP',
  origin:'',
  destination:'',
  stopover:'',
  date:undefined,
  time:'',
  returnTime:'',
  price1:undefined,
  price2:undefined,
  price3:undefined,
  vehicle:'Car',
  seats:'',
  gender:'',
  channel:'',
  firstName:'',
  lastName:'',
  email:'',
  phoneNo:undefined
}




  today:any
  userProfile:profile;
 // sharerides= {} as sharerides;
 // sharedetails$: AngularFireList<sharerides>
 currentIndex:number
  @ViewChild(Slides) slides:Slides;
  submitAttempt: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController,
    private data: DataProvider,private auth:AuthService,private addetails:sharerideService,private chat:ChatServiceProvider) {
  // this.sharedetails$= this.database.list('share-details');
   this.today = new Date().toISOString();
    //this.now= new ().toISOString();
  
    
  }
  ngOnInit(){
    this.auth.getAuthenticatedUser().subscribe((user:User)=>{
      this.data.getProfile(user).subscribe((profile:profile)=>{
       this.userProfile=profile;
      })
    })
   //this.slides.autoHeight=true; 
 }

  
 
  
  form=new FormGroup({
    form1: new FormGroup({
    radio:new FormControl('ONE WAY TRIP'),
    origin:new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
    destination:new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
    stopover:new FormControl('',Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
    date:new FormControl('',Validators.required),
    time:new FormControl('',Validators.required),
    returntime:new FormControl('null',Validators.required)
  }),
  form2: new FormGroup({
     price1:new FormControl('',Validators.required),
     price2:new FormControl('',Validators.required),
     price3:new FormControl('',Validators.required),
  }),
  form3: new FormGroup({
   selectradio:new FormControl('Car'),
   selectlist:new FormControl('',Validators.required),
   selectgender:new FormControl('',Validators.required),
   channel:new FormControl('',Validators.compose([Validators.required,Validators.pattern('^[a-zA-Z0-9]*$')]))
  })
  });
  get form1(): any 
  { 
    return this.form.get('form1');
 }
 get form2(): any 
  { 
    return this.form.get('form2');
 }
get origin(){
  return this.form.get('form1.origin');

}
get radio(){
  return this.form.get('form1.radio');

}
get destination(){

  return this.form.get('form1.destination');

}
get stopover(){
  return this.form.get('form1.stopover');
}
get date(){
  return this.form.get('form1.date');
}
get time(){
  return this.form.get('form1.time');

}
get returntime(){
  return this.form.get('form1.returntime');

}
get price1(){
  return this.form.get('form2.price1');
}
get price2(){
  return this.form.get('form2.price2');
}
get price3(){
  return this.form.get('form2.price3');
}
get selectradio(){
  return this.form.get('form3.selectradio')
}
get selectlist(){
  return this.form.get('form3.selectlist')
}
get selectgender(){
  return this.form.get('form3.selectgender')
}
get channel(){
  return this.form.get('form3.channel')
}

  ionViewDidLoad() {
  
    this.slides.lockSwipes(true);
  }

 
  next() {
   
    if(this.form1.valid)
    {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.submitAttempt=false;
    }
    else{
      this.submitAttempt=true;
    }

    
  }


  next2() {
    if(this.form2.valid)
    {
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);
    this.submitAttempt=false;
    }
    else{
      this.submitAttempt=true;
    }

    
  }


  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev();
    this.slides.lockSwipes(true);
  }
  formsubmit(form:NgForm){

   
  }

   // if(this.form.valid)

   tConv24(time24) {
    var ts:any = time24;
    var H:any = +ts.substr(0, 2);
    var h:any = (H % 12) || 12;
    h = (h < 10)?("0"+h):h;  // leading 0 at the left for 1 digit hours
    var ampm = H < 12 ? " AM" : " PM";
    ts = h + ts.substr(2, 3) + ampm;
    return ts;
  };
  

   /* showdialog(){
      this.alertCtrl.create({
        title:'Channel Name',
        inputs:[{
          name:'ChannelName'
        }],
        buttons:[
          {
            text:'Cancel',
            role:'cancel'
          },
          {
            text:'Add',
            handler:data=>{
              this.chat.addChannel(data.ChannelName);
              this.sharerides.channel=data.ChannelName;
            }
          }
        ]
      }).present();
    }*/
      save( sharerides:sharerides) {
          

       
        //this.sharerides.time=this.sharerides.time +'AM';
       // this.submitAttempt = true;
      
      /* if(isUndefined(this.radio.value)){
        this.sharerides.tripType="One Way Trip";
      }
      if(isUndefined(this.selectradio.value)){
        this.sharerides.vehicle="Car";
      }

      if(isNullOrUndefined(this.sharerides.details)){
        this.sharerides.details='null';
      }*/

       sharerides.time= this.tConv24(this.sharerides.time);
       sharerides.returnTime= this.tConv24(this.sharerides.returnTime);
      this.chat.addChannel(sharerides.channel,this.userProfile.firstName,this.userProfile.lastName,this.userProfile.phone);
       console.log(sharerides.returnTime);
        sharerides.firstName=this.userProfile.firstName;
        sharerides.lastName=this.userProfile.lastName;
        sharerides.phoneNo=this.userProfile.phone;
        sharerides.email=this.userProfile.email;
      /*if(isNullOrUndefined(this.sharerides.returnTime)){
        this.sharerides.returnTime='null';
      }
      else{
        this.sharerides.returnTime=this.tConv24(this.sharerides.returnTime);
      }
       this.sharedetails$.push({
         tripType:this.sharerides.tripType,
        origin:this.sharerides.origin,
        destination:this.sharerides.destination,
        stopover:this.sharerides.stopover,
        date:this.sharerides.date,
       time:this.sharerides.time,
        returnTime:this.sharerides.returnTime,
        price1:this.sharerides.price1,
        price2:this.sharerides.price2,
        price3:this.sharerides.price3,
        vehicle: this.sharerides.vehicle,
        seats:this.sharerides.seats,
        gender:this.sharerides.gender,
        details:this.sharerides.details,
        firstName:this.userProfile.firstName,
        lastName:this.userProfile.lastName,
        phoneNo:this.userProfile.phone,
        email:this.userProfile.email
      

      });*/

    this.addetails.addrideDetails(sharerides).then(ref=>{
   console.log(sharerides.origin);
    });


      if(this.form.valid){

     

        
    let alert1 = this.alertCtrl.create({
      title: 'RIDE SHARE',
      
      subTitle: 'Sucessfull !',
      buttons:[{ text:'OK',
      handler: () => {
        this.navCtrl.push('TabsPage');
        ;}
      }]
                                     });
          
        alert1.present();  
      }
 

   
}

goToHome(){
  this.navCtrl.push('TabsPage');
}


    
    

   
  
   slideChanged() {
    this.currentIndex = this.slides.getActiveIndex();
    //if(this.currentIndex==1 || this.currentIndex==2){
     // this.slides.autoHeight=true;
    //}
    
  }
  
  
  ionViewWillEnter(){
   /* let input1 = document.getElementById('googlePlaces1').getElementsByTagName('input')[0];
    let autocomplete1 = new google.maps.places.Autocomplete(input1, {types: ['geocode']});
        
                   google.maps.event.addListener(autocomplete1, 'place_changed', () => {
           
                    let place = autocomplete1.getPlace();
                    console.log(place.address_components.streetName);
                    console.log(place.addrComponents.streetNumber);
                   }) ;      
                      
                      let input2 = document.getElementById('googlePlaces2').getElementsByTagName('input')[0];
    let autocomplete2 = new google.maps.places.Autocomplete(input2, {types: ['geocode']});
       
              
                   google.maps.event.addListener(autocomplete2, 'place_changed', () => {
                
                    let place = autocomplete2.getPlace();
                    console.log(place.PlaceResult.name);
                   });  

                   let input3 = document.getElementById('googlePlaces3').getElementsByTagName('input')[0];
    let autocomplete3 = new google.maps.places.Autocomplete(input3, {types: ['geocode']});
       
              
                   google.maps.event.addListener(autocomplete3, 'place_changed', () => {
                
              
                   });   */
  }



}
