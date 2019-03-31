webpackJsonp([15],{

/***/ 595:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(634);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
            ],
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 634:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
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


//import { OfferridePage } from '../offerride/offerride';
//import { FindridePage } from '../findride/findride';
//import { NotificationPage } from '../notification/notification';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, modalcntrl) {
        this.navCtrl = navCtrl;
        this.modalcntrl = modalcntrl;
    }
    HomePage.prototype.goTo = function () {
        this.navCtrl.push('OfferridePage');
    };
    HomePage.prototype.goToRide = function () {
        this.navCtrl.push('FindridePage');
    };
    HomePage.prototype.onNotification = function () {
        var modal = this.modalcntrl.create('NotificationPage');
        modal.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"H:\shareMyRide\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar color="mycolor">\n\n \n\n   <ion-buttons left >\n\n    <button ion-button  menuToggle>\n\n              <ion-icon name="menu"></ion-icon>\n\n              </button>\n\n    </ion-buttons>          \n\n    <ion-buttons right>\n\n    <button ion-button (click)="onNotification()">\n\n              <ion-icon style="font-size:23px" name="md-notifications"></ion-icon>\n\n              </button>\n\n    </ion-buttons>        \n\n    <ion-title>Home</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n<div class="block1">\n\n         \n\n           <!-- <p  style="font-family:open-sans;font-size:16px">Forgot your password?</p> -->\n\n         <!-- <div text-center> -->\n\n           <!-- <button class="loginbutton" ion-button color=mycolor round>Offer A Ride</button> -->\n\n           <!-- </div>  -->\n\n     <div text-center>\n\n        \n\n         <div> <ion-grid ><ion-row><ion-col style="top:16vh">\n\n          <button class="loginbutton" ion-button color=mycolor round (click)="goTo()">Offer A Ride</button><br>\n\n            <p class="text" style="font-family:open-sans;font-size:16px">Share your journey with co-travlers and cover all your fuel costs!</p>\n\n           </ion-col></ion-row></ion-grid></div></div>\n\n\n\n </div>\n\n\n\n\n\n\n\n<div class="block2"> \n\n\n\n\n\n      <!-- <div text-center> -->\n\n           <!-- <button class="loginbutton" ion-button color=mycolor round>Find A Ride</button> -->\n\n           <!-- </div> -->\n\n           <!-- Joyfull and comfortable travel, share your journey with all like you    -->\n\n         <div class="button-center">\n\n         \n\n         <div text-center >\n\n         <ion-grid ><ion-row><ion-col style="top:16vh">\n\n           <button text-center class="loginbutton" ion-button color=mycolor round (click)="goToRide()">Find A Ride</button><br>\n\n           <p class="text" style="font-family:open-sans;font-size:16px"> Joyfull and comfortable travel, share your journey with all like you</p>\n\n           </ion-col></ion-row></ion-grid></div></div>\n\n\n\n </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"H:\shareMyRide\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ })

});
//# sourceMappingURL=15.js.map