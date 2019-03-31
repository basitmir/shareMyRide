webpackJsonp([7],{

/***/ 600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MytripsPageModule", function() { return MytripsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mytrips__ = __webpack_require__(640);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MytripsPageModule = /** @class */ (function () {
    function MytripsPageModule() {
    }
    MytripsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__mytrips__["a" /* MytripsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__mytrips__["a" /* MytripsPage */]),
            ],
        })
    ], MytripsPageModule);
    return MytripsPageModule;
}());

//# sourceMappingURL=mytrips.module.js.map

/***/ }),

/***/ 614:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = __webpack_require__(17);
var map_1 = __webpack_require__(330);
rxjs_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 616:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(614);
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 640:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MytripsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shareride_shareride_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_chat_service_chat_service__ = __webpack_require__(331);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








//import { Channel } from '../../models/channels/channels.interface';
var MytripsPage = /** @class */ (function () {
    // shareridelist:sharerides[]=shareRideList;
    function MytripsPage(navCtrl, navParams, getdetails, auth, data, toast, sharing, modalcntrl, chat) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getdetails = getdetails;
        this.auth = auth;
        this.data = data;
        this.toast = toast;
        this.sharing = sharing;
        this.modalcntrl = modalcntrl;
        this.chat = chat;
        //  this.shareRideDetails$=this.getdetails.getrideDetails().valueChanges();
        //console.log(this.shareRideDetails$);
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile;
                // console.log(this.userProfile)
                _this.filteredData$ = _this.getdetails.filterData(_this.userProfile.email).snapshotChanges().map(function (changes) {
                    return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
                }); //filteredData$ close
                /*this.channelListFilter=this.chat.filterData(this.userProfile.phone).snapshotChanges().map(
                  changes=>{
                     return changes.map(c=>({
                       key: c.payload.key, ...c.payload.val()
                      
                       
                     }))
                     
                  });*/
            });
        }); //user close
        /*this.shareRideDetails$= this.getdetails.getrideDetails().snapshotChanges().map(
          changes=>{
             return changes.map(c=>({
               key: c.payload.key, ...c.payload.val()
               
               
             }))
             
          });
    
          console.log(this.getdetails.getrideDetails().valueChanges());*/
    } //constructor close
    MytripsPage.prototype.deleteDetails = function (sharerides) {
        var _this = this;
        //console.log(channel);
        // this.chat.removeChannel(channel);
        this.getdetails.removeDetails(sharerides)
            .then(function () {
            _this.toast.create({
                message: "Deleted !",
                duration: 3000
            }).present();
        });
    };
    MytripsPage.prototype.whatsappshare = function (sharerides) {
        this.sharing.shareViaWhatsApp(sharerides.firstName + sharerides.lastName + ' ' + 'is going to' + ' ' + sharerides.destination + ' '
            + '\nJoin him on' + '  ' + sharerides.date + ' ' + '\nFor more info install ShareMy Ride...', null, 'http://localhost:8100/#/ShareMy-Ride')
            .then(function () {
            console.log("Message sent !");
        }).catch(function (error) {
            console.log(error);
        });
    };
    MytripsPage.prototype.fbshare = function (sharerides) {
        this.sharing.shareViaFacebook(sharerides.firstName + sharerides.lastName + ' ' + 'is going to' + ' ' + sharerides.destination + ' '
            + '\nJoin him on' + '  ' + sharerides.date + ' ' + '\nFor more info install ShareMy Ride...', null, 'http://localhost:8100/#/ShareMy-Ride')
            .then(function () {
            console.log("Message sent !");
        }).catch(function (error) {
            console.log(error);
        });
    };
    MytripsPage.prototype.instashare = function (sharerides) {
        this.sharing.shareViaInstagram(sharerides.firstName + sharerides.lastName + ' ' + 'is going to' + ' ' + sharerides.destination + ' '
            + '\nJoin him on' + '  ' + sharerides.date + ' ' + '\nFor more info install ShareMy Ride...' + '\nhttp://localhost:8100/#/ShareMy-Ride', null)
            .then(function () {
            console.log("Message sent !");
        }).catch(function (error) {
            console.log(error);
        });
    };
    MytripsPage.prototype.onNotification = function () {
        var modal = this.modalcntrl.create('NotificationPage');
        modal.present();
    };
    MytripsPage.prototype.goToHome = function () {
        this.navCtrl.push('TabsPage');
    };
    MytripsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-mytrips',template:/*ion-inline-start:"H:\shareMyRide\src\pages\mytrips\mytrips.html"*/'<!--\n\n  Generated template for the FindridePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n -->\n\n<ion-header>\n\n  <ion-navbar color="mycolor" hideBackButton>\n\n \n\n     <ion-buttons left>\n\n    <button ion-button (click)="goToHome()">\n\n              <ion-icon style="font-size:23px" color="mywhite" name="md-arrow-back"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n     <ion-buttons right >\n\n    <button ion-button (click)="onNotification()">\n\n              <ion-icon color="mywhite"style="font-size:23px" name="md-notifications"></ion-icon>\n\n              </button>\n\n    </ion-buttons>               \n\n    <ion-title align="center" >My Trips</ion-title>\n\n    <!-- style="margin-right:8vh" -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n<!-- <ng-container *ngClass="let channel of channelListFilter | async"> -->\n\n <ion-card no-padding  *ngFor="let shareDetails of filteredData$ | async">\n\n         \n\n   <!-- let channel of channelListFilter  -->\n\n         <ion-card-content no-padding >\n\n  <ion-list>\n\n             \n\n     <ion-item detail-push navPush=\'MoredetailsPage\' [navParams]=\'{shareDetails:shareDetails}\'>\n\n\n\n        <ion-avatar item-left>\n\n\n\n             <img src="/assets/imgs/me.jpg" alt="Avatar">\n\n            </ion-avatar>\n\n             <h2 style="color:#009f75">{{shareDetails.firstName}} {{shareDetails.lastName}}</h2> \n\n             <p>{{shareDetails.phoneNo}} {{shareDetails.length}}</p> \n\n             </ion-item> \n\n                       <ion-label text-center color="mycolor"style="font-weight:bold">{{shareDetails.tripType |uppercase}}</ion-label> \n\n          <div class="size">\n\n             <ion-item>\n\n          <ion-icon  item-left color="origin" name="ios-pin-outline"><span>&nbsp;&nbsp;&nbsp;ORIGIN :&nbsp;\n\n           <span style="color:green;font-size:15px">{{shareDetails.origin | titlecase}}</span></span></ion-icon>\n\n         <!-- <ion-label >ORIGIN:</ion-label>  -->\n\n          <!-- <ion-label style="font-weight:bold;font-size:24px">{{shareDetails.origin | titlecase}}</ion-label>  -->\n\n     </ion-item>\n\n           \n\n              <ion-item>\n\n          <ion-icon  item-left color="danger" name="ios-flag-outline"><span>&nbsp;&nbsp;&nbsp;DESTINATION :&nbsp;\n\n          <span style="color:#f53d3d;font-size:15px">{{shareDetails.destination | titlecase}} </span> </span></ion-icon>\n\n         \n\n               </ion-item>\n\n               <!--  \n\n            <ion-item>\n\n            <ion-icon  item-left color="stopover" name="ios-flag-outline" ><span>&nbsp;&nbsp;&nbsp;STOPOVER POINTS :&nbsp;\n\n           <span style="color:gold;font-size:15px">{{shareDetails.stopover | titlecase}}</span> </span></ion-icon>\n\n         \n\n          </ion-item>      \n\n\n\n          <ion-item >\n\n          <ion-icon  item-left color="dark" name="ios-calendar-outline" ><span>&nbsp;&nbsp;&nbsp;DEPARTURE DATE :&nbsp;\n\n           <span style="color:#222;font-size:15px">{{shareDetails.date}}</span> </span></ion-icon>\n\n        \n\n         </ion-item>  \n\n\n\n         <ion-item > \n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline" ><span>&nbsp;&nbsp;&nbsp;DEPARTURE TIME :&nbsp;\n\n          <span style="color:#2d4373;font-size:15px">{{shareDetails.time}}</span> </span></ion-icon>\n\n          \n\n         </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline"><span>&nbsp;&nbsp;&nbsp;RETURN TIME :&nbsp;\n\n           <span style="color:#2d4373;font-size:15px">{{shareDetails.returnTime}}</span></span></ion-icon>\n\n         \n\n         </ion-item>-->\n\n        \n\n        <ion-item >\n\n         <ion-fab right no-padding no-margin style="margin-top:-30px">\n\n   <button ion-fab mini  color="mywhite"><ion-icon color="mycolor"name="md-arrow-dropleft-circle"></ion-icon></button>\n\n   <ion-fab-list side="left">\n\n     <button ion-fab mini color="mywhite" (click) ="deleteDetails(shareDetails)"><ion-icon color="danger"name="ios-trash"></ion-icon></button>\n\n     <button ion-fab mini  color="mywhite" (click)="fbshare(shareDetails)"> <ion-icon color="fbcolor" name="logo-facebook"></ion-icon></button>\n\n     <button ion-fab mini  color="mywhite"(click)="whatsappshare(shareDetails)"><ion-icon style="color:#25d366" name="logo-whatsapp"></ion-icon></button>\n\n     <button ion-fab mini  color="mywhite"(click)="instashare(shareDetails)"><ion-icon style="color:#e4405f" name="logo-instagram"></ion-icon></button>\n\n   </ion-fab-list>\n\n   </ion-fab>\n\n        </ion-item>\n\n\n\n     </div>\n\n        \n\n      </ion-list> \n\n     \n\n       <!-- <button ion-button block clear color="danger" (click)="deleteDetails(shareDetails)">Delete</button> -->\n\n     \n\n  </ion-card-content>\n\n \n\n  </ion-card> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"H:\shareMyRide\src\pages\mytrips\mytrips.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shareride_shareride_service__["a" /* sharerideService */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_chat_service_chat_service__["a" /* ChatServiceProvider */]])
    ], MytripsPage);
    return MytripsPage;
}());

//# sourceMappingURL=mytrips.js.map

/***/ })

});
//# sourceMappingURL=7.js.map