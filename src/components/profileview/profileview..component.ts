import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import {User} from "firebase/app";
import { profile } from '../../models/profile/profile';
import { LoadingController, Loading } from 'ionic-angular';
/**
 * Generated class for the ProfileviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'profileview',
  templateUrl: 'profileview.component.html'
})
export class ProfileviewComponent implements OnInit{

   userProfile:profile;
   loading:Loading;
  

  constructor( private auth:AuthService,private data:DataProvider,private load:LoadingController) {
   // console.log('Hello ProfileviewComponent Component');
    this.loading=this.load.create({
     content: 'Loading Profile...'
    })
  }
  ngOnInit():void{
    this.loading.present();
    this.auth.getAuthenticatedUser().subscribe((user:User)=>{
            this.data.getProfile(user).subscribe((profile:profile)=>{
            this.userProfile=profile;
            this.loading.dismiss();
            })
    })
  }

}
