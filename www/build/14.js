webpackJsonp([14],{

/***/ 596:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroPageModule", function() { return IntroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro__ = __webpack_require__(635);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroPageModule = /** @class */ (function () {
    function IntroPageModule() {
    }
    IntroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro__["a" /* IntroPage */]),
            ],
        })
    ], IntroPageModule);
    return IntroPageModule;
}());

//# sourceMappingURL=intro.module.js.map

/***/ }),

/***/ 635:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroPage; });
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


//import { LoginPage } from '../login/login';
/**
 * Generated class for the IntroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroPage = /** @class */ (function () {
    function IntroPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroPage');
    };
    IntroPage.prototype.onGoTo = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    IntroPage.prototype.skip = function () {
        this.navCtrl.setRoot('LoginPage');
    };
    IntroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro',template:/*ion-inline-start:"H:\shareMyRide\src\pages\intro\intro.html"*/'\n\n\n\n<ion-slides  pager class="slider">\n\n\n\n<ion-slide class="first">\n\n\n\n<ion-header  style="margin-top:6px">\n\n<!-- <div id="logo"> -->\n\n    \n\n<img src="../assets/imgs/logo.jpg" alt="" style="height:11vh;text-align:center">\n\n \n\n \n\n<!--\n\n <h1 style="font-size: 48px"><span style=\'color: #009f75; font-weight:bold\'>S</span><span style=\'color:#FEFEFE\'>HARE</span><span style=\'color:#009f75 ;font-weight:bold\'>M</span><span style=\'color: #FEFEFE\'>Y</span>\n\n <span style=\'color:#009f75; font-weight:bold\'>Ride</span></h1>\n\n\n\n\n\n\n\n <div id="icons">\n\n \n\n <ion-icon name="md-bus"></ion-icon>\n\n <ion-icon name="md-car"></ion-icon>\n\n<ion-icon name="md-subway"></ion-icon>\n\n  <ion-icon name="md-bicycle"></ion-icon>\n\n</div>\n\n <div id="plane"><ion-icon name="md-plane"></ion-icon></div>\n\n\n\n\n\n<div id="qoute"><p style=\'color:#FEFEFE\'>Share&nbsp;Your&nbsp;Journey</p></div>-->\n\n\n\n</ion-header>\n\n<ion-fab right bottom>\n\n   <button ion-fab mini color="fab" (click) ="skip()">Skip</button>\n\n </ion-fab>\n\n</ion-slide>\n\n\n\n\n\n<ion-slide class="second">\n\n<ion-header style="margin-top:30px">\n\n\n\n<br><h2 style="color: #FEFEFE;background-color:#000000;font-weight:bold; opacity:0.7;display:inline">Don\'t have a bike or car?</h2><hr>\n\n<h2 style="color: #FEFEFE;background-color:#000000;font-weight:bold; opacity:0.7;display:inline">Hate travelling alone?</h2><hr>\n\n<h1 style="color: #009f75; background-color:#000000;background-color:inital; opacity:0.8; ;display:inline; font-weight:bold">NO WORRIES</h1><hr>\n\n<p style="color: #FEFEFE; background-color:#000000; font-weight:bold;opacity:0.7;display:inline" >Find a travel partner or share your travel plans </p>\n\n\n\n</ion-header>\n\n\n\n\n\n</ion-slide>\n\n \n\n  <ion-slide class="third">\n\n  <ion-header style="margin-top:30px">\n\n\n\n  <br><h3 style="color: #FEFEFE;font-weight:bold;background-color:#000000; opacity:0.7;display:inline;">You Can </h3><br>\n\n  <h1 style="color: #009f75;background-color:#000000; opacity:0.8;display:inline; font-weight:bold;line-height:45px">OFFER A RIDE </h1><br>\n\n   <h1 style="color: #fefefe;font-weight:bold;line-height:8px;display:inline;opacity:0.7">__________</h1><br>\n\n  <p style="color: #FEFEFE;font-weight:bold;background-color:#000000;opacity:0.7;display:inline">Share your car journey with co-travlers just like you and cover all your fuel costs!</p>\n\n\n\n</ion-header>\n\n  </ion-slide>\n\n   \n\n<ion-slide class="third">\n\n<ion-header style="margin-top:30px">\n\n  \n\n  <br><h3 style="color: #FEFEFE;font-weight:bold;background-color:#000000; opacity:0.7;display:inline;">OR</h3><br>\n\n  <h1 style="color: #009f75;background-color:#000000; opacity:0.8;display:inline; font-weight:bold;line-height:45px">FIND A RIDE </h1><br>\n\n   <h1 style="color: #fefefe;font-weight:bold;line-height:8px;display:inline;opacity:0.7">__________</h1><br>\n\n  <p style="color: #FEFEFE;font-weight:bold;background-color:#000000;opacity:0.7;display:inline">Joyfull and comfortable travel, share your journey with all like you</p>\n\n\n\n</ion-header>\n\n  </ion-slide>\n\n\n\n\n\n<ion-slide class="fourth">\n\n\n\n  <!-- <ion-header> -->\n\n   <ion-grid no-padding wrap responsive-md>\n\n   <ion-row align-items-start >\n\n   <ion-col width-50 >\n\n     <!-- <div id="ecofriendly"> -->\n\n   <br><ion-icon name="md-globe" style="color:#5cabff;font-size:100px"></ion-icon><hr>\n\n   <h3 style="color: #fefefe;background-color:#000000; opacity:0.8;display:inline; font-weight:bold">SAVE<br>ENVIRONMENT</h3>\n\n   <!-- </div> -->\n\n   </ion-col>\n\n  <ion-col width-50 offset-50>\n\n  <!-- <div id="timesaving"> -->\n\n  <br><ion-icon name="ios-speedometer" style="color:#E8E8E8;font-size:100px"></ion-icon><hr>\n\n  <h3 style="color: #fefefe;background-color:#000000; opacity:0.8;display:inline; font-weight:bold">TIME<br>SAVINGS</h3>\n\n  <!-- </div> -->\n\n </ion-col></ion-row><br><br><br>\n\n <ion-row  ><ion-col width-100>\n\n <!-- <div id="reduce"> -->\n\n   <ion-icon name="md-bus" style="color:#ee9600;font-size:100px"></ion-icon><hr>\n\n  <h3 style="color: #fefefe;background-color:#000000; opacity:0.8;display:inline; font-weight:bold">REDUCES TRAFFIC CONGENSTION</h3>\n\n  <!-- </div>    -->\n\n  </ion-col></ion-row><br><br><br><br>\n\n\n\n  <ion-row align-items-end><ion-col width-50>\n\n  <!-- <div id="cost"> -->\n\n<ion-icon name="ios-cash" style="color:#216C2A;font-size:100px"></ion-icon><hr>\n\n  <h3 style="color: #fefefe;background-color:#000000; opacity:0.8;display:inline; font-weight:bold">SAVE<br>MONEY</h3>\n\n  <!-- </div> -->\n\n </ion-col>\n\n <ion-col width-50 offset-50>\n\n \n\n  <!-- <div id="social"> -->\n\n  <ion-icon name="logo-instagram"style="color:#e4405f;font-size:100px"></ion-icon><hr>\n\n  <h3 style="color: #fefefe;background-color:#000000; opacity:0.8;display:inline; font-weight:bold"> SOCIALLY<br>ENABLED</h3>\n\n  <!-- </div> -->\n\n</ion-col></ion-row></ion-grid>\n\n<!-- </ion-header> -->\n\n</ion-slide>\n\n\n\n<ion-slide class="fifth">\n\n<ion-header style="margin-top:30px">\n\n<!-- <div id="lastpage"> -->\n\n  <!-- <h4 style="color: #FEFEFE;font-weight:bold;background-color:#000000; opacity:0.7;display:inline;">Are you</h4><br> -->\n\n  <h1 style="color: #009f75;background-color:#000000; opacity:0.7;display:inline; font-weight:bold;line-height:45px">Are you ready to begin ?</h1><br>\n\n  <p style="color: #FEFEFE;font-weight:bold;background-color:#000000;opacity:0.6;display:inline">Share your journey and cover your fuel costs</p><br>\n\n   <h1 style="color: #fefefe;font-weight:bold;line-height:8px;display:inline;opacity:0.4">__________</h1><br>\n\n <div id="threeicons"> <ion-icon name="ios-contact-outline"></ion-icon>     <ion-icon name="ios-star-outline"></ion-icon>     <ion-icon name="ios-call-outline"></ion-icon></div>\n\n<!-- </div> --></ion-header>\n\n<ion-footer style="margin-bottom:40px">\n\n<!-- <div id="getstarted"> -->\n\n<button  ion-button round  style="color:#009f75;font-weight:bold;background-color:#000000; opacity:0.8" (click)="onGoTo()">Get Started</button>\n\n<!-- </div> -->\n\n </ion-footer>\n\n  </ion-slide>\n\n\n\n\n\n\n\n</ion-slides> \n\n\n\n\n\n \n\n'/*ion-inline-end:"H:\shareMyRide\src\pages\intro\intro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
    ], IntroPage);
    return IntroPage;
}());

//# sourceMappingURL=intro.js.map

/***/ })

});
//# sourceMappingURL=14.js.map