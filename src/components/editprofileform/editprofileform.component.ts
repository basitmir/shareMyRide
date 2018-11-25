import { Component,OnDestroy, Output, EventEmitter} from '@angular/core';
import { profile } from '../../models/profile/profile';
import { DataProvider } from '../../providers/data/data.service';
import { AuthService } from '../../providers/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'firebase/app';
//import { NavController } from 'ionic-angular';
//import { EventEmitter } from 'events';

/**
 * Generated class for the EditprofileformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'editprofileform',
  templateUrl: 'editprofileform.component.html'
})
export class EditprofileformComponent implements OnDestroy {

  private authenticatedUser$: Subscription;
  private authenticatedUser: User;
 profile={} as profile;
@Output() saveProfileResult: EventEmitter<Boolean>;


  constructor(private data:DataProvider, private auth :AuthService) {
     this.saveProfileResult= new EventEmitter<Boolean>();
    this.authenticatedUser$= this.auth.getAuthenticatedUser().subscribe((user: User)=>{
      this.authenticatedUser=user;
    })
  }

  editprofileform= new FormGroup({
    firstname : new FormControl('',([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
    lastname : new FormControl('',([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
    phoneNumber : new FormControl('',([Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')])),
    
    });
   
    get firstname(){
      return this.editprofileform.get('firstname');
     
    }
    get lastname(){
      return this.editprofileform.get('lastname');
     
    }
   
    
   
    get phoneNumber(){
      return this.editprofileform.get('phoneNumber');
    }
   
   
    
   






 async saveProfile(){
   if(this.authenticatedUser){
    
     this.profile.email=this.authenticatedUser.email; 
   const result = await this.data.saveProfile(this.authenticatedUser,this.profile);
   this.saveProfileResult.emit(result);
  console.log(result);
 
    //this.navCtrl.setRoot('TabsPage');
  }
}

ngOnDestroy():void{
  this.authenticatedUser$.unsubscribe();
}
}
