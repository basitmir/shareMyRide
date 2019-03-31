webpackJsonp([13],{

/***/ 599:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoredetailsPageModule", function() { return MoredetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__moredetails__ = __webpack_require__(639);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MoredetailsPageModule = /** @class */ (function () {
    function MoredetailsPageModule() {
    }
    MoredetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__moredetails__["a" /* MoredetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__moredetails__["a" /* MoredetailsPage */]),
            ],
        })
    ], MoredetailsPageModule);
    return MoredetailsPageModule;
}());

//# sourceMappingURL=moredetails.module.js.map

/***/ }),

/***/ 639:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoredetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal'
/**
 * Generated class for the MoredetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MoredetailsPage = /** @class */ (function () {
    function MoredetailsPage(navCtrl, navParams, message, auth, data, alertCntrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.message = message;
        this.auth = auth;
        this.data = data;
        this.alertCntrl = alertCntrl;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile;
            });
        });
    }
    MoredetailsPage.prototype.ionViewWillLoad = function () {
        this.shareDetails = this.navParams.get('shareDetails');
        console.log(this.navParams.get('shareDetails'));
    };
    MoredetailsPage.prototype.back = function () {
        this.navCtrl.popTo('FindridePage');
    };
    MoredetailsPage.prototype.messages = function (value) {
        var _this = this;
        if (value == '1') {
            var num = this.shareDetails.phoneNo.toString();
            this.message.send(num, this.userProfile.firstName + this.userProfile.lastName + ' ' + 'wants to join with you from'
                + ' ' + this.shareDetails.origin + ' ' + 'to' + ' ' + this.shareDetails.destination + ' ' + 'http://localhost:8100/#/ShareMy-Ride')
                .then(function () {
                var alert = _this.alertCntrl.create({
                    title: 'Message Send',
                    subTitle: 'Sucessfull !',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                var alert = _this.alertCntrl.create({
                    title: 'Message Not Send',
                    subTitle: 'Please try after Sometime',
                    buttons: ['OK']
                });
                alert.present();
            });
        } //if close
        else if (value == '2') {
            var num = this.shareDetails.phoneNo.toString();
            this.message.send(num, this.userProfile.firstName + this.userProfile.lastName + ' ' + 'wants to join with you from'
                + ' ' + this.shareDetails.origin + ' ' + 'to' + ' ' + this.shareDetails.stopover + ' ' + 'http://localhost:8100/#/ShareMy-Ride')
                .then(function () {
                var alert = _this.alertCntrl.create({
                    title: 'Message Send',
                    subTitle: 'Sucessfull !',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function () {
                var alert = _this.alertCntrl.create({
                    title: 'Message Not Send',
                    subTitle: 'Please try after Sometime',
                    buttons: ['OK']
                });
                alert.present();
            });
        } //else if close
        else {
            var num = this.shareDetails.phoneNo.toString();
            this.message.send(num, this.userProfile.firstName + this.userProfile.lastName + ' ' + 'wants to join with you from'
                + ' ' + this.shareDetails.stopover + ' ' + 'to' + ' ' + this.shareDetails.destination + ' ' + 'http://localhost:8100/#/ShareMy-Ride')
                .then(function () {
                var alert = _this.alertCntrl.create({
                    title: 'Message Send',
                    subTitle: 'Sucessfull !',
                    buttons: ['OK']
                });
                alert.present();
            }).catch(function (error) {
                var alert = _this.alertCntrl.create({
                    title: 'Message Not Send',
                    subTitle: 'Please try after Sometime',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    MoredetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-moredetails',template:/*ion-inline-start:"H:\shareMyRide\src\pages\moredetails\moredetails.html"*/'<!--\n\n  Generated template for the MoredetailsPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar color="mycolor" hideBackButton>\n\n                  <ion-title>Details</ion-title>\n\n                   <ion-buttons left>\n\n    <button ion-button (click)="back()">\n\n              <ion-icon style="font-size:23px" name="md-arrow-back"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n                  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content> \n\n<ion-card no-padding>  \n\n         <ion-card-content no-padding>\n\n  <ion-list  >\n\n             \n\n     <ion-item>\n\n\n\n        <ion-avatar item-left>\n\n\n\n             <img src="/assets/imgs/profile.png" alt="Avatar">\n\n            </ion-avatar>\n\n             <h2 style="color:#009f75">{{shareDetails?.firstName}} {{shareDetails?.lastName}}</h2> \n\n             <p>{{shareDetails?.phoneNo}}</p> \n\n             </ion-item> \n\n                       <ion-label text-center color="mycolor"style="font-weight:bold">{{shareDetails?.tripType |uppercase}}</ion-label>\n\n                      <marquee style="font-size:12px;color:rgb(88, 85, 85);"direction="right" onmouseover="this.stop()" onmouseout="this.start()">\n\n                      For Updates Vist My Channel <span style="font-weight:bold;font-size:12px">#{{shareDetails?.channel}}</span></marquee>\n\n          <div class="size">\n\n             <ion-item>\n\n          <ion-icon  item-left color="origin" name="ios-pin-outline"><span>&nbsp;&nbsp;&nbsp;ORIGIN :&nbsp;\n\n           <span style="color:green;font-size:15px">{{shareDetails?.origin | titlecase}}</span></span></ion-icon>\n\n         <!-- <ion-label >ORIGIN:</ion-label>  -->\n\n          <!-- <ion-label style="font-weight:bold;font-size:24px">{{shareDetails.origin | titlecase}}</ion-label>  -->\n\n     </ion-item>\n\n \n\n              <ion-item>\n\n          <ion-icon  item-left color="danger" name="ios-flag-outline"><span>&nbsp;&nbsp;&nbsp;DESTINATION :&nbsp;\n\n          <span style="color:#f53d3d;font-size:15px">{{shareDetails?.destination | titlecase}}</span> </span></ion-icon>\n\n         \n\n               </ion-item>\n\n           \n\n            <ion-item>\n\n            <ion-icon  item-left color="stopover" name="ios-flag-outline" ><span>&nbsp;&nbsp;&nbsp;STOPOVER POINTS :&nbsp;\n\n           <span style="color:gold;font-size:15px">{{shareDetails?.stopover | titlecase}}</span> </span></ion-icon>\n\n         \n\n          </ion-item>      \n\n\n\n          \n\n           <ion-item>\n\n          <ion-icon  item-left color="danger" name="ios-bus-outline"><span>&nbsp;&nbsp;&nbsp;Vehicle :&nbsp;\n\n           <span style="color:#f53d3d;font-size:15px">{{shareDetails?.vehicle}}</span></span></ion-icon>\n\n         \n\n         </ion-item>\n\n          <ion-item>\n\n          <ion-icon  item-left color="dark" name="ios-add-circle-outline"><span>&nbsp;&nbsp;&nbsp;Available Seats :&nbsp;\n\n           <span style="color:#222;font-size:15px">{{shareDetails?.seats}}</span></span></ion-icon>\n\n         \n\n         </ion-item>\n\n          <ion-item>\n\n          <ion-icon  item-left color="secondary" name="ios-people-outline"><span>&nbsp;&nbsp;&nbsp;Preference :&nbsp;\n\n           <span style="color:#32db64;font-size:15px">{{shareDetails?.gender}}</span></span></ion-icon>\n\n         \n\n         </ion-item>\n\n         <ion-item >\n\n          <ion-icon  item-left color="dark" name="ios-calendar-outline" ><span>&nbsp;&nbsp;&nbsp;DEPARTURE DATE :&nbsp;\n\n           <span style="color:#222;font-size:15px">{{shareDetails?.date}}</span> </span></ion-icon>\n\n        \n\n         </ion-item>  \n\n\n\n         <ion-item > \n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline" ><span>&nbsp;&nbsp;&nbsp;DEPARTURE TIME :&nbsp;\n\n          <span style="color:#2d4373;font-size:15px">{{shareDetails?.time}}</span> </span></ion-icon>\n\n          \n\n         </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline"><span>&nbsp;&nbsp;&nbsp;RETURN TIME :&nbsp;\n\n           <span style="color:#2d4373;font-size:15px">{{shareDetails?.returnTime}}</span></span></ion-icon>\n\n         \n\n         </ion-item>\n\n         <ion-item>\n\n                  <ion-list-header text-center>FARE PER CUSTOMER</ion-list-header> \n\n         </ion-item>\n\n          <ion-item>\n\n          <ion-row><ion-col>\n\n          - {{shareDetails?.origin}}</ion-col></ion-row>\n\n           <ion-row><ion-col width-4 offset-7>\n\n           Rs. {{shareDetails?.price1}}/=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n            <!-- <button ion-button clear (click)="deleteDetails(shareDetails)">Join</button> -->\n\n            <ion-fab middle>\n\n   <button ion-fab mini color="mywhite" (click) ="messages(\'1\')"><ion-icon color="mycolor" name="md-chatboxes"></ion-icon></button>\n\n </ion-fab>\n\n  <!-- <ion-fab bottom >\n\n   <button ion-fab mini color="mywhite" (click) ="pay()"><ion-icon color="mycolor" name="md-chatboxes"></ion-icon></button>\n\n </ion-fab>-->\n\n            </ion-col>\n\n           </ion-row>\n\n           <ion-row><ion-col>\n\n         - {{shareDetails?.destination}}\n\n         </ion-col></ion-row>\n\n          </ion-item>\n\n          <hr>\n\n           <ion-item><ion-row><ion-col>\n\n          - {{shareDetails?.origin}}</ion-col></ion-row>\n\n           <ion-row><ion-col width-4 offset-7>\n\n           Rs. {{shareDetails?.price2}}/=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n          <ion-fab middle >\n\n   <button ion-fab mini color="mywhite" (click) ="messages(\'2\')"><ion-icon color="mycolor" name="md-chatboxes"></ion-icon></button>\n\n </ion-fab> \n\n           \n\n           </ion-col></ion-row>\n\n           <ion-row><ion-col>\n\n         - {{shareDetails?.stopover}}</ion-col></ion-row>\n\n          </ion-item>\n\n           <hr>\n\n           <ion-item><ion-row><ion-col>\n\n          - {{shareDetails?.stopover}}</ion-col></ion-row>\n\n           <ion-row><ion-col width-4 offset-7>\n\n           Rs. {{shareDetails?.price3}}/=&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\n\n           <ion-fab middle >\n\n         <button ion-fab mini color="mywhite" (click) ="messages(\'3\')"><ion-icon color="mycolor" name="md-chatboxes"></ion-icon></button>\n\n         </ion-fab> \n\n           </ion-col></ion-row>\n\n           <ion-row><ion-col>\n\n         - {{shareDetails?.destination}}</ion-col></ion-row>\n\n          </ion-item>\n\n         \n\n     </div>\n\n      </ion-list> \n\n  </ion-card-content>\n\n  </ion-card> \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"H:\shareMyRide\src\pages\moredetails\moredetails.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sms__["a" /* SMS */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], MoredetailsPage);
    return MoredetailsPage;
}());

//# sourceMappingURL=moredetails.js.map

/***/ })

});
//# sourceMappingURL=13.js.map