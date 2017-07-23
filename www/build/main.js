webpackJsonp([0],{

/***/ 23:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 23;

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 25;

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/home/home.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(camera) {
        this.camera = camera;
        this.base64Image = null;
        this.base64ImageProcessoed = null;
        this.effectList = null;
        this.effectList = new Array();
        this.effectList.push('Vintage');
        this.effectList.push('Lomo');
        this.effectList.push('Clarity');
        this.effectList.push('Sin City');
        this.effectList.push('Sunrise');
        this.effectList.push('Cross Process');
        this.effectList.push('Orange Peel');
        this.effectList.push('Love');
        this.effectList.push('Grungy');
        this.effectList.push('Jarques');
        this.effectList.push('Pinhole');
        this.effectList.push('Old Boot');
        this.effectList.push('Glowing Sun');
        this.effectList.push('Hazy Days');
        this.effectList.push('Her Majesty');
        this.effectList.push('Nostalgia');
        this.effectList.push('Hemingway');
        this.effectList.push('Concentrate');
    }
    HomePage.prototype.getPicture = function () {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            _this.base64Image = null;
            alert("Something went wrong: " + JSON.stringify(err));
        });
    };
    HomePage.prototype.doEffect = function (effectName) {
        switch (effectName) {
            case 'Vintage':
                Caman("#userImage", function () {
                    this.revert();
                    this.vintage().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Lomo':
                Caman("#userImage", function () {
                    this.revert();
                    this.lomo().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Clarity':
                Caman("#userImage", function () {
                    this.revert();
                    this.clarity().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Sin City':
                Caman("#userImage", function () {
                    this.revert();
                    this.sinCity().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Sunrise':
                Caman("#userImage", function () {
                    this.revert();
                    this.sunrise().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Cross Process':
                Caman("#userImage", function () {
                    this.revert();
                    this.crossProcess().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Orange Peel':
                Caman("#userImage", function () {
                    this.revert();
                    this.orangePeel().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Love':
                Caman("#userImage", function () {
                    this.revert();
                    this.love().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Grungy':
                Caman("#userImage", function () {
                    this.revert();
                    this.grungy().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Jarques':
                Caman("#userImage", function () {
                    this.revert();
                    this.jarques().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Pinhole':
                Caman("#userImage", function () {
                    this.revert();
                    this.pinhole().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Old Boot':
                Caman("#userImage", function () {
                    this.revert();
                    this.oldBoot().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Glowing Sun':
                Caman("#userImage", function () {
                    this.revert();
                    this.glowingSun().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Hazy Days':
                Caman("#userImage", function () {
                    this.revert();
                    this.hazyDays().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Her Majesty':
                Caman("#userImage", function () {
                    this.revert();
                    this.herMajesty().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Nostalgia':
                Caman("#userImage", function () {
                    this.revert();
                    this.nostalgia().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Hemingway':
                Caman("#userImage", function () {
                    this.revert();
                    this.hemingway().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
            case 'Concentrate':
                Caman("#userImage", function () {
                    this.revert();
                    this.concentrate().render(function () {
                        console.log("Effect done: " + effectName);
                    });
                });
                break;
        }
    };
    return HomePage;
}());
HomePage = __decorate([
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-home',template:/*ion-inline-start:"/home/wasim/WasimData/Development/HybridApps/ionic2/projects/EffectMe/MyWebAppSideMenu/src/pages/home/home.html"*/'<ion-header>\n  	<ion-navbar>\n    	<ion-title>Effect Me</ion-title>\n  	</ion-navbar>\n</ion-header>\n\n<ion-content padding>\n	<ion-row>\n    	<ion-col col-12>\n			<button ion-button full (click)="getPicture()">Take Photo</button>\n		</ion-col>\n  	</ion-row>\n	<div *ngIf="base64Image">\n		<ion-row>\n			<ion-col col-12>\n				<img id="userImage" style="width:100%;" [src]="base64Image"/>\n			</ion-col>\n		</ion-row>\n		<ion-row>\n			<ion-col col-12>\n				<button ion-button *ngFor="let effect of effectList" (click)="doEffect(effect)">\n					{{ effect }}\n				</button>\n			</ion-col>\n		</ion-row>\n	</div>\n	\n</ion-content>\n'/*ion-inline-end:"/home/wasim/WasimData/Development/HybridApps/ionic2/projects/EffectMe/MyWebAppSideMenu/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */]])
], HomePage);

//# sourceMappingURL=home.js.map
// CONCATENATED MODULE: ./src/pages/list/list.ts
/* harmony import */ var list___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var list___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var list___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = ListPage_1 = (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    return ListPage;
}());
ListPage = ListPage_1 = list___decorate([
    list___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({
        selector: 'page-list',template:/*ion-inline-start:"/home/wasim/WasimData/Development/HybridApps/ionic2/projects/EffectMe/MyWebAppSideMenu/src/pages/list/list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon [name]="item.icon" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <div *ngIf="selectedItem" padding>\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/home/wasim/WasimData/Development/HybridApps/ionic2/projects/EffectMe/MyWebAppSideMenu/src/pages/list/list.html"*/
    }),
    list___metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], ListPage);

var ListPage_1;
//# sourceMappingURL=list.js.map
// CONCATENATED MODULE: ./src/app/app.component.ts
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(27);
var app_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var app_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var app_component_MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = HomePage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: HomePage },
            { title: 'List', component: ListPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    return MyApp;
}());
app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* ViewChild */](app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */]),
    app_component___metadata("design:type", app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Nav */])
], app_component_MyApp.prototype, "nav", void 0);
app_component_MyApp = app_component___decorate([
    app_component___WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */]({template:/*ion-inline-start:"/home/wasim/WasimData/Development/HybridApps/ionic2/projects/EffectMe/MyWebAppSideMenu/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/wasim/WasimData/Development/HybridApps/ionic2/projects/EffectMe/MyWebAppSideMenu/src/app/app.html"*/
    }),
    app_component___metadata("design:paramtypes", [app_component___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], app_component_MyApp);

//# sourceMappingURL=app.component.js.map
// CONCATENATED MODULE: ./src/app/app.module.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(28);
var app_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = app_module___decorate([
    __WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */]({
        declarations: [
            app_component_MyApp,
            HomePage,
            ListPage
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(app_component_MyApp),
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            app_component_MyApp,
            HomePage,
            ListPage
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map
// CONCATENATED MODULE: ./src/app/main.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(30);


__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */]().bootstrapModule(AppModule);
//# sourceMappingURL=main.js.map

/***/ })

},[29]);
//# sourceMappingURL=main.js.map