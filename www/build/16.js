webpackJsonp([16],{

/***/ 594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__help__ = __webpack_require__(633);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HelpPageModule = /** @class */ (function () {
    function HelpPageModule() {
    }
    HelpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__help__["a" /* HelpPage */]),
            ],
        })
    ], HelpPageModule);
    return HelpPageModule;
}());

//# sourceMappingURL=help.module.js.map

/***/ }),

/***/ 633:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { NotificationPage } from '../notification/notification';
/**
 * Generated class for the HelpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HelpPage = /** @class */ (function () {
    function HelpPage(navCtrl, navParams, modalcntrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalcntrl = modalcntrl;
    }
    HelpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HelpPage');
    };
    HelpPage.prototype.onNotification = function () {
        var modal = this.modalcntrl.create('NotificationPage');
        modal.present();
    };
    HelpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-help',template:/*ion-inline-start:"H:\shareMyRide\src\pages\help\help.html"*/'<ion-header>\n\n  <ion-navbar color="mycolor">\n\n \n\n   <ion-buttons left >\n\n    <button ion-button  menuToggle swipeEnabled="true">\n\n              <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n    </ion-buttons>  \n\n     <ion-buttons right >\n\n    <button ion-button (click)="onNotification()">\n\n              <ion-icon style="font-size:23px" name="md-notifications"></ion-icon>\n\n              </button>\n\n    </ion-buttons>               \n\n    <ion-title align="center" >Help</ion-title>\n\n    <!-- style="margin-right:8vh" -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding >\n\n<ion-grid no-padding>\n\n<ion-list>\n\n<ion-row  no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;HOW CAN I SHARE MY RIDE </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n      Click on the OFFER A RIDE button on home tab and submit the form to share a ride\n\n\n\n</p></ion-col></ion-row>\n\n\n\n\n\n<ion-row ><ion-col >\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;HOW CAN I FIND MY RIDE </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline;">\n\n      Click on the FIND A RIDE button on home tab and submit the find the desired ride\n\n\n\n</p></ion-col></ion-row>\n\n\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;CAN I CHANGE MY PROFILE DETAILS </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n       Goto the sidemenu and click on the PROFILE option to check your profile details and click\n\n       the top right option to edit the profile\n\n\n\n</p></ion-col></ion-row>\n\n\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;CAN I SHARE MY TRIP DETAILS </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n      You can share your trip details by visting MY TRIPS page and click on the button provided for each specific trip\n\n\n\n</p></ion-col></ion-row>\n\n\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;ON WHICH SOCIAL MEDIA PLATFORMS <br>&nbsp;&nbsp;&nbsp;CAN I SHARE MY TRIP </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n      You can share your trip on INSTAGRAM, FACEBOOK AND WHATSAPP\n\n\n\n</p></ion-col></ion-row>\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;CAN I UPDATE MY TRIP DETAILS </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n     NO, you can\'t update your trip details.However you can delete your trip on MY TRIPS Page and then recreate your trip on SHARE A RIDE PAGE\n\n\n\n</p></ion-col></ion-row>\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;WHAT ARE CHANNELS</ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n    CHANNELS are used to send update to ride seekers who are intersted in taking a ride with you.\n\n    Ride Seekers can also ask their queries regarding to the trip on the channel created by ride owner\n\n\n\n</p></ion-col></ion-row>\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;HOW CAN I INFORM THE RIDE OWNER\n\n     <br>&nbsp;&nbsp;&nbsp;THAT I AM INTERSTED IN HIS TRIP </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n    You can simply send a message to the user by clicking on the message button in FIND A RIDE page and accordingly the owner will get \n\n    updated <br> OR <br> You can simply inform the owner by messaging him via his channel\n\n\n\n</p></ion-col></ion-row>\n\n\n\n<ion-row no-padding><ion-col>\n\n    <ion-list-header color="mycolor" >\n\n     <ion-icon name="md-arrow-dropright" >&nbsp;&nbsp;HOW CAN I PAY THE OWNER </ion-icon>\n\n    </ion-list-header></ion-col></ion-row>\n\n\n\n<ion-row  ><ion-col style="top:-3vh">\n\n<p style="font-family:open-sans;font-size:18px; padding: 0px 5px 0px 1px; color:rgb(88, 85, 85);display: inline">\n\n      We are working on the payment system as of now you can ask the owner how to send the payment via the channel created by him\n\n\n\n</p></ion-col></ion-row>\n\n</ion-list>\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\shareMyRide\src\pages\help\help.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HelpPage);
    return HelpPage;
}());

//# sourceMappingURL=help.js.map

/***/ })

});
//# sourceMappingURL=16.js.map