webpackJsonp([17],{

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__(22);
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



/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AuthService = /** @class */ (function () {
    function AuthService(auth) {
        this.auth = auth;
        console.log('Hello AuthProvider Provider');
    }
    AuthService.prototype.isLoggedIn = function () {
        return this.auth.authState.pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["first"])());
    };
    AuthService.prototype.getAuthenticatedUser = function () {
        return this.auth.authState;
    };
    AuthService.prototype.createUserWithEmailAndPassword = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = {};
                        return [4 /*yield*/, this.auth.auth.createUserWithEmailAndPassword(account.email, account.password)];
                    case 1: return [2 /*return*/, (_a.result = _b.sent(),
                            _a)];
                    case 2:
                        e_1 = _b.sent();
                        return [2 /*return*/, {
                                error: e_1
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signInWithEmailAndPassword = function (account) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 2, , 3]);
                        _a = {};
                        return [4 /*yield*/, this.auth.auth.signInWithEmailAndPassword(account.email, account.password)];
                    case 1: return [2 /*return*/, (_a.result = _b.sent(),
                            _a)];
                    case 2:
                        e_2 = _b.sent();
                        return [2 /*return*/, {
                                error: e_2
                            }];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AuthService.prototype.signout = function () {
        this.auth.auth.signOut();
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__(22);
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




//import { Observable } from  'rxjs/Observable';
//import { take } from 'rxjs/operators';
//import { take } from 'rxjs/operator/take';
/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataProvider = /** @class */ (function () {
    function DataProvider(database) {
        this.database = database;
        console.log('Hello DataProvider Provider');
    }
    DataProvider.prototype.searchUser = function (firstName) {
        //const query=this.database.list('/profiles')
        var query = this.database.list('/profiles', function (ref) { return ref.orderByChild('firstName').equalTo(firstName); });
        return query.valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1));
    };
    DataProvider.prototype.searchDestination = function (destination) {
        var result = this.database.list('shareride-details', function (ref) { return ref.orderByChild('destination').equalTo(destination); });
        return result.valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1));
    };
    DataProvider.prototype.getProfile = function (user) {
        this.profileObject = this.database.object("/profiles/" + user.uid);
        return this.profileObject.valueChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["take"])(1));
    };
    DataProvider.prototype.saveProfile = function (user, profile) {
        return __awaiter(this, void 0, void 0, function () {
            var e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.profileObject = this.database.object("/profiles/" + user.uid);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.profileObject.set(profile)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                    case 3:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 229;

/***/ }),

/***/ 270:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/channelchat/channelchat.module": [
		590,
		1
	],
	"../pages/channels/channels.module": [
		591,
		9
	],
	"../pages/editprofile/editprofile.module": [
		592,
		6
	],
	"../pages/findride/findride.module": [
		593,
		8
	],
	"../pages/help/help.module": [
		594,
		16
	],
	"../pages/home/home.module": [
		595,
		15
	],
	"../pages/intro/intro.module": [
		596,
		14
	],
	"../pages/login/login.module": [
		597,
		5
	],
	"../pages/message/message.module": [
		598,
		2
	],
	"../pages/moredetails/moredetails.module": [
		599,
		13
	],
	"../pages/mytrips/mytrips.module": [
		600,
		7
	],
	"../pages/navigate/navigate.module": [
		601,
		0
	],
	"../pages/notification/notification.module": [
		602,
		12
	],
	"../pages/offerride/offerride.module": [
		603,
		11
	],
	"../pages/profile/profile.module": [
		604,
		4
	],
	"../pages/signup/signup.module": [
		605,
		3
	],
	"../pages/tabs/tabs.module": [
		606,
		10
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 270;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
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


/*
  Generated class for the ChatServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ChatServiceProvider = /** @class */ (function () {
    function ChatServiceProvider(database) {
        this.database = database;
        console.log('Hello ChatServiceProvider Provider');
    }
    ChatServiceProvider.prototype.addChannel = function (channelName, firstName, lastName, phone) {
        this.database.list("/channel-names").push({ name: channelName, owner: firstName + lastName, phone: phone });
    };
    ChatServiceProvider.prototype.getChannelListRef = function () {
        return this.database.list("channel-names");
    };
    ChatServiceProvider.prototype.getChannelChatRef = function (channelKey) {
        return this.database.list("channels/" + channelKey);
    };
    ChatServiceProvider.prototype.sendChannelChatMessage = function (channelKey, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.database.list("channels/" + channelKey).push(message)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatServiceProvider.prototype.sendAdminChannelChatMessage = function (channelKey, message) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await this.database.list(`channels/${channelKey}`).push(message);
                    return [4 /*yield*/, this.database.list("channels/" + channelKey).push(message)];
                    case 1:
                        //await this.database.list(`channels/${channelKey}`).push(message);
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ChatServiceProvider.prototype.filterData = function (filter) {
        return this.database.list('/channel-names', function (ref) { return ref.orderByChild('phone').equalTo(filter); });
    };
    ChatServiceProvider.prototype.removeChannel = function (channel) {
        // this.database.list(`channels`).remove(channel.key);
        return this.database.list("channel-names").remove(channel.key);
        //return this.database.list(``).remove(channelKey);
    };
    ChatServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], ChatServiceProvider);
    return ChatServiceProvider;
}());

//# sourceMappingURL=chat-service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sharerideService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var sharerideService = /** @class */ (function () {
    // private filter=this.db.list('/shareride-details',ref=>ref.orderByChild('email').equalTo('basit@gmail.com')).valueChanges();
    function sharerideService(db) {
        this.db = db;
        this.sharerideRef = this.db.list('shareride-details');
        //console.log(this.filter);
    }
    sharerideService.prototype.getrideDetails = function () {
        return this.sharerideRef;
    };
    sharerideService.prototype.addrideDetails = function (sharerides) {
        return this.sharerideRef.push(sharerides);
    };
    sharerideService.prototype.filterData = function (filter) {
        return this.db.list('/shareride-details', function (ref) { return ref.orderByChild('email').equalTo(filter); });
    };
    sharerideService.prototype.removeDetails = function (sharerides) {
        return this.sharerideRef.remove(sharerides.key);
    };
    sharerideService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["AngularFireDatabase"]])
    ], sharerideService);
    return sharerideService;
}());

//# sourceMappingURL=shareride.service.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(470);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(586);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_credentials__ = __webpack_require__(587);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_data_data_service__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__ = __webpack_require__(588);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_shareride_shareride_service__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_sms__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_chat_service_chat_service__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_paypal__ = __webpack_require__(589);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




//import { OffersPage } from '../pages/about/about';
//import { HomePage } from '../pages/home/home';
//import { TabsPage } from '../pages/tabs/tabs';


//import { OffersPage } from '../pages/Offers/Offers';
//import { IntroPage } from '../pages/intro/intro';
//import { LoginPage } from '../pages/login/login';
//import { IntroPage } from '../pages/intro/intro';
//import { HelpPage } from '../pages/help/help';
//import { OfferridePage } from '../pages/offerride/offerride';
//import { FindridePage } from '../pages/findride/findride';
//import { NotificationPage } from '../pages/notification/notification';
//import { NavigatePage } from '../pages/navigate/navigate';

//import { SignupPage } from '../pages/signup/signup';
//import { AuthService } from '../services/auth';





//import {AngularFireDatabaseModule} from 'angularfire2/database';








//import { AgmCoreModule } from '@agm/core';
//import { AuthProvider } from '../providers/auth/auth';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_auth__["AngularFireAuthModule"], __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["f" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["c" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_8__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true, }, {
                    links: [
                        { loadChildren: '../pages/channelchat/channelchat.module#ChannelchatPageModule', name: 'ChannelchatPage', segment: 'channelchat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/channels/channels.module#ChannelsPageModule', name: 'ChannelsPage', segment: 'channels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofile/editprofile.module#EditprofilePageModule', name: 'EditprofilePage', segment: 'editprofile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/findride/findride.module#FindridePageModule', name: 'FindridePage', segment: 'findride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/help/help.module#HelpPageModule', name: 'HelpPage', segment: 'help', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro/intro.module#IntroPageModule', name: 'IntroPage', segment: 'intro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/message/message.module#MessagePageModule', name: 'MessagePage', segment: 'message', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/moredetails/moredetails.module#MoredetailsPageModule', name: 'MoredetailsPage', segment: 'moredetails', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/mytrips/mytrips.module#MytripsPageModule', name: 'MytripsPage', segment: 'mytrips', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/navigate/navigate.module#NavigatePageModule', name: 'NavigatePage', segment: 'navigate', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offerride/offerride.module#OfferridePageModule', name: 'OfferridePage', segment: 'offerride', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }), __WEBPACK_IMPORTED_MODULE_12_angularfire2_database__["AngularFireDatabaseModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_10__providers_auth_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_native_geocoder__["a" /* NativeGeocoder */], __WEBPACK_IMPORTED_MODULE_15__providers_shareride_shareride_service__["a" /* sharerideService */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_sms__["a" /* SMS */],
                __WEBPACK_IMPORTED_MODULE_18__providers_chat_service_chat_service__["a" /* ChatServiceProvider */], __WEBPACK_IMPORTED_MODULE_19__ionic_native_paypal__["a" /* PayPal */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__ = __webpack_require__(188);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//import { IntroPage } from '../pages/intro/intro';
//import { helpPage } from '../pages/help/help';
//import { LoginPage } from '../pages/login/login';
//import { LoginPage } from '../pages/login/login';
//import { FindridePage } from '../pages/findride/findride';
//import { OfferridePage } from '../pages/offerride/offerride';
//import { SignupPage } from '../pages/signup/signup';
//import { TabsPage } from '../pages/tabs/tabs';
//import { HomePage } from '../pages/home/home';
var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menucntrl, auth, data, load) {
        /*this.auth.getAuthenticatedUser().subscribe(auth=>{
          !auth ?
          this.rootPage ='LoginPage'  : this.rootPage='TabsPage';
        })*/
        var _this = this;
        this.menucntrl = menucntrl;
        this.auth = auth;
        this.data = data;
        this.load = load;
        this.loginpage = 'LoginPage';
        this.offerpage = 'OfferridePage';
        this.ridepage = 'FindridePage';
        this.tabspage = 'TabsPage';
        this.profilepage = 'ProfilePage';
        this.mytripspage = 'MytripsPage';
        this.isAuthenticated = false;
        this.user = {};
        this.profile = {};
        this.authenticatedUser$ = this.auth.getAuthenticatedUser().subscribe(function (user) {
            _this.authenticatedUser = user;
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.ngOnInit = function () {
        var _this = this;
        var loading = this.load.create({
            content: 'Loading ...'
        });
        loading.present();
        this.auth.getAuthenticatedUser().subscribe(function (auth) {
            if (auth) {
                _this.data.getProfile(_this.authenticatedUser).subscribe(function (profile) {
                    if (profile) {
                        _this.email = profile.email;
                        _this.firstName = profile.firstName;
                        _this.lastName = profile.lastName;
                        _this.rootPage = 'TabsPage';
                        // this.rootPage='FindridePage';
                        loading.dismiss();
                    }
                    else {
                        _this.rootPage = 'LoginPage';
                        loading.dismiss();
                    }
                });
            } //if close
            else {
                _this.rootPage = 'IntroPage';
                loading.dismiss();
            }
        });
    };
    MyApp.prototype.onsidemenu = function (page) {
        //this.nav.setRoot(page);
        this.nav.push(page);
        this.menucntrl.close();
    };
    MyApp.prototype.onLogout = function () {
        this.auth.signout();
        this.nav.setRoot('LoginPage');
        this.menucntrl.close();
    };
    MyApp.prototype.ngOnDestroy = function () {
        this.authenticatedUser$.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"H:\shareMyRide\src\app\app.html"*/'<!-- <ion-menu [content]="content"> -->\n\n\n\n\n\n<!-- <ion-content padding> -->\n\n<!-- <ion-grid no padding> -->\n\n  <!-- <ion-row align-items-end> -->\n\n    <!-- <ion-col col auto> -->\n\n     <!-- <ion-icon -->\n\n<!-- </ion-content> -->\n\n\n\n\n\n<ion-menu [swipeEnabled]="false" [content]="content">\n\n\n\n          \n\n          <ion-card color="mycolor" style="width:auto" class="profileview" no-margin ><ion-card-content text-center>\n\n          \n\n                             \n\n                             <ion-item color="mycolor">\n\n                            <ion-avatar class="avatar">\n\n                               <img src="/assets/imgs/profile.png">\n\n                               </ion-avatar></ion-item>\n\n                         <h6 style ="color:white">{{firstName | uppercase}} {{lastName | uppercase}}</h6>\n\n                         <!-- color:#758692 -->\n\n                            \n\n                <p style="font-family:opne-sans; font-size:14px;color:black;margin-top:1.5vh">{{email}}</p>\n\n                </ion-card-content></ion-card>\n\n      \n\n        \n\n  \n\n             <ion-list>\n\n             <button ion-item style="margin-top:1.2vh"(click)="onsidemenu(profilepage)">\n\n            <ion-icon  color="mycolor" name="ios-person" item-left></ion-icon>\n\n            \n\n            <span style="font-weight:bold">PROFILE</span>\n\n                  </button>\n\n                \n\n    \n\n\n\n\n\n\n\n       \n\n            <button ion-item style="margin-top:1.2vh"(click)="onsidemenu(ridepage)">\n\n            <ion-icon color="mycolor" name="ios-search" item-left></ion-icon>\n\n          \n\n             <span style="font-weight:bold">FIND RIDE</span>\n\n            </button>\n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FIND RIDE</h4> -->\n\n                   \n\n\n\n\n\n          \n\n        <button ion-item style="margin-top:1.2vh" (click)="onsidemenu(offerpage)">\n\n            <ion-icon color="mycolor" name="ios-people" item-left></ion-icon>\n\n              \n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;OFFER RIDE</h4> -->\n\n          \n\n                   <span style="font-weight:bold">OFFER RIDE</span>\n\n                  </button>       \n\n          \n\n           <button ion-item style="margin-top:1.2vh" (click)="onsidemenu(mytripspage)">\n\n            <ion-icon color="mycolor" name="ios-send" item-left></ion-icon>\n\n                  \n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;MY TRIPS</h4> -->\n\n              \n\n                 <span style="font-weight:bold">MY TRIPS</span>\n\n                 </button>\n\n\n\n           <button ion-item style="margin-top:1.2vh">\n\n            <ion-icon color="mycolor" name="ios-settings" item-left></ion-icon>\n\n        \n\n               <span style="font-weight:bold">SETTINGS</span>\n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SETTINGS</h4> -->\n\n                   </button>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n           <button ion-item style="margin-top:1.2vh">\n\n            <ion-icon  color="mycolor" name="md-share" item-left></ion-icon>\n\n                  \n\n                   <span style="font-weight:bold">SPREAD THE WORD</span>\n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SPREAD THE WORD</h4> -->\n\n                   </button>\n\n\n\n             \n\n\n\n\n\n            \n\n\n\n\n\n        <button ion-item style="margin-top:1.2vh">\n\n            <ion-icon color="mycolor" name="ios-star" item-left></ion-icon>\n\n                \n\n                 <span style="font-weight:bold">RATE US</span>\n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;RATE US</h4> -->\n\n                   </button>\n\n           \n\n\n\n\n\n          <button ion-item style="margin-top:1.2vh" (click)="onLogout()">\n\n            <ion-icon color="mycolor" name="ios-power" item-left></ion-icon>\n\n                \n\n                  <span style="font-weight:bold">LOGOUT</span>\n\n                   <!-- <h4 style="font-weight:bold;color:black;font-size:20px;letter-spacing0.5px;margin-top:1.2vh">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LOGOUT</h4> -->\n\n                   </button>\n\n\n\n\n\n        \n\n         </ion-list>\n\n                        \n\n          \n\n  \n\n\n\n</ion-menu><ion-nav  [root]="rootPage" #content></ion-nav >\n\n'/*ion-inline-end:"H:\shareMyRide\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_5__providers_data_data_service__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 587:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyAqXyjyFKGqYFeKy4T-3v_vA8gj_EWT3EA",
    authDomain: "ionic-sharemyride.firebaseapp.com",
    databaseURL: "https://ionic-sharemyride.firebaseio.com",
    projectId: "ionic-sharemyride",
    storageBucket: "ionic-sharemyride.appspot.com",
    messagingSenderId: "990167925848"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ })

},[352]);
//# sourceMappingURL=main.js.map