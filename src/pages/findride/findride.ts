import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import {  AngularFireDatabase } from 'angularfire2/database';
import { sharerides } from '../../models/shareride/shareride.interface';
import { sharerideService } from '../../providers/shareride/shareride.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { DataProvider } from '../../providers/data/data.service';
//import { TitleCasePipe } from '@angular/common';
//import { sharerides } from '../../models/shareride/shareride.interface';
//import { Observable } from 'rxjs';
//import { shareRideList } from '../../mocks/shareride/shareride';
//import { sharerides } from '../../models/shareride/shareride.interface';

/**
 * Generated class for the FindridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-findride',
  templateUrl: 'findride.html',
})
export class FindridePage {
  num:any;
  //destination:any;
  rideDetails:any;
  //filteredData$:Observable<any[]>;
  shareRideDetails$:Observable<sharerides[]>;
 // shareridelist:sharerides[]=shareRideList;
  constructor(public navCtrl: NavController, public navParams: NavParams, private getdetails:sharerideService,private data:DataProvider) {

  //  this.shareRideDetails$=this.getdetails.getrideDetails().valueChanges();
    //console.log(this.shareRideDetails$);
    this.getDetail();
    
  }
  
  ionViewDidLoad() {
   // console.log(this.shareridelist);
  }
  getDetail(){
    
    this.shareRideDetails$= this.getdetails.getrideDetails().snapshotChanges().map(
      changes=>{
         return changes.map(c=>({
           key: c.payload.key, ...c.payload.val()
           
           
         }))
         
      });
      console.log(this.getdetails.getrideDetails().valueChanges());
      }//getdetailsclose
 /* getFiltered(){
      this.check=false;
    console.log(this.destination);
    this.filteredData$= this.getdetails.searchData(this.destination).snapshotChanges().map(
      changes=>{
         return changes.map(c=>({
           key: c.payload.key, ...c.payload.val()
           
           
         }))
         
      });
  
  }*/
searchDestination(query:string){
  const trimmedQuery=query.trim();
  

  if(trimmedQuery===query){
  this.data.searchDestination(query).subscribe(details=>{
    
    this.rideDetails=details;
   this.num=this.rideDetails.length;
  })
}
}
}
