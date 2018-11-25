import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../home/home';
//import { OffersPage } from '../Offers/Offers';
// import { HelpPage } from '../help/help';
//import { NavigatePage } from '../navigate/navigate';
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {


  tab1Root:string;
  tab3Root :string;
  tab4Root :string;
   tab2Root:string;
   
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   
    this.tab1Root = 'HomePage';
    this.tab3Root = 'NavigatePage';
    this.tab4Root = 'ChannelsPage';
    this.tab2Root = 'HelpPage';
    
  
  }

  

}
