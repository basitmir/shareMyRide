import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { sharerides } from '../../models/shareride/shareride.interface';
import { SMS } from '@ionic-native/sms';
import { AuthService } from '../../providers/auth/auth.service';
import { DataProvider } from '../../providers/data/data.service';
import { User } from 'firebase';
import { profile } from '../../models/profile/profile';
//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal'

/**
 * Generated class for the MoredetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moredetails',
  templateUrl: 'moredetails.html',
})
export class MoredetailsPage {
  userProfile:profile;
shareDetails:sharerides;
  constructor(public navCtrl: NavController, public navParams: NavParams,private message:SMS,private auth:AuthService,
    private data:DataProvider,private alertCntrl:AlertController) {
    this.auth.getAuthenticatedUser().subscribe((user:User)=>{
      this.data.getProfile(user).subscribe((profile:profile)=>{
      this.userProfile=profile;
     
      })
})
}
  

  ionViewWillLoad() {
    this.shareDetails=this.navParams.get('shareDetails');
    console.log(this.navParams.get('shareDetails'));
  }
back(){
  this.navCtrl.popTo('FindridePage');
}
messages(value:any){
if(value=='1'){
  let num:string=this.shareDetails.phoneNo.toString();
  this.message.send(num, this.userProfile.firstName+this.userProfile.lastName+' '+'wants to join with you from'
  +' '+this.shareDetails.origin+' '+'to'+' '+this.shareDetails.destination+' '+'http://localhost:8100/#/ShareMy-Ride')
    .then(()=>{
      let alert = this.alertCntrl.create({
        title: 'Message Send',
        subTitle: 'Sucessfull !',
        buttons: ['OK']
      });
      alert.present();
    }).catch((error)=>{
      let alert = this.alertCntrl.create({
        title: 'Message Not Send',
        subTitle: 'Please try after Sometime',
        buttons: ['OK']
      });
      alert.present();

    })
}//if close
else if(value=='2'){
  let num:string=this.shareDetails.phoneNo.toString();
  this.message.send(num, this.userProfile.firstName+this.userProfile.lastName+' '+'wants to join with you from'
  +' '+this.shareDetails.origin+' '+'to'+' '+this.shareDetails.stopover+' '+'http://localhost:8100/#/ShareMy-Ride')
    .then(()=>{
      let alert = this.alertCntrl.create({
        title: 'Message Send',
        subTitle: 'Sucessfull !',
        buttons: ['OK']
      });
      alert.present();
    }).catch(()=>{
      let alert = this.alertCntrl.create({
        title: 'Message Not Send',
        subTitle: 'Please try after Sometime',
        buttons: ['OK']
      });
      alert.present();

    })

}//else if close
else{
  let num:string=this.shareDetails.phoneNo.toString();
  this.message.send(num, this.userProfile.firstName+this.userProfile.lastName+' '+'wants to join with you from'
  +' '+this.shareDetails.stopover+' '+'to'+' '+this.shareDetails.destination+' '+'http://localhost:8100/#/ShareMy-Ride')
    .then(()=>{
      let alert = this.alertCntrl.create({
        title: 'Message Send',
        subTitle: 'Sucessfull !',
        buttons: ['OK']
      });
      alert.present();
    }).catch((error)=>{
      let alert = this.alertCntrl.create({
        title: 'Message Not Send',
        subTitle: 'Please try after Sometime',
        buttons: ['OK']
      });
      alert.present();

    })
}


}


/*pay(){

  this.payPal.init({
    PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
    PayPalEnvironmentSandbox: 'AfxHbgSmIOMNBF28wTpRjjsLCDFpPWzEzwtcj2G9hRGgd6ZGCwy_W9mDgp1zfiy4RtrVBYShleShq4p-'
  }).then(() => {
    // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
    this.payPal.prepareToRender('PayPalEnvironmentSandbox', new PayPalConfiguration({
      // Only needed if you get an "Internal Service Error" after PayPal login!
      //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
    })).then(() => {
      let payment = new PayPalPayment(this.shareDetails.price1.toString(), 'USD', 'Description', 'sale');
      this.payPal.renderSinglePaymentUI(payment).then(() => {
        // Successfully paid
      alert("paymrt sucessfull")
        // Example sandbox response
        //
        // {
        //   "client": {
        //     "environment": "sandbox",
        //     "product_name": "PayPal iOS SDK",
        //     "paypal_sdk_version": "2.16.0",
        //     "platform": "iOS"
        //   },
        //   "response_type": "payment",
        //   "response": {
        //     "id": "PAY-1AB23456CD789012EF34GHIJ",
        //     "state": "approved",
        //     "create_time": "2016-10-03T13:33:33Z",
        //     "intent": "sale"
        //   }
        // }
      }, () => {
        // Error or render dialog closed without being successful
      });
    }, () => {
      // Error in configuration
    });
  }, () => {
    // Error in initialization, maybe PayPal isn't supported or something else
  });
}*/
}
