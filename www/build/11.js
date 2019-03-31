webpackJsonp([11],{

/***/ 603:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferridePageModule", function() { return OfferridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__offerride__ = __webpack_require__(875);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OfferridePageModule = /** @class */ (function () {
    function OfferridePageModule() {
    }
    OfferridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__offerride__["a" /* OfferridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__offerride__["a" /* OfferridePage */]),
            ],
        })
    ], OfferridePageModule);
    return OfferridePageModule;
}());

//# sourceMappingURL=offerride.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_shareride_shareride_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_chat_service_chat_service__ = __webpack_require__(331);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { TabsPage } from '../tabs/tabs';

//import {AngularFireDatabase} from  'angularfire2/database';
//import { isNullOrUndefined, isUndefined } from 'util';




var OfferridePage = /** @class */ (function () {
    function OfferridePage(navCtrl, navParams, alertCtrl, data, auth, addetails, chat) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.data = data;
        this.auth = auth;
        this.addetails = addetails;
        this.chat = chat;
        this.sharerides = {
            tripType: 'ONE WAY TRIP',
            origin: '',
            destination: '',
            stopover: '',
            date: undefined,
            time: '',
            returnTime: '',
            price1: undefined,
            price2: undefined,
            price3: undefined,
            vehicle: 'Car',
            seats: '',
            gender: '',
            channel: '',
            firstName: '',
            lastName: '',
            email: '',
            phoneNo: undefined
        };
        this.submitAttempt = false;
        this.form = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            form1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
                radio: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('ONE WAY TRIP'),
                origin: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])),
                destination: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])),
                stopover: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])),
                date: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                time: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                returntime: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('null', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
            }),
            form2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
                price1: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                price2: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                price3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
            }),
            form3: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
                selectradio: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('Car'),
                selectlist: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                selectgender: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required),
                channel: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9]*$')]))
            })
        });
        // this.sharedetails$= this.database.list('share-details');
        this.today = new Date().toISOString();
        //this.now= new ().toISOString();
    }
    OfferridePage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile;
            });
        });
        //this.slides.autoHeight=true; 
    };
    Object.defineProperty(OfferridePage.prototype, "form1", {
        get: function () {
            return this.form.get('form1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "form2", {
        get: function () {
            return this.form.get('form2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "origin", {
        get: function () {
            return this.form.get('form1.origin');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "radio", {
        get: function () {
            return this.form.get('form1.radio');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "destination", {
        get: function () {
            return this.form.get('form1.destination');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "stopover", {
        get: function () {
            return this.form.get('form1.stopover');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "date", {
        get: function () {
            return this.form.get('form1.date');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "time", {
        get: function () {
            return this.form.get('form1.time');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "returntime", {
        get: function () {
            return this.form.get('form1.returntime');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "price1", {
        get: function () {
            return this.form.get('form2.price1');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "price2", {
        get: function () {
            return this.form.get('form2.price2');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "price3", {
        get: function () {
            return this.form.get('form2.price3');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "selectradio", {
        get: function () {
            return this.form.get('form3.selectradio');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "selectlist", {
        get: function () {
            return this.form.get('form3.selectlist');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "selectgender", {
        get: function () {
            return this.form.get('form3.selectgender');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OfferridePage.prototype, "channel", {
        get: function () {
            return this.form.get('form3.channel');
        },
        enumerable: true,
        configurable: true
    });
    OfferridePage.prototype.ionViewDidLoad = function () {
        this.slides.lockSwipes(true);
    };
    OfferridePage.prototype.next = function () {
        if (this.form1.valid) {
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipes(true);
            this.submitAttempt = false;
        }
        else {
            this.submitAttempt = true;
        }
    };
    OfferridePage.prototype.next2 = function () {
        if (this.form2.valid) {
            this.slides.lockSwipes(false);
            this.slides.slideNext();
            this.slides.lockSwipes(true);
            this.submitAttempt = false;
        }
        else {
            this.submitAttempt = true;
        }
    };
    OfferridePage.prototype.prev = function () {
        this.slides.lockSwipes(false);
        this.slides.slidePrev();
        this.slides.lockSwipes(true);
    };
    OfferridePage.prototype.formsubmit = function (form) {
    };
    // if(this.form.valid)
    OfferridePage.prototype.tConv24 = function (time24) {
        var ts = time24;
        var H = +ts.substr(0, 2);
        var h = (H % 12) || 12;
        h = (h < 10) ? ("0" + h) : h; // leading 0 at the left for 1 digit hours
        var ampm = H < 12 ? " AM" : " PM";
        ts = h + ts.substr(2, 3) + ampm;
        return ts;
    };
    ;
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
    OfferridePage.prototype.save = function (sharerides) {
        //this.sharerides.time=this.sharerides.time +'AM';
        // this.submitAttempt = true;
        var _this = this;
        /* if(isUndefined(this.radio.value)){
          this.sharerides.tripType="One Way Trip";
        }
        if(isUndefined(this.selectradio.value)){
          this.sharerides.vehicle="Car";
        }
  
        if(isNullOrUndefined(this.sharerides.details)){
          this.sharerides.details='null';
        }*/
        sharerides.time = this.tConv24(this.sharerides.time);
        sharerides.returnTime = this.tConv24(this.sharerides.returnTime);
        this.chat.addChannel(sharerides.channel, this.userProfile.firstName, this.userProfile.lastName, this.userProfile.phone);
        console.log(sharerides.returnTime);
        sharerides.firstName = this.userProfile.firstName;
        sharerides.lastName = this.userProfile.lastName;
        sharerides.phoneNo = this.userProfile.phone;
        sharerides.email = this.userProfile.email;
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
        this.addetails.addrideDetails(sharerides).then(function (ref) {
            console.log(sharerides.origin);
        });
        if (this.form.valid) {
            var alert1 = this.alertCtrl.create({
                title: 'RIDE SHARE',
                subTitle: 'Sucessfull !',
                buttons: [{ text: 'OK',
                        handler: function () {
                            _this.navCtrl.push('TabsPage');
                            ;
                        }
                    }]
            });
            alert1.present();
        }
    };
    OfferridePage.prototype.goToHome = function () {
        this.navCtrl.push('TabsPage');
    };
    OfferridePage.prototype.slideChanged = function () {
        this.currentIndex = this.slides.getActiveIndex();
        //if(this.currentIndex==1 || this.currentIndex==2){
        // this.slides.autoHeight=true;
        //}
    };
    OfferridePage.prototype.ionViewWillEnter = function () {
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
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
    ], OfferridePage.prototype, "slides", void 0);
    OfferridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offerride',template:/*ion-inline-start:"H:\shareMyRide\src\pages\offerride\offerride.html"*/'<!--\n\n  Generated template for the OfferridePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<div *ngIf="[currentIndex]==0">\n\n\n\n <ion-navbar color="mycolor" hideBackButton>\n\n                  <ion-title>Offer a Ride </ion-title>\n\n                   <ion-buttons left style="margin-top:-4.8vh">\n\n    <button ion-button (click)="goToHome()">\n\n              <ion-icon style="font-size:23px" name="md-arrow-back"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n                  </ion-navbar>\n\n\n\n</div>\n\n\n\n<div *ngIf="[currentIndex]==1">\n\n<ion-navbar color="mycolor">\n\n    <ion-title>Offer a Ride</ion-title>\n\n     <!--  -->\n\n    <ion-buttons left style="margin-top:-4.8vh">\n\n    <button ion-button (click)="prev()">\n\n              <ion-icon style="font-size:23px" name="md-arrow-back"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n</ion-navbar></div>\n\n\n\n\n\n<div *ngIf="[currentIndex]==2">\n\n<ion-navbar color="mycolor">\n\n    <ion-title>Offer a Ride</ion-title>\n\n    <ion-buttons left style="margin-top:-4.8vh">\n\n    <button ion-button (click)="prev()">\n\n              <ion-icon style="font-size:23px" name="md-arrow-back"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n </div>\n\n\n\n\n\n</ion-header>\n\n    \n\n<ion-content >\n\n    \n\n    \n\n<!-- <p *ngIf="submitAttempt" style="color:red">Please fill out all details accurately.</p> -->\n\n         <form [formGroup]="form">\n\n           <ion-slides #slides (ionSlideDidChange)="slideChanged()">\n\n              \n\n                <ion-slide class="form1" #slide1  >\n\n                  \n\n                    \n\n                \n\n               <div  formGroupName="form1" >\n\n                 \n\n           <p *ngIf="submitAttempt" style="color:red;font-size:15px">*Please fill out all details accurately.</p>\n\n                 <ion-row  radio-group formControlName="radio"  [(ngModel)]="sharerides.tripType" >\n\n                    <ion-col>\n\n                         <ion-item no-padding>\n\n                        <ion-label text-center>One Way Trip</ion-label>\n\n              <ion-radio value="ONE WAY TRIP"  checked></ion-radio>\n\n        </ion-item>\n\n      </ion-col>\n\n        <ion-col >\n\n         <ion-item no-padding>\n\n            <ion-label text-center>Return Trip</ion-label>\n\n            \n\n                <ion-radio value="RETURN TRIP" ></ion-radio>\n\n              </ion-item>\n\n              </ion-col>\n\n              \n\n\n\n                       \n\n         </ion-row>\n\n        \n\n         \n\n         <!-- <p *ngIf="radio.errors && radio.errors.required" style="color:red;padding-left:70px;font-size:15px" \n\n             text-left no-lines no-margin>*Type of trip is required</p> -->\n\n         <ion-grid no-padding wrap responsive-md >\n\n   \n\n         \n\n            <ion-row responsive-md>\n\n               <ion-col>\n\n         <ion-item>\n\n          <ion-icon  item-left color="origin" name="ios-pin-outline"></ion-icon>\n\n         <ion-label floating>ORIGIN</ion-label>\n\n        \n\n         <ion-input class="autocomplete"  id="googlePlaces1" formControlName="origin" type="text" required [(ngModel)]="sharerides.origin"></ion-input>\n\n         \n\n         \n\n       <!-- / <h1 *ngIf="origin.errors.minlength">this is error</h1> -->\n\n         </ion-item> </ion-col></ion-row>\n\n      \n\n             <p *ngIf="origin.touched && origin.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n             text-left no-lines no-margin>*Origin is required</p> \n\n        <!-- <p *ngIf="origin.errors && origin.errors.required" style="color:red;padding-left:70px;font-size:15px" -->\n\n             <!-- text-left no-lines no-margin>*Origin is required</p> -->\n\n              <p *ngIf=" origin.errors && origin.errors.minlength" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Origin must be at least 3 characters long </p>\n\n               <p *ngIf="origin.errors && origin.errors.pattern" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Enter a valid origin </p>\n\n          \n\n          \n\n          \n\n          <ion-row responsive-md >\n\n               <ion-col>\n\n         <ion-item>\n\n          <ion-icon  item-left color="danger" name="ios-flag-outline"></ion-icon>\n\n         <ion-label floating>DESTINATION</ion-label>\n\n        \n\n         <ion-input  class="autocomplete" id="googlePlaces2"  formControlName="destination" type="text" required  [(ngModel)]="sharerides.destination"></ion-input>\n\n         \n\n         </ion-item> </ion-col></ion-row>\n\n          <p *ngIf="destination.touched && destination.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n             text-left no-lines no-margin>*Destination is required</p> \n\n            \n\n              <p *ngIf=" destination.errors && destination.errors.minlength" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Destination must be at least 3 characters long </p>\n\n               <p *ngIf="destination.errors && destination.errors.pattern" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Enter a valid destination </p>\n\n          \n\n          \n\n          \n\n           <ion-row responsive-md> \n\n               <ion-col>\n\n         <ion-item >\n\n          <ion-icon  item-left color="stopover" name="ios-flag-outline" ></ion-icon>\n\n         <ion-label floating>STOPOVER POINTS</ion-label>\n\n        \n\n         <ion-input  class="autocomplete" id="googlePlaces3" formControlName="stopover" type="text"  required [(ngModel)]="sharerides.stopover"></ion-input>\n\n         \n\n         </ion-item> </ion-col></ion-row>\n\n          <p *ngIf="stopover.touched && stopover.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n             text-left no-lines no-margin>*Stopover point is required</p> \n\n            <div *ngIf="stopover.errors">\n\n              <p *ngIf="stopover.errors.minlength" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Stopover must be at least 3 characters long </p>\n\n               <p *ngIf="stopover.errors && stopover.errors.pattern" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Enter a valid Stopover </p>\n\n           </div>\n\n           \n\n           \n\n           \n\n            <ion-row responsive-md>\n\n               <ion-col>\n\n        <ion-item >\n\n          <ion-icon  item-left color="dark" name="ios-calendar-outline" ></ion-icon>\n\n          <ion-label floating>START DATE</ion-label>\n\n         <ion-datetime formControlName="date" placeholder=" " displayFormat="DD-MM-YYYY" pickerFormat="DDD-MMM-YYYY" max="2020" [min]="today"name="date"  required\n\n            [(ngModel)]="sharerides.date"></ion-datetime>\n\n         </ion-item> </ion-col></ion-row>\n\n              <p *ngIf="date.touched && date.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Date is required</p>\n\n             \n\n             \n\n             \n\n              <ion-row responsive-md>\n\n               <ion-col>\n\n         <ion-item > \n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline" ></ion-icon>\n\n          <ion-label floating>START TIME</ion-label>\n\n         <ion-datetime formControlName="time" displayFormat="hh-mm A" pickerFormat="hh-mm A"   required\n\n           [(ngModel)]="sharerides.time"></ion-datetime>\n\n         </ion-item> </ion-col></ion-row>\n\n              <p *ngIf="time.touched && time.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n              text-left no-lines no-margin>*Time is required</p>\n\n              \n\n            <div *ngIf="radio.value ==\'RETURN TRIP\'">\n\n              <ion-row responsive-md >\n\n               <ion-col>\n\n         <ion-item >\n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline" ></ion-icon>\n\n          <ion-label floating>RETURN TIME</ion-label>\n\n         <ion-datetime formControlName="returntime" displayFormat="hh-mm A" pickerFormat="hh-mm A"  required\n\n            [(ngModel)]="sharerides.returnTime"></ion-datetime>\n\n         </ion-item>\n\n         </ion-col>\n\n           </ion-row>\n\n             <p *ngIf="returntime.value== \'null\'" style="color:red;padding-left:70px;font-size:15px" \n\n                      text-left no-lines no-margin>*Return time is required</p> \n\n                      \n\n               </div> \n\n         </ion-grid>\n\n         </div>\n\n        \n\n  </ion-slide>\n\n\n\n\n\n\n\n\n\n  <ion-slide #slide2>\n\n <div formGroupName="form2">\n\n  \n\n      \n\n <ion-list-header no-lines>FARE PER CUSTOMER</ion-list-header>\n\n<p *ngIf="submitAttempt" style="color:red;font-size:15px">*Please fill out all details accurately.</p> \n\n            \n\n         <ion-card>\n\n         <ion-card-content>\n\n          <ion-list>\n\n  \n\n \n\n    \n\n           <ion-item >  \n\n           <ion-icon  item-left color="origin" name="ios-pin-outline"></ion-icon>\n\n           <ion-label floating>From Location</ion-label>\n\n           <ion-input value= "{{origin.value}}" readonly="true"> </ion-input>    </ion-item>\n\n\n\n          \n\n           <ion-item>  <ion-icon  item-left color="danger" name="ios-flag-outline"></ion-icon>\n\n           <ion-label floating>To Location</ion-label>\n\n           <ion-input value="{{destination.value}}" readonly="true"></ion-input></ion-item>\n\n            \n\n             \n\n             <ion-row><ion-col width-4 OFFSET-7><ion-item>\n\n             \n\n           <ion-label >Rs.</ion-label>\n\n           <ion-input  type="number" placeholder="Enter" formControlName="price1" [(ngModel)]="sharerides.price1"></ion-input></ion-item>\n\n           \n\n            </ion-col>\n\n            </ion-row>\n\n           <p *ngIf="price1.touched && price1.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n          text-left no-lines no-margin>*Price is required</p>\n\n</ion-list>\n\n</ion-card-content></ion-card>\n\n      \n\n        \n\n<ion-card>\n\n         <ion-card-content>\n\n          <ion-list>\n\n  \n\n \n\n    \n\n           <ion-item >  \n\n           <ion-icon  item-left color="origin" name="ios-pin-outline"></ion-icon>\n\n           <ion-label floating>From Location</ion-label>\n\n           <ion-input value= "{{origin.value}}" readonly="true"> </ion-input>    </ion-item>\n\n\n\n          \n\n           <ion-item>  <ion-icon  item-left color="danger" name="ios-flag-outline"></ion-icon>\n\n           <ion-label floating>To Location</ion-label>\n\n           <ion-input value="{{stopover.value}}" readonly="true" ></ion-input></ion-item>\n\n            \n\n             \n\n             <ion-row><ion-col width-4 OFFSET-7><ion-item>\n\n           <ion-label >Rs.</ion-label>\n\n           <ion-input type="number" placeholder="Enter" formControlName="price2" [(ngModel)]="sharerides.price2"></ion-input></ion-item>\n\n            </ion-col></ion-row>\n\n            <p *ngIf="price2.touched && price2.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n          text-left no-lines no-margin>*Price is required</p>\n\n</ion-list>\n\n</ion-card-content></ion-card>\n\n<ion-card>\n\n         <ion-card-content>\n\n          <ion-list>\n\n  \n\n \n\n    \n\n           <ion-item >  \n\n           <ion-icon  item-left color="origin" name="ios-pin-outline"></ion-icon>\n\n           <ion-label floating>From Location</ion-label>\n\n           <ion-input value= "{{stopover.value}}" readonly="true"> </ion-input>    </ion-item>\n\n\n\n          \n\n           <ion-item>  <ion-icon  item-left color="danger" name="ios-flag-outline"></ion-icon>\n\n           <ion-label floating>To Location</ion-label>\n\n           <ion-input value="{{destination.value}}" readonly="true"></ion-input></ion-item>\n\n            \n\n             \n\n             <ion-row><ion-col width-4 offset-7><ion-item>\n\n           <ion-label >Rs.</ion-label>\n\n           <ion-input  type="number" placeholder="Enter" formControlName="price3" [(ngModel)]="sharerides.price3"></ion-input></ion-item>\n\n            </ion-col></ion-row>\n\n            <p *ngIf="price3.touched && price3.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n          text-left no-lines no-margin>*Price is required</p>\n\n</ion-list>\n\n</ion-card-content></ion-card>  \n\n  \n\n  \n\n  </div>\n\n  </ion-slide>\n\n\n\n\n\n\n\n\n\n\n\n  <ion-slide #slide3>\n\n  \n\n\n\n\n\n\n\n<!-- style="margin-top:10vh" -->\n\n<div   formGroupName="form3">\n\n  <ion-list>\n\n    <ion-item no-lines>\n\n     <ion-icon  item-left color="mycolor" name="ios-subway-outline"></ion-icon>\n\n           <ion-label>\n\n             SELECT YOUR VEHICLE :\n\n             </ion-label></ion-item>\n\n             \n\n  <ion-row radio-group formControlName="selectradio" [(ngModel)]="sharerides.vehicle"> \n\n\n\n\n\n  <ion-col> <ion-item>\n\n              <ion-label>Car</ion-label>\n\n               <ion-radio value="Car" checked></ion-radio> </ion-item></ion-col>\n\n\n\n               <ion-col>  <ion-item>\n\n              \n\n\n\n              <ion-label>Bike</ion-label>\n\n               <ion-radio value="Bike"></ion-radio> </ion-item></ion-col>\n\n\n\n\n\n               <ion-col>  <ion-item>\n\n              \n\n\n\n              <ion-label>Taxi</ion-label>\n\n               <ion-radio value="Taxi"></ion-radio> </ion-item></ion-col>\n\n   \n\n  </ion-row>  \n\n <p *ngIf="selectradio.errors&& selectradio.errors.required" style="color:red;padding-left:70px;font-size:15px"\n\n             text-left no-lines no-margin>*Seats Available are required</p>       \n\n          <br>\n\n           <ion-item no-lines>\n\n           <ion-icon  item-left color="mycolor" name="ios-person-add-outline"></ion-icon>\n\n             <ion-label>SEATS AVAILABLE :</ion-label></ion-item>\n\n           \n\n           <ion-item> \n\n\n\n                 <ion-label>Available Seats:</ion-label>\n\n                 <ion-select value="seats" formControlName="selectlist" [(ngModel)]="sharerides.seats">\n\n                   <ion-option value="1"> 1 seat</ion-option>\n\n                   <ion-option value="2"> 2 seats</ion-option>\n\n                   <ion-option value="3"> 3 seats</ion-option>\n\n                   <ion-option value="4"> 4 seats</ion-option>\n\n                   <ion-option value="5"> 5 seats</ion-option>\n\n                   <ion-option value="6"> 6 seats</ion-option>\n\n                   <ion-option value="7"> 7 seats</ion-option>\n\n                   <ion-option value="8"> 8 seats</ion-option>\n\n                 </ion-select>\n\n            </ion-item>\n\n            \n\n            <p *ngIf="selectlist.touched && selectlist.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n             text-left no-lines no-margin>*Seats Available are required</p>\n\n            <br>\n\n            <ion-item no-lines>\n\n            <ion-icon  item-left color="mycolor" name="ios-contacts-outline"></ion-icon>\n\n             <ion-label> PREFERENCES :</ion-label></ion-item>\n\n           <ion-item> \n\n                 \n\n                 <ion-label>Gender</ion-label>\n\n                 <ion-select value="gender" formControlName="selectgender" [(ngModel)]="sharerides.gender">\n\n                   <ion-option value="Male">Male</ion-option>\n\n                   <ion-option value="Female">Female</ion-option>\n\n                   <ion-option value="Both">Both</ion-option> \n\n                 </ion-select>\n\n            </ion-item>\n\n            <p *ngIf="selectgender.touched && selectgender.invalid" style="color:red;padding-left:70px;font-size:15px"\n\n             text-left no-lines no-margin>*Preference required</p>\n\n           <br>\n\n           <ion-item>\n\n           <ion-icon  item-left color="mycolor" name="ios-people-outline"></ion-icon>\n\n            <ion-label>CHANNEL :</ion-label>\n\n</ion-item>           <ion-item>\n\n             \n\n\n\n    <ion-textarea formControlName="channel" maxLength="50" rows="2" placeholder="Enter the channel name to provide updates to users"\n\n       [(ngModel)]="sharerides.channel" required></ion-textarea>\n\n  </ion-item>\n\n   <p *ngIf="channel.touched && channel.invalid" style="color:red;padding-left:15px;font-size:15px"\n\n             text-left no-lines no-margin>*Channel Name required</p>\n\n              <p *ngIf="channel.errors && channel.errors.pattern" style="color:red;padding-left:15px;font-size:15px"\n\n              text-left no-lines no-margin>*Enter a valid Channel Name</p>\n\n\n\n  </ion-list></div>\n\n  </ion-slide>\n\n</ion-slides>\n\n\n\n\n\n</form>\n\n    </ion-content>\n\n    <ion-footer>\n\n <div *ngIf="[currentIndex]==0"> \n\n     <button block ion-button no-margin  color="mycolor" (click)="next()">Next</button>\n\n     <!-- <div *ngIf="!form1.valid"> -->\n\n      <!-- <p>please fill all the details</p></div> -->\n\n     \n\n     </div>\n\n     <div *ngIf="[currentIndex]==1"> \n\n     <button  block ion-button no-margin  color="mycolor" (click)="next2()">Next</button></div>\n\n     <div *ngIf="[currentIndex]==2"> \n\n     <button type="submit" block ion-button no-margin  color="mycolor" (click)="save(sharerides)" \n\n     [disabled]="!form.valid" >Publish</button></div>\n\n    </ion-footer>\n\n    '/*ion-inline-end:"H:\shareMyRide\src\pages\offerride\offerride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_shareride_shareride_service__["a" /* sharerideService */], __WEBPACK_IMPORTED_MODULE_6__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], OfferridePage);
    return OfferridePage;
}());

//# sourceMappingURL=offerride.js.map

/***/ })

});
//# sourceMappingURL=11.js.map