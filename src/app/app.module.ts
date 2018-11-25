import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import { MyApp } from './app.component';

//import { OffersPage } from '../pages/about/about';

//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { OffersPage } from '../pages/Offers/Offers';

//import { IntroPage } from '../pages/intro/intro';
//import { LoginPage } from '../pages/login/login';
//import { IntroPage } from '../pages/intro/intro';
//import { HelpPage } from '../pages/help/help';
//import { OfferridePage } from '../pages/offerride/offerride';
//import { FindridePage } from '../pages/findride/findride';
//import { NotificationPage } from '../pages/notification/notification';
//import { NavigatePage } from '../pages/navigate/navigate';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//import { SignupPage } from '../pages/signup/signup';
//import { AuthService } from '../services/auth';
import {AngularFireModule} from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import {AngularFireAuthModule} from 'angularfire2/auth'
import { AuthService } from '../providers/auth/auth.service';
import { DataProvider } from '../providers/data/data.service';
//import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Geolocation } from '@ionic-native/geolocation';
import { NativeGeocoder } from '@ionic-native/native-geocoder';   
import { sharerideService } from '../providers/shareride/shareride.service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SMS } from '@ionic-native/sms';
import { ChatServiceProvider } from '../providers/chat-service/chat-service';
import {PayPal} from '@ionic-native/paypal';

//import { AgmCoreModule } from '@agm/core';



//import { AuthProvider } from '../providers/auth/auth';

@NgModule({
  declarations: [
    MyApp,
    

  ],
  imports: [
   AngularFireAuthModule, BrowserModule,ReactiveFormsModule,FormsModule,AngularFireModule.initializeApp(FIREBASE_CREDENTIALS),
    IonicModule.forRoot(MyApp,{tabsHideOnSubPages: true,}),AngularFireDatabaseModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthService,
    DataProvider,Geolocation,NativeGeocoder,sharerideService,
    SocialSharing,SMS,
    ChatServiceProvider,PayPal
   
  ]
})
export class AppModule {
 
}
