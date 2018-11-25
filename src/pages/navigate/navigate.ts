import { Component, ViewChild, ElementRef, OnDestroy} from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController, LoadingController, Platform, Loading, ToastController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Rx';
import 'rxjs/Rx';
import 'rxjs/add/operator/filter';
import { isNullOrUndefined } from 'util';



declare var google;



@IonicPage()
@Component({
  selector: 'page-navigate',
  templateUrl: 'navigate.html',
})
export class NavigatePage implements OnDestroy{
  @ViewChild('search')
    search:any;
    public searchElementRef: any;
  @ViewChild('map') mapElement: ElementRef;
  map: any;
hasValue:boolean=false;
  subscription:any;
  time:any;
  public start:any;
  public end:any;
  public latitude1: number;
 // timeinterval:any;
  //marker:any;
  alertCount:boolean=true;
  count:number=0;
  isStatus:boolean=true;
  mark:any;
  sub:any;
  path:boolean=false;
public longitude1: number;
public latitude2: number;
public longitude2: number;
  distance: any;
  input:any;
  autocomplete:any;
  loading:Loading;
  //loading1:Loading;
  directionsService = new google.maps.DirectionsService;
  directionsDisplay = new google.maps.DirectionsRenderer;
  

  
  constructor(public navCtrl: NavController, public navParams: NavParams,public modalcntrl:ModalController,
    private geolocation: Geolocation,private alertcntrl:AlertController,
    private loadcntrl:LoadingController ,public platform:Platform,public toastCntrl:ToastController) {
       // this.start=res.coords.latitude +','+res.coords.longitude;
     
      
      
    
     
  //this.start={'lat '+res.coords.latitude+' lang '+res.coords.longitude};
    }
   
    ionViewWillEnter(){

                        
                         if(this.distance== NaN || this.distance==undefined)
                                         this.initMap();



                           let input = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
                               let autocomplete = new google.maps.places.Autocomplete(input, {types: ['geocode']});
                                   // let options: NativeGeocoderOptions = {
                                     //      useLocale: true,
                                        //         maxResults: 5
                                        //                                };
                                         
                                              google.maps.event.addListener(autocomplete, 'place_changed', () => {
        // retrieve the place object for your use
       // console.log('now ti is2');                 
                                                        this.alertCount=true;
                                                  
                                                    let place = autocomplete.getPlace();
                                                              // console.log(place);
        
      

      if (!(place.geometry === undefined || place.geometry === null)){ 
      this.latitude2 = place.geometry.location.lat();
       this.longitude2 =place.geometry.location.lng();
      
        this.end=this.latitude2 +','+this.longitude2;
       // this.hasValue=true;
      // this.path=true;
        this.count=this.count+1;
      //  console.log('here is the true value in isstatus');
        this.isStatus=true;
      //  console.log(this.path+'path');
      
                            

        }
      else{
            
               this.path=false;
             //  console.log(this.path + 'path');
                       this.isStatus=false;
                            this.count=0;
        // this.distance='0';
          // this.time='0';
                                    this.hasValue=false;
                                               
                                    this.initMap();


                                    this.toastCntrl.create({
                                      message:'INVALID DESTINATION !\nSelect from the List',
                                      duration:3000,
                                      position: 'top'
                                     }).present();
                                                 
                                                /*  const alert= this.alertcntrl.create({
                                                  subTitle:'Invalid Destination',
                                                   message:`
                                                   Select from the List` ,
                                                   buttons:['OK']})
                                                            alert.present();*/
                                                                   this.end=this.start;
                                                                   
                                                                           this.alertCount=false;
          
         
                                                                      
      //  this.subscription.unsubscribe();
      // this.sub.unsubscribe();
     //  this.navCtrl.popToRoot();
        //this.initMap();
         // this.funAlerthit();
          //console.log('this is me');
       //   this.nativeGeocoder.forwardGeocode(place, options)
     // .then((coordinates:NativeGeocoderForwardResult[]) => console.log('The coordinates are latitude=' + coordinates[0].latitude + ' and longitude=' + coordinates[0].longitude))
               
            // this.funAlert(); //.catch((error: any) => console.log(error));
                                                                                  }
        
                                                                              });
      
     
      
    

  
    }

  ionViewDidEnter(){
    
    if(!this.loading){
    this.loading = this.loadcntrl.create({
      spinner:'bubbles',
      content:'Loading...'
    });
    
    this.loading.present().then(()=>{
 
  
  
  setTimeout(() => {
    if(this.loading){
      
     this.loading.dismiss();
    
     this.loading=null;
    }
  }, 3000);
});
    }
    



    //this.timeinterval = Observable.interval(2000)
    //.subscribe((val) => {
    this.subscription = this.geolocation.watchPosition({  enableHighAccuracy: true })
     //.filter((p) => p.coords !== undefined) //Filter Out Errors
    .subscribe(position => {
  //console.log(position.coords.longitude + ' ' + position.coords.latitude);
  
    this.start=position.coords.latitude +','+position.coords.longitude;
    this.latitude1=position.coords.latitude;
    this.longitude1=position.coords.longitude;
   // console.log(this.start);
  // console.log(this.path+'here is the route fun');
    if(this.path){
    this.directionsDisplay.setMap(this.map);
    }
   
   // console.log('two quick');
    })

  

  //});

    }
   
  
  

  initMap() {
   // this.path=false;
   
    this.count=0;
    if(!this.loading){
    this.loading= this.loadcntrl.create({
      spinner:'bubbles',
      content:'Loading...'
    });
    this.loading.present().then(()=>{
    this.platform.ready().then(() => {
    this.geolocation.getCurrentPosition({ enableHighAccuracy: true}).then((resp) => {
 // resp.coords.latitude
 // resp.coords.longitude
 
    this.map = new google.maps.Map(document.getElementById('map'),  {
      zoom: 15,
    //{lat:34.083656, lng: 74.797371}
   //new google.maps.LatLng( resp.coords.latitude, resp.coords.longitude)
      center: new google.maps.LatLng( resp.coords.latitude, resp.coords.longitude),
     // disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      zoomControl:true,
  scaleControl:true,
  gestureHandling:true,
  rotateControl:true,

      
    });//geoclose
    
    
    this.addMarker(new google.maps.LatLng( resp.coords.latitude, resp.coords.longitude), this.map);
    
    
    
   
    if(this.loading){
    this.loading.dismiss();
    this.loading = null;
    }
    //console.log(marker);
    

  }).catch((error) => {
      //  this.initMap();
    this.toastCntrl.create({
      message:'Error getting location!\n'+ error,
      duration:3000,
      position: 'top'
     }).present(); 
      
   // console.log('Error getting location', error);
  });
       //current position
})//plaltform ready
 
    })//loading present close
  }//loading close
  //this.path=true;
  //console.log(this.path+'path');
}
   
  calculateAndDisplayRoute() {
    //console.log("the endddddd"+ this.end+'   ' +this.count);
    if(isNullOrUndefined(this.end) && this.count!=0){
      
     this.hasValue=false;
      //this.distance=undefined;
      this.funAlert();
      this.initMap();
      
       
    



    }
    else{
      
    this.mark.setMap(null);//remove marker
    
    if(!this.loading){
    this.loading= this.loadcntrl.create({
      spinner:'bubbles',
      content:'Loading...'
    });
    this.loading.present()
   }
     //console.log("the end"+ this.end);
    // this.hasValue=true;
    
    this.sub = Observable.interval(3000)
    .subscribe(() => { 
      //if(this.distance!='NaN'){
        if(this.loading){
        this.loading.dismiss();
        this.loading=null;
        }
      if(this.isStatus){
        this.directionsDisplay.setMap(this.map);
     // console.log('called' + val);
    this.directionsService.route({
      origin: this.start,
      destination: this.end,
      travelMode: 'DRIVING',
      
    }, (response, status) => {
      if (status === 'OK') {
        this.path=true;
        //console.log(this.path+ 'path');
        this.isStatus=true;
        this.directionsDisplay.setDirections(response);
        
      } else {
        //window.alert('Directions request failed due to ' + status);

        this.path=false;
       // console.log(this.path+'path');
        this.isStatus=false;
        this.end=undefined;
        this.hasValue=false;
       this.subscription.unsubscribe();
           this.sub.unsubscribe();
          // this.distance=NaN;
          
          // this.count=0;
           this.initMap();
        //console.log('two times');
        this.toastCntrl.create({
        //  message:status +' !'+' SOMETHING WENT WRONG\nTry with a different Name/Location \nOR\nTry after Sometime',
        message:'SOMETHING WENT WRONG...\nTry with a different Name/Location \nOR\nTry after Sometime',
          duration:3000,
          position: 'middle'
         }).present();
      /* const alert= this.alertcntrl.create({
          subTitle:status +' '+'SOMETHING WENT WRONG...',
          message:`
                   Try with a different Name/Location 
                   or Try after Sometime` ,
          buttons:['OK']

          
        
        })//alert close
       // this.distance='NaN';
       // this.time='NaN'
        
        alert.present();*/
      
       // Kindly reload or try after Sometime 
      }//else close
    
    });
    
    //window.alert('Directions request failed due to ' + status);
    
   // console.log(this.latitude2 +''+this.longitude2+'basit');
          
         this.distanceCal(this.latitude1,this.longitude1,this.latitude2,this.longitude2);
         
  }//if close
  })//observable close timer
 }//outer if close check for end var
  }
  
  addMarker(location, map) {
      
    // Add the marker at the clicked location, and add the next-available label
    // from the array of alphabetical characters.
     this.mark=new google.maps.Marker({
      position: location,
      label: 'A',
      map: map
    });
  }
 
 distanceCal(lat1, lng1, lat2, lng2) {
   // console.log(lat1, lng1, lat2, lng2);
   // console.log(this.distance);
    var R = 6371e3; // metres
    var phi1 = this.convertDegToRad(lat1);
    var phi2 = this.convertDegToRad(lat2);
    var deltaphi = this.convertDegToRad(lat2 - lat1);
    var deltalambda = this.convertDegToRad(lng2 - lng1);

    var a = Math.sin(deltaphi / 2) * Math.sin(deltaphi / 2) +
      Math.cos(phi1) * Math.cos(phi2) * Math.sin(deltalambda / 2) * Math.sin(deltalambda / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    this.distance = R * c;
    
    this.time =parseFloat(this.convertMeterToKm(this.distance)).toFixed(2);
    console.log(this.time +'try');
    this.distance =  Math.round((parseFloat(this.convertMeterToKm(this.distance))) * 100) / 100;
    console.log(this.distance);
    if(this.distance!='undefined' && this.distance!='NaN'){
      this.hasValue=true;
    //  console.log(this.hasValue);
                       }
      this.time= Math.round(((this.distance/30)*60) * 100) / 100;
      console.log(this.time);
  }




 convertMeterToKm(meter: any) {
    var km = meter / 1000;
    return km.toPrecision(4);
  }
  convertDegToRad(degrees) {
    {
      var pi = Math.PI;
      return degrees * (pi / 180);
    }
  }

  funAlert(){
    const alerts= this.alertcntrl.create({
      subTitle:'SOMETHING WENT WRONG...',
      message:`
      Try with a different Name/Location 
      or Try after Sometime` ,
      buttons:['OK']})
      alerts.present();
    }//fun Close
  
  onNotification(){
    const modal=this.modalcntrl.create('NotificationPage');
    modal.present();
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.sub.unsubscribe();
    //this.timeinterval.unsubscribe();
  }
  
 
}
