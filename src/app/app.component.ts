import { Component, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { Platform, NavController, MenuController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthService } from '../providers/auth/auth.service';
import { User } from 'firebase/app';
import { DataProvider } from '../providers/data/data.service';
import { Subscription } from 'rxjs';
import { profile } from '../models/profile/profile';
//import { IntroPage } from '../pages/intro/intro';
//import { helpPage } from '../pages/help/help';
//import { LoginPage } from '../pages/login/login';
//import { LoginPage } from '../pages/login/login';
//import { FindridePage } from '../pages/findride/findride';
//import { OfferridePage } from '../pages/offerride/offerride';
//import { SignupPage } from '../pages/signup/signup';
//import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnDestroy, OnInit {
  rootPage:string;
  loginpage:string='LoginPage';
  offerpage:string='OfferridePage';
  ridepage:string='FindridePage';
  tabspage:string='TabsPage';
  profilepage:string='ProfilePage';
  mytripspage:string='MytripsPage';
 isAuthenticated=false;
  //userProfile:profile;
//loading= Loading;
 email:string;
 firstName:string;
 lastName:string;
 user = {} as User;
 profile ={} as profile;
 private authenticatedUser$: Subscription;
 private authenticatedUser: User;
  
  @ViewChild('content') nav:NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,public menucntrl:MenuController, private auth:
    AuthService, private data:DataProvider,private load:LoadingController ) {

    /*this.auth.getAuthenticatedUser().subscribe(auth=>{
      !auth ?
      this.rootPage ='LoginPage'  : this.rootPage='TabsPage';
    })*/
    

   this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe((user: User)=>{
      this.authenticatedUser = user ;
  })
  
  
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
  ngOnInit():void{
    const loading = this.load.create({
      content: 'Loading ...'});
    loading.present();
    this.auth.getAuthenticatedUser().subscribe(auth=>{

      if(auth){
       this.data.getProfile(this.authenticatedUser).subscribe(profile=>{
        if(profile){


          
             this.email=profile.email;
              this.firstName=profile.firstName;
              this.lastName=profile.lastName;
         




         this.rootPage='TabsPage';
        // this.rootPage='FindridePage';
         loading.dismiss();
        }
       else{
         this.rootPage='LoginPage';
         loading.dismiss();
        }
       
       })
           }//if close
     else{
       this.rootPage ='IntroPage';
       loading.dismiss();
     }
   
   });

  


  }
  onsidemenu(page:any){
    //this.nav.setRoot(page);
    this.nav.push(page)
    this.menucntrl.close();
     
  }
  onLogout(){
    this.auth.signout();
    this.nav.setRoot('LoginPage');
    this.menucntrl.close();

  }
  ngOnDestroy():void{
   this.authenticatedUser$.unsubscribe();
  }
}
