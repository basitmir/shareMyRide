webpackJsonp([1],{

/***/ 590:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChannelchatPageModule", function() { return ChannelchatPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__channelchat__ = __webpack_require__(629);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(607);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ChannelchatPageModule = /** @class */ (function () {
    function ChannelchatPageModule() {
    }
    ChannelchatPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__channelchat__["a" /* ChannelchatPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__channelchat__["a" /* ChannelchatPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponenetsModule */]
            ],
        })
    ], ChannelchatPageModule);
    return ChannelchatPageModule;
}());

//# sourceMappingURL=channelchat.module.js.map

/***/ }),

/***/ 607:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponenetsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loginform_loginform_components__ = __webpack_require__(608);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_components__ = __webpack_require__(609);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofileform_editprofileform_component__ = __webpack_require__(610);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__profileview_profileview_component__ = __webpack_require__(611);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__messagebox_messagebox__ = __webpack_require__(612);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chatmessage_chatmessage__ = __webpack_require__(613);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import { ProfilesearchComponent } from './profilesearch/profilesearch';


//import { ProfileviewComponent } from './profileview/profileview';
var ComponenetsModule = /** @class */ (function () {
    function ComponenetsModule() {
    }
    ComponenetsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__loginform_loginform_components__["a" /* LoginformComponent */],
                __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_components__["a" /* SignupformComponent */],
                __WEBPACK_IMPORTED_MODULE_4__editprofileform_editprofileform_component__["a" /* EditprofileformComponent */],
                __WEBPACK_IMPORTED_MODULE_5__profileview_profileview_component__["a" /* ProfileviewComponent */],
                //ProfilesearchComponent,
                __WEBPACK_IMPORTED_MODULE_6__messagebox_messagebox__["a" /* MessageboxComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chatmessage_chatmessage__["a" /* ChatmessageComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__loginform_loginform_components__["a" /* LoginformComponent */],
                __WEBPACK_IMPORTED_MODULE_3__signupform_signupform_components__["a" /* SignupformComponent */],
                __WEBPACK_IMPORTED_MODULE_4__editprofileform_editprofileform_component__["a" /* EditprofileformComponent */],
                __WEBPACK_IMPORTED_MODULE_5__profileview_profileview_component__["a" /* ProfileviewComponent */],
                //ProfilesearchComponent,
                __WEBPACK_IMPORTED_MODULE_6__messagebox_messagebox__["a" /* MessageboxComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chatmessage_chatmessage__["a" /* ChatmessageComponent */]
            ]
        })
    ], ComponenetsModule);
    return ComponenetsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 608:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


//import { SignupPage } from '../signup/signup';


//import { AuthService } from '../../providers/auth/auth.service';
/**
 * Generated class for the LoginformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var LoginformComponent = /** @class */ (function () {
    function LoginformComponent(navCtrl, navParams, auth, loadcntrl, alertcntrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loadcntrl = loadcntrl;
        this.alertcntrl = alertcntrl;
        this.account = {};
        this.submitAttempt = false;
        //ionViewDidLoad() {
        // console.log('ionViewDidLoad LoginPage');
        //}
        this.signinform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$')])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)]))
        });
        this.loginStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    LoginformComponent.prototype.onsigninform = function (signinform) {
        console.log(signinform.value);
    };
    Object.defineProperty(LoginformComponent.prototype, "email", {
        get: function () {
            return this.signinform.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginformComponent.prototype, "password", {
        get: function () {
            return this.signinform.get('password');
        },
        enumerable: true,
        configurable: true
    });
    /*onGoTo(){
       const loading= this.loadcntrl.create({
         spinner:'bubbles',
         content:'Signing you in...'
       });
       loading.present();
  
      if(this.signinform.valid){
        this.navCtrl.push('TabsPage');
        loading.dismiss();
       this.authServices.signin(this.email.value, this.password.value)
        .then(sucess => {
             loading.dismiss();
             //this.navCtrl.push(TabsPage);
            })
        .catch(error => {
          loading.dismiss();
          const alert= this.alertcntrl.create({
            subTitle:'Signin Failed!',
            message:error.message,
            buttons:['OK']
          });
          alert.present();
        });
    
      }
        
  
    
    else{
      loading.dismiss();
      const alert=this.alertcntrl.create({
        subTitle:'Signin Failed!',
        message:'Invalid login credentials',
        buttons:['OK']
      });
      //this.submitAttempt=true;
      alert.present();
     
   }
  }*/
    LoginformComponent.prototype.login = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, loginResponse, alert_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        loading = this.loadcntrl.create({
                            spinner: 'bubbles',
                            content: 'Signing you in...'
                        });
                        loading.present();
                        return [4 /*yield*/, this.auth.signInWithEmailAndPassword(this.account)];
                    case 1:
                        loginResponse = _a.sent();
                        if (!loginResponse.error) {
                            loading.dismiss();
                        }
                        else {
                            alert_1 = this.alertcntrl.create({
                                subTitle: 'Signin Failed!',
                                message: loginResponse.error.message,
                                buttons: ['OK']
                            });
                            loading.dismiss();
                            alert_1.present();
                        }
                        this.loginStatus.emit(loginResponse);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginformComponent.prototype.onToSignup = function () {
        this.navCtrl.push('SignupPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], LoginformComponent.prototype, "loginStatus", void 0);
    LoginformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'loginform',template:/*ion-inline-start:"H:\shareMyRide\src\components\loginform\loginform.components.html"*/' <form [formGroup]="signinform">   \n\n          <ion-grid no-padding text-center no-margin wrap responsive-md style="margin-top:15vh">                 <!-- <h1 style="color:white">this is it</h1> -->\n\n        <div>\n\n            <p *ngIf="submitAttempt" style="color:white; font-size:15px;text-align:center" no-margin>*Invalid login credentials</p>\n\n            <ion-list  no-lines class="login" >\n\n            <div class="inner"text-center>\n\n            <ion-row responsive-md><ion-col>\n\n            <ion-item class="label" >\n\n            <ion-label  style="font-size:20px;color:#009f75;font-weight:bold" stacked>Email</ion-label>\n\n            <ion-input type="text" placeholder="Enter Email" formControlName="email" [(ngModel)]="account.email" ></ion-input>\n\n            </ion-item> </ion-col></ion-row>  \n\n\n\n\n\n\n\n             \n\n            <ion-row responsive-md><ion-col>\n\n            <ion-item class="label">\n\n            <ion-label style="font-size:20px;color:#009f75; font-weight:bold"stacked>Password</ion-label>\n\n            <ion-input type="Password" placeholder="Enter Password" formControlName="password" [(ngModel)]="account.password"></ion-input>\n\n             </ion-item>  </ion-col></ion-row>\n\n\n\n             \n\n            \n\n         <div>\n\n         <p class="text" style="font-family:open-sans;font-size:16px">Forgot your password?</p>\n\n         <div text-center >\n\n           <button class="loginbutton" ion-button color=mycolor round (click)="login()">Login</button>\n\n           </div></div> \n\n               </div><!--inner div close -->\n\n\n\n            <div text-center  style="margin-top:7vh">\n\n           <button text-center class="mybutn" ion-button color="mywhite" round outline (click)="onToSignup()">Sign Up</button>\n\n           </div>\n\n  \n\n       <button  item-left ion-button round   color=fbcolor class="fb" style="background-image:url(\'/assets/imgs/fblogo.png\')"></button>\n\n       <button item-right ion-button round   color=danger class="google" style="background-image:url(\'/assets/imgs/google.png\')"></button>\n\n      \n\n       </ion-list>\n\n              \n\n             </div>\n\n             </ion-grid>\n\n          </form>'/*ion-inline-end:"H:\shareMyRide\src\components\loginform\loginform.components.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginformComponent);
    return LoginformComponent;
}());

//# sourceMappingURL=loginform.components.js.map

/***/ }),

/***/ 609:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__ = __webpack_require__(187);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//import { DISABLED } from '@angular/forms/src/model';
/**
 * Generated class for the SignupformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var SignupformComponent = /** @class */ (function () {
    function SignupformComponent(navCtrl, navParams, loadcntrl, auth) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadcntrl = loadcntrl;
        this.auth = auth;
        this.submitAttempt = false;
        this.formValid = true;
        this.account = {};
        this.signupform = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            //name : new FormControl('',([Validators.required,Validators.minLength(3),Validators.pattern('[a-zA-Z ]*')])),
            email: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].pattern('^[a-zA-Z0-9._]+[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+[.][a-zA-Z]{2,4}$')])),
            //phoneNumber : new FormControl('',([Validators.required,Validators.minLength(10),Validators.pattern('[0-9]{10}')])),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].minLength(8)])),
            repeatPassword: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required)
        });
        this.registerStatus = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    Object.defineProperty(SignupformComponent.prototype, "email", {
        /*
         get name(){
           return this.signupform.get('name');
          
         }
         get phoneNumber(){
          return this.signupform.get('phoneNumber');
        }
        */
        get: function () {
            return this.signupform.get('email');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupformComponent.prototype, "password", {
        get: function () {
            return this.signupform.get('password');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SignupformComponent.prototype, "repeatPassword", {
        get: function () {
            return this.signupform.get('repeatPassword');
        },
        enumerable: true,
        configurable: true
    });
    SignupformComponent.prototype.setBackButtonText = function () {
    };
    SignupformComponent.prototype.check = function () {
        if (this.signupform.valid) {
            this.formValid = false;
        }
    };
    SignupformComponent.prototype.onGoTo = function () {
        if (this.password.value != this.repeatPassword.value) {
            this.submitAttempt = true;
        }
        else {
            /* const loading=this.laodcntrl.create({
             spinner:'bubbles',
             content: 'Signing you up...'
           });
          loading.present();
       //let data = this.signupform.value;
       this.authService.signup(this.email.value,this.password.value)
       .then(data1 => {loading.dismiss();})
   
   
       .catch(error =>{
         loading.dismiss();
         const alert=this.alertcntrl.create({
           subTitle: 'Signup Failed!',
           message:error.message,
           buttons:['OK']
         })
         alert.present();
       });*/
            this.navCtrl.push('LoginPage');
        }
        //outer else
    }; //fun close
    SignupformComponent.prototype.register = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loading, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.password.value != this.repeatPassword.value)) return [3 /*break*/, 1];
                        this.submitAttempt = true;
                        return [3 /*break*/, 3];
                    case 1:
                        loading = this.loadcntrl.create({
                            spinner: 'bubbles',
                            content: 'Signing you up...'
                        });
                        loading.present();
                        console.log('Hello AuthProvider Provider1');
                        return [4 /*yield*/, this.auth.createUserWithEmailAndPassword(this.account)];
                    case 2:
                        result = _a.sent();
                        this.registerStatus.emit(result);
                        loading.dismiss();
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }; //else close
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SignupformComponent.prototype, "registerStatus", void 0);
    SignupformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'signupform',template:/*ion-inline-start:"H:\shareMyRide\src\components\signupform\signupform.components.html"*/'<form style="text-align:center" [formGroup]="signupform">\n\n      \n\n        <ion-grid no-padding wrap responsive-md >\n\n    \n\n            <ion-list no-lines class="signup"  > \n\n             <!-- <ion-row responsive-md><ion-col> \n\n              <ion-item class="label" > \n\n            <ion-label  style="font-size:20px;color:#009f75;font-weight:bold" stacked>Name</ion-label>\n\n            <ion-input type="text" placeholder="Enter Name"  formControlName="name"></ion-input>\n\n           </ion-item>  </ion-col></ion-row>\n\n\n\n             <p *ngIf="name.touched && name.invalid" style="color:white;font-size:15px"\n\n             text-left no-lines no-margin>*Name is required</p> \n\n              <p *ngIf="name.errors && name.errors.minlength" style="color:white;font-size:15px"\n\n              text-left no-lines no-margin>*Name must be at least 3 characters long </p>\n\n               <p *ngIf="name.errors && name.errors.pattern" style="color:white;font-size:15px"\n\n              text-left no-lines no-margin>*Enter a valid Name </p>-->\n\n\n\n       <ion-row responsive-md><ion-col>\n\n            <ion-item class="label">\n\n            <ion-label style="font-size:20px;color:#009f75; font-weight:bold"stacked>Email</ion-label>\n\n            <ion-input [(ngModel)]="account.email" type="email" placeholder="Enter Email" formControlName="email"></ion-input>\n\n            </ion-item></ion-col></ion-row>\n\n             <p *ngIf="email.touched && email.invalid" style="color:white;font-size:15px"\n\n             text-left no-lines no-margin>*Email is required</p>\n\n               <p *ngIf="email.errors && email.errors.pattern" style="color:white;font-size:15px"\n\n             text-left no-lines no-margin>*Email a valid email</p>\n\n\n\n            <!-- <ion-row responsive-md><ion-col> \n\n             <ion-item class="label">\n\n            <ion-label style="font-size:20px;color:#009f75; font-weight:bold"stacked>Phone Number</ion-label>\n\n            <ion-input  placeholder="Enter Number" maxlength="10" formControlName="phoneNumber"></ion-input>\n\n            </ion-item></ion-col></ion-row>\n\n             <p *ngIf="phoneNumber.touched && phoneNumber.invalid" style="color:white;font-size:15px"\n\n             text-left no-lines no-margin>*Phone Number is required</p>\n\n              <p *ngIf="phoneNumber.errors && phoneNumber.errors.minlength" \n\n              style="color:white;font-size:15px" text-left no-lines no-margin>*Phone Number must be of 10 digits</p>\n\n              <p *ngIf="phoneNumber.errors && phoneNumber.errors.pattern" \n\n              style="color:white;font-size:15px" text-left no-lines no-margin>*Phone Number should only contain digits</p>\n\n                                                                  -->\n\n               <ion-row responsive-md><ion-col>\n\n             <ion-item class="label">\n\n            <ion-label style="font-size:20px;color:#009f75; font-weight:bold"stacked>Password</ion-label>\n\n            <ion-input [(ngModel)]="account.password" type="Password" placeholder="Enter Password" minlength="8" formControlName="password"></ion-input>\n\n            </ion-item></ion-col></ion-row>\n\n\n\n             <p *ngIf="password.touched && password.invalid" style="color:white;font-size:15px"\n\n             text-left no-lines no-margin>*Password is required</p>\n\n             <p *ngIf="password.errors && password.errors.minlength" \n\n              style="color:white;font-size:15px" text-left no-lines no-margin>*Password must be at least 8 characters long</p>\n\n\n\n              <ion-row responsive-md><ion-col>\n\n             <ion-item class="label">\n\n                <ion-label style="font-size:20px;color:#009f75; font-weight:bold"stacked>Repeat Password</ion-label>\n\n            <ion-input type="Password" placeholder="Repeat Password" minlength="8" formControlName="repeatPassword"></ion-input>\n\n            </ion-item>\n\n             <p *ngIf="submitAttempt" style="color:white; font-size:15px;padding-right:40px;" no-margin>*Password mismatch</p>\n\n\n\n            </ion-col></ion-row>\n\n             <p *ngIf="repeatPassword.touched && repeatPassword.invalid" style="color:white;font-size:15px"\n\n             text-left no-lines no-margin>*Repeat Password</p>\n\n             \n\n          <ion-row><ion-col>\n\n            <div text-center style="padding-top:6vh;text-align:center" >\n\n           <button type="submit" style="width:230px"class="loginbutton" ion-button color=mycolor round\n\n            [disabled]="!signupform.valid"  (click)="register()">Create Account</button>\n\n     \n\n                </div>\n\n</ion-col></ion-row>\n\n            </ion-list>\n\n\n\n            \n\n               </ion-grid>\n\n            \n\n\n\n</form>\n\n\n\n              '/*ion-inline-end:"H:\shareMyRide\src\components\signupform\signupform.components.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth_service__["a" /* AuthService */]])
    ], SignupformComponent);
    return SignupformComponent;
}());

//# sourceMappingURL=signupform.components.js.map

/***/ }),

/***/ 610:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditprofileformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(27);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




//import { NavController } from 'ionic-angular';
//import { EventEmitter } from 'events';
/**
 * Generated class for the EditprofileformComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EditprofileformComponent = /** @class */ (function () {
    function EditprofileformComponent(data, auth) {
        var _this = this;
        this.data = data;
        this.auth = auth;
        this.profile = {};
        this.editprofileform = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormGroup */]({
            firstname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])),
            lastname: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(3), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')])),
            phoneNumber: new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormControl */]('', ([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_3__angular_forms__["g" /* Validators */].pattern('[0-9]{10}')])),
        });
        this.saveProfileResult = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
    }
    Object.defineProperty(EditprofileformComponent.prototype, "firstname", {
        get: function () {
            return this.editprofileform.get('firstname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditprofileformComponent.prototype, "lastname", {
        get: function () {
            return this.editprofileform.get('lastname');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EditprofileformComponent.prototype, "phoneNumber", {
        get: function () {
            return this.editprofileform.get('phoneNumber');
        },
        enumerable: true,
        configurable: true
    });
    EditprofileformComponent.prototype.saveProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.authenticatedUser) return [3 /*break*/, 2];
                        this.profile.email = this.authenticatedUser.email;
                        return [4 /*yield*/, this.data.saveProfile(this.authenticatedUser, this.profile)];
                    case 1:
                        result = _a.sent();
                        this.saveProfileResult.emit(result);
                        console.log(result);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    EditprofileformComponent.prototype.ngOnDestroy = function () {
        this.authenticatedUser$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], EditprofileformComponent.prototype, "saveProfileResult", void 0);
    EditprofileformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'editprofileform',template:/*ion-inline-start:"H:\shareMyRide\src\components\editprofileform\editprofileform.component.html"*/'<form [formGroup]="editprofileform">\n\n<ion-card>\n\n  <ion-card-content>\n\n     <ion-item>\n\n     <ion-label floating style="font-weight:bold">First Name</ion-label>\n\n     <ion-input type="text" [(ngModel)]="profile.firstName" formControlName="firstname"></ion-input>\n\n     </ion-item>\n\n\n\n     <p *ngIf="firstname.touched && firstname.invalid" style="color:red;font-size:15px"\n\n              no-lines no-margin>*Name is required</p> \n\n              <p *ngIf="firstname.errors && firstname.errors.minlength" style="color:red;font-size:15px"\n\n               no-lines no-margin>*Name must be at least 3 characters long </p>\n\n               <p *ngIf="firstname.errors && firstname.errors.pattern" style="color:red;font-size:15px"\n\n         no-lines no-margin>*Enter a valid Name </p>\n\n\n\n      <ion-item>\n\n     <ion-label floating style="font-weight:bold">Last Name</ion-label>\n\n     <ion-input type="text" [(ngModel)]="profile.lastName" formControlName="lastname" ></ion-input>\n\n     </ion-item>\n\n     \n\n            <p *ngIf="lastname.touched && lastname.invalid" style="color:red;font-size:15px"\n\n             text-left no-lines no-margin>*Name is required</p> \n\n              <p *ngIf="lastname.errors && lastname.errors.minlength" style="color:red;font-size:15px"\n\n              text-left no-lines no-margin>*Name must be at least 3 characters long </p>\n\n               <p *ngIf="lastname.errors && lastname.errors.pattern" style="color:red;font-size:15px"\n\n              text-left no-lines no-margin>*Enter a valid Name </p>\n\n\n\n\n\n      <ion-item>\n\n     <ion-label floating style="font-weight:bold">Phone Number</ion-label>\n\n     <ion-input  [(ngModel)]="profile.phone" maxlength="10" formControlName="phoneNumber"></ion-input>\n\n     </ion-item>\n\n      <p *ngIf="phoneNumber.touched && phoneNumber.invalid" style="color:red;font-size:15px"\n\n             text-left no-lines no-margin>*Phone Number is required</p>\n\n              <p *ngIf="phoneNumber.errors && phoneNumber.errors.minlength" \n\n              style="color:red;font-size:15px" text-left no-lines no-margin>*Phone Number must be of 10 digits</p>\n\n              <p *ngIf="phoneNumber.errors && phoneNumber.errors.pattern" \n\n              style="color:red;font-size:15px" text-left no-lines no-margin>*Phone Number should only contain digits</p>\n\n\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n<div class="save">\n\n <button block type="submit" ion-button (click)="saveProfile()" [disabled]="!editprofileform.valid">Save</button>\n\n </div>'/*ion-inline-end:"H:\shareMyRide\src\components\editprofileform\editprofileform.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth_service__["a" /* AuthService */]])
    ], EditprofileformComponent);
    return EditprofileformComponent;
}());

//# sourceMappingURL=editprofileform.component.js.map

/***/ }),

/***/ 611:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(186);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProfileviewComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ProfileviewComponent = /** @class */ (function () {
    function ProfileviewComponent(auth, data, load) {
        this.auth = auth;
        this.data = data;
        this.load = load;
        // console.log('Hello ProfileviewComponent Component');
        this.loading = this.load.create({
            content: 'Loading Profile...'
        });
    }
    ProfileviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading.present();
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile;
                _this.loading.dismiss();
            });
        });
    };
    ProfileviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'profileview',template:/*ion-inline-start:"H:\shareMyRide\src\components\profileview\profileview.component.html"*/'<!-- Generated template for the ProfileviewComponent component \n\n<div class="profileview">\n\n<img class="profileviewimage" src="../assets/imgs/profile.png" alt="">\n\n  \n\n</div>-->\n\n <ion-grid no-padding wrap responsive-md  >\n\n \n\n <ion-card color="mycolor" style="width:auto" no-margin class="profileview"><ion-card-content no-margin no-padding text-center>\n\n          \n\n                             <ion-row responsive-md align-items-start>\n\n               <ion-col align-self-start>\n\n                             <ion-item color="mycolor">\n\n                            <ion-avatar class="avatars">\n\n                               <img src="/assets/imgs/profile.png">\n\n                               </ion-avatar></ion-item></ion-col></ion-row>\n\n                               </ion-card-content></ion-card>\n\n                               \n\n\n\n\n\n<div *ngIf="userProfile">\n\n <ion-card class="content" style="width:auto" no-margin>\n\n<ion-card-content  no-margin no-padding>\n\n<ion-row responsive-md align-items-center>\n\n               <ion-col align-self-center>\n\n<ion-item>\n\n      <ion-label floating color="mycolor">Email</ion-label>\n\n      <ion-input [value]="userProfile.email" [readonly]="true"></ion-input>\n\n  </ion-item></ion-col></ion-row>\n\n\n\n\n\n\n\n  <ion-row responsive-md align-items-center>\n\n               <ion-col align-self-center>\n\n  <ion-item>\n\n      <ion-label floating color="mycolor">First Name</ion-label>\n\n      <ion-input [value]="userProfile.firstName | uppercase" [readonly]="true"></ion-input>\n\n  </ion-item></ion-col></ion-row>\n\n\n\n\n\n <ion-row responsive-md align-items-end>\n\n               <ion-col align-self-end>\n\n  <ion-item>  \n\n      <ion-label floating color="mycolor">Last Name</ion-label>\n\n      <ion-input [value]="userProfile.lastName | uppercase" [readonly]="true"></ion-input>\n\n  </ion-item></ion-col></ion-row>\n\n\n\n\n\n\n\n  <ion-row responsive-md align-items-end>\n\n               <ion-col align-self-end>\n\n  <ion-item>\n\n      <ion-label floating color="mycolor">Phone Number</ion-label>\n\n      <ion-input [value]="userProfile.phone" [readonly]="true"></ion-input>\n\n  </ion-item> </ion-col></ion-row>\n\n</ion-card-content>\n\n\n\n </ion-card></div>\n\n\n\n </ion-grid>'/*ion-inline-end:"H:\shareMyRide\src\components\profileview\profileview.component.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* LoadingController */]])
    ], ProfileviewComponent);
    return ProfileviewComponent;
}());

//# sourceMappingURL=profileview..component.js.map

/***/ }),

/***/ 612:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageboxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Content } from 'ionic-angular';
/**
 * Generated class for the MessageboxComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MessageboxComponent = /** @class */ (function () {
    function MessageboxComponent() {
        this.sendMessage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    MessageboxComponent.prototype.send = function () {
        this.sendMessage.emit(this.content);
        this.content = "";
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], MessageboxComponent.prototype, "sendMessage", void 0);
    MessageboxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'messagebox',template:/*ion-inline-start:"H:\shareMyRide\src\components\messagebox\messagebox.html"*/'  <ion-grid no-padding no-margin>\n\n          <ion-row no-padding no-margin>\n\n                 <ion-col col-10  >\n\n                 \n\n                  <ion-textarea  [(ngModel)]="content" placeholder="Enter message..."></ion-textarea>\n\n                 \n\n                 </ion-col>\n\n\n\n                 <ion-col col-2>\n\n                 \n\n                 <button clear ion-button (click)="send()"><ion-icon style="font-size:25px" name="send"></ion-icon></button>\n\n                 </ion-col>\n\n\n\n            </ion-row>\n\n     </ion-grid>'/*ion-inline-end:"H:\shareMyRide\src\components\messagebox\messagebox.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], MessageboxComponent);
    return MessageboxComponent;
}());

//# sourceMappingURL=messagebox.js.map

/***/ }),

/***/ 613:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatmessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the ChatmessageComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var ChatmessageComponent = /** @class */ (function () {
    function ChatmessageComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ChatmessageComponent.prototype, "chatMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], ChatmessageComponent.prototype, "chatIndex", void 0);
    ChatmessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'chatmessage',template:/*ion-inline-start:"H:\shareMyRide\src\components\chatmessage\chatmessage.html"*/'<ion-item  *ngIf="chatIndex % 2 === 0; else right">\n\n       <ion-avatar item-left>\n\n            <img src="/assets/imgs/avatar.png" alt="avatar">\n\n     </ion-avatar>\n\n     <h2>Basit Mir</h2>\n\n      \n\n         <p>Test...</p>\n\n\n\n</ion-item>\n\n\n\n<ng-template #right>\n\n<ion-item class="chat-message__message-right">\n\n       <ion-avatar item-left>\n\n            <img src="/assets/imgs/avatar.png" alt="avatar">\n\n     </ion-avatar>\n\n     <h2>Basit Mir</h2>\n\n      \n\n         <p>Test...</p>\n\n\n\n</ion-item>'/*ion-inline-end:"H:\shareMyRide\src\components\chatmessage\chatmessage.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChatmessageComponent);
    return ChatmessageComponent;
}());

//# sourceMappingURL=chatmessage.js.map

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

/***/ 629:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChannelchatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(616);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__ = __webpack_require__(188);
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






/**
 * Generated class for the ChannelchatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChannelchatPage = /** @class */ (function () {
    function ChannelchatPage(navCtrl, navParams, chat, auth, data) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chat = chat;
        this.auth = auth;
        this.data = data;
        this.value = false;
    }
    ChannelchatPage.prototype.ngOnInit = function () {
        var _this = this;
        this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.data.getProfile(user).subscribe(function (profile) {
                _this.userProfile = profile;
                _this.phoneNumber = _this.userProfile.phone;
                // this.owner=this.userProfile.firstName+this.userProfile.lastName;
            });
        });
        //this.slides.autoHeight=true; 
    };
    ChannelchatPage.prototype.ionViewWillLoad = function () {
        this.channel = this.navParams.get('channel');
        this.channelMessages = this.chat.getChannelChatRef(this.channel.key).snapshotChanges().map(function (changes) {
            return changes.map(function (c) { return (__assign({ key: c.payload.key }, c.payload.val())); });
        });
        //console.log(this.chat.getChannelChatRef(this.channel.key).valueChanges());
    };
    ChannelchatPage.prototype.sendMessage = function (content) {
        if (this.phoneNumber != this.channel.phone) {
            var channelMessage = {
                content: content
            };
            this.chat.sendChannelChatMessage(this.channel.key, channelMessage);
        }
        else {
            var channelMessage = {
                content: content,
                // owner:this.owner,
                phone: this.phoneNumber
            };
            // let admin={owner:this.owner,phone:this.phoneNumber}
            this.chat.sendAdminChannelChatMessage(this.channel.key, channelMessage);
        }
    };
    ChannelchatPage.prototype.back = function () {
        this.navCtrl.popToRoot();
    };
    ChannelchatPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-channelchat',template:/*ion-inline-start:"H:\shareMyRide\src\pages\channelchat\channelchat.html"*/'<!--\n\n  Generated template for the ChannelchatPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n<ion-navbar color="mycolor"  hideBackButton>\n\n \n\n    <ion-buttons left>\n\n    <button ion-button (click)="back()">\n\n              <ion-icon style="font-size:23px" name="md-arrow-back"></ion-icon>\n\n              </button>\n\n    </ion-buttons>\n\n     <ion-buttons right >\n\n    <button ion-button (click)="onNotification()">\n\n              <ion-icon style="font-size:23px" name="md-notifications"></ion-icon>\n\n              </button>\n\n    </ion-buttons>               \n\n    <ion-title align="center" >{{channel.name}}</ion-title>\n\n    <!-- style="margin-right:8vh" -->\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n<ion-list>\n\n    <ion-item *ngFor="let message of channelMessages | async ">\n\n   \n\n    <ion-label color="mycolor" style="font-weight:bold" *ngIf="message.phone!=undefined; else right">\n\n     <!-- <ion-avatar item-left > -->\n\n  <!-- <img  src="/assets/imgs/avatar.png" alt="Avatar"></ion-avatar> -->\n\n    <!-- <h2>{{message.owner}}</h2> -->\n\n   <!-- <p>{{messages.lastMessage}}</p> -->\n\n     \n\n\n\n       {{message.content | titlecase}}</ion-label>\n\n       <!-- <p color="mycolor">{{message.content}}</p></h3> -->\n\n\n\n<ng-template #right>\n\n<ion-label class="chat-message__message-right">\n\n     <!-- <ion-avatar item-left> -->\n\n  <!-- <img src="/assets/imgs/avatar.png" alt="Avatar"></ion-avatar> -->\n\n    <!-- <h2>{{message.owner}}</h2> -->\n\n   <!-- <p>{{messages.lastMessage}}</p> -->\n\n     <!-- </ion-item> -->\n\n\n\n       <p>{{message.content | titlecase}}</p> </ion-label>\n\n\n\n\n\n</ng-template>\n\n     </ion-item> \n\n </ion-list>\n\n</ion-content>\n\n<ion-footer style="height:50px">\n\n<ion-toolbar>\n\n   <messagebox (sendMessage)="sendMessage($event)"></messagebox>\n\n</ion-toolbar>\n\n</ion-footer>'/*ion-inline-end:"H:\shareMyRide\src\pages\channelchat\channelchat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_chat_service_chat_service__["a" /* ChatServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__["a" /* DataProvider */]])
    ], ChannelchatPage);
    return ChannelchatPage;
}());

//# sourceMappingURL=channelchat.js.map

/***/ })

});
//# sourceMappingURL=1.js.map