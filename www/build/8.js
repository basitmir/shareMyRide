webpackJsonp([8],{

/***/ 593:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindridePageModule", function() { return FindridePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__findride__ = __webpack_require__(632);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FindridePageModule = /** @class */ (function () {
    function FindridePageModule() {
    }
    FindridePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__findride__["a" /* FindridePage */]),
            ],
        })
    ], FindridePageModule);
    return FindridePageModule;
}());

//# sourceMappingURL=findride.module.js.map

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

/***/ 632:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FindridePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_shareride_shareride_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__ = __webpack_require__(188);
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





//import { TitleCasePipe } from '@angular/common';
//import { sharerides } from '../../models/shareride/shareride.interface';
//import { Observable } from 'rxjs';
//import { shareRideList } from '../../mocks/shareride/shareride';
//import { sharerides } from '../../models/shareride/shareride.interface';
/**
 * Generated class for the FindridePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FindridePage = /** @class */ (function () {
    // shareridelist:sharerides[]=shareRideList;
    function FindridePage(navCtrl, navParams, getdetails, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.getdetails = getdetails;
        this.data = data;
        //  this.shareRideDetails$=this.getdetails.getrideDetails().valueChanges();
        //console.log(this.shareRideDetails$);
        this.getDetail();
    }
    FindridePage.prototype.ionViewDidLoad = function () {
        // console.log(this.shareridelist);
    };
    FindridePage.prototype.getDetail = function () {
        this.shareRideDetails$ = this.getdetails.getrideDetails().snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        console.log(this.getdetails.getrideDetails().valueChanges());
    }; //getdetailsclose
    /* getFiltered(){
         this.check=false;
       console.log(this.destination);
       this.filteredData$= this.getdetails.searchData(this.destination).snapshotChanges().map(
         changes=>{
            return changes.map(c=>({
              key: c.payload.key, ...c.payload.val()
              
              
            }))
            
         });
     
     }*/
    FindridePage.prototype.searchDestination = function (query) {
        var _this = this;
        var trimmedQuery = query.trim();
        if (trimmedQuery === query) {
            this.data.searchDestination(query).subscribe(function (details) {
                _this.rideDetails = details;
                _this.num = _this.rideDetails.length;
            });
        }
    };
    FindridePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-findride',template:/*ion-inline-start:"H:\shareMyRide\src\pages\findride\findride.html"*/'<!--\n\n  Generated template for the FindridePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n -->\n\n<ion-header no-shadow no-border color="mycolor">\n\n\n\n  <ion-navbar color="mycolor" showBackButton>\n\n  \n\n  <ion-searchbar placeholder="Search Destination"  [(ngModel)]="query"(ionChange)="searchDestination(query)"></ion-searchbar>\n\n  <ion-buttons right>\n\n  <button ion-button>\n\n  <ion-icon  style="font-size:25px" color="mywhite" name="more"></ion-icon></button></ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content >\n\n\n\n  <div *ngIf="!num > 0">\n\n <ion-card no-padding *ngFor="let shareDetails of shareRideDetails$ | async " > \n\n         <ion-card-content no-padding>\n\n  <ion-list  >\n\n             \n\n     <ion-item detail-push navPush=\'MoredetailsPage\' [navParams]=\'{shareDetails:shareDetails}\'>\n\n\n\n        <ion-avatar item-left>\n\n\n\n             <img src="/assets/imgs/me.jpg" alt="Avatar">\n\n            </ion-avatar>\n\n             <h2 style="color:#009f75">{{shareDetails.firstName}} {{shareDetails.lastName}}</h2> \n\n             <p>{{shareDetails.phoneNo}}</p> \n\n             </ion-item> \n\n                       <ion-label text-center color="mycolor"style="font-weight:bold">{{shareDetails.tripType |uppercase}}</ion-label> \n\n          <div class="size">\n\n             <ion-item>\n\n          <ion-icon  item-left color="origin" name="ios-pin-outline"><span>&nbsp;&nbsp;&nbsp;ORIGIN :&nbsp;\n\n           <span style="color:green;font-size:15px">{{shareDetails.origin | titlecase}}</span></span></ion-icon>\n\n         <!-- <ion-label >ORIGIN:</ion-label>  -->\n\n          <!-- <ion-label style="font-weight:bold;font-size:24px">{{shareDetails.origin | titlecase}}</ion-label>  -->\n\n     </ion-item>\n\n \n\n              <ion-item>\n\n          <ion-icon  item-left color="danger" name="ios-flag-outline"><span>&nbsp;&nbsp;&nbsp;DESTINATION :&nbsp;\n\n          <span style="color:#f53d3d;font-size:15px">{{shareDetails.destination | titlecase}}</span> </span></ion-icon>\n\n         \n\n               </ion-item>\n\n               <!--  \n\n            <ion-item>\n\n            <ion-icon  item-left color="stopover" name="ios-flag-outline" ><span>&nbsp;&nbsp;&nbsp;STOPOVER POINTS :&nbsp;\n\n           <span style="color:gold;font-size:15px">{{shareDetails.stopover | titlecase}}</span> </span></ion-icon>\n\n         \n\n          </ion-item>      \n\n\n\n          <ion-item >\n\n          <ion-icon  item-left color="dark" name="ios-calendar-outline" ><span>&nbsp;&nbsp;&nbsp;DEPARTURE DATE :&nbsp;\n\n           <span style="color:#222;font-size:15px">{{shareDetails.date}}</span> </span></ion-icon>\n\n        \n\n         </ion-item>  \n\n\n\n         <ion-item > \n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline" ><span>&nbsp;&nbsp;&nbsp;DEPARTURE TIME :&nbsp;\n\n          <span style="color:#2d4373;font-size:15px">{{shareDetails.time}}</span> </span></ion-icon>\n\n          \n\n         </ion-item>\n\n\n\n          <ion-item>\n\n          <ion-icon  item-left color="fbcolor" name="ios-clock-outline"><span>&nbsp;&nbsp;&nbsp;RETURN TIME :&nbsp;\n\n           <span style="color:#2d4373;font-size:15px">{{shareDetails.returnTime}}</span></span></ion-icon>\n\n         \n\n         </ion-item>-->\n\n\n\n\n\n     </div>\n\n      </ion-list> \n\n  </ion-card-content>\n\n  </ion-card> \n\n</div>\n\n\n\n<div *ngIf="num > 0">\n\n<ion-card no-padding *ngFor="let shareDetails of rideDetails " >  \n\n         <ion-card-content no-padding>\n\n  <ion-list>\n\n             \n\n     <ion-item detail-push navPush=\'MoredetailsPage\' [navParams]=\'{shareDetails:shareDetails}\'>\n\n\n\n        <ion-avatar item-left>\n\n\n\n             <img src="/assets/imgs/me.jpg" alt="Avatar">\n\n            </ion-avatar>\n\n             <h2 style="color:#009f75">{{shareDetails.firstName}} {{shareDetails.lastName}}</h2> \n\n             <p>{{shareDetails.phoneNo}}</p> \n\n             </ion-item> \n\n                       <ion-label text-center color="mycolor"style="font-weight:bold">{{shareDetails.tripType |uppercase}}</ion-label> \n\n          <div class="size">\n\n             <ion-item>\n\n          <ion-icon  item-left color="origin" name="ios-pin-outline"><span>&nbsp;&nbsp;&nbsp;ORIGIN :&nbsp;\n\n           <span style="color:green;font-size:15px">{{shareDetails.origin | titlecase}}</span></span></ion-icon>\n\n        \n\n     </ion-item>\n\n \n\n              <ion-item>\n\n          <ion-icon  item-left color="danger" name="ios-flag-outline"><span>&nbsp;&nbsp;&nbsp;DESTINATION :&nbsp;\n\n          <span style="color:#f53d3d;font-size:15px">{{shareDetails.destination | titlecase}}</span> </span></ion-icon>\n\n         \n\n               </ion-item>\n\n            \n\n\n\n\n\n     </div>\n\n      </ion-list> \n\n  </ion-card-content>\n\n  </ion-card> \n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"H:\shareMyRide\src\pages\findride\findride.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_shareride_shareride_service__["a" /* sharerideService */], __WEBPACK_IMPORTED_MODULE_4__providers_data_data_service__["a" /* DataProvider */]])
    ], FindridePage);
    return FindridePage;
}());

//# sourceMappingURL=findride.js.map

/***/ })

});
//# sourceMappingURL=8.js.map