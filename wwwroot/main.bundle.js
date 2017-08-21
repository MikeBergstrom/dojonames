webpackJsonp(["main"],{

/***/ "../../../../../client-src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../client-src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../client-src/app/api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ApiService = (function () {
    function ApiService(_http) {
        this._http = _http;
    }
    ApiService.prototype.getDeck = function () {
        console.log("In API service call");
        return this._http.get('/api/get_deck')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.updateDeck = function (cardId) {
        console.log("updating the deck now!");
        console.log("this is the card i am trying to update from the service", cardId);
        return this._http.get("/api/update_deck/" + cardId)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.makeNewGame = function () {
        console.log("going thru new game service");
        return this._http.get('/api/create_game_in_database')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    return ApiService;
}());
ApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], ApiService);

var _a;
//# sourceMappingURL=api.service.js.map

/***/ }),

/***/ "../../../../../client-src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n    border: 2px solid black;\n    height: 180px;\n    padding: 5px;\n    margin: 15px;\n    background: #B5FFB5;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 180px;   \n    font-size: 2em;\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\n    color: snow;\n}\n\n\n.redCard {\n    background: #FE9494;\n}\n\n.blueCard {\n    background: #6666FF;\n}\n\n.whiteCard {\n    background: #FFFEB6;\n}\n\n.blackCard {\n    background: #303030;\n}\n.testClass {\n    background: yellow;\n}\n\n.exposedRed {\n    background: red;\n}\n\n.exposedBlue {\n    background: blue;\n}\n\n.exposedWhite {\n    background: yellow;\n}\n\n.exposedBlack {\n    background: black;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n{{deck.cards | json}}\n<div class='container'>\n\n  <!-- <div class='col-md-12'> -->\n    <h3>Red Team: {{redTeamScore}}</h3>\n    <h3>Blue Team: {{blueTeamScore}}</h3>\n    <div *ngIf=\"codeMaster\">\n      <div class=\"row\">\n          <div *ngFor=\"let card of deck.cards; let i = index\">\n            <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div>\n            <div class=\"col-sm-2 card\" *ngIf=\"i % 5 == 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\n            <div class=\"col-sm-2 card\" *ngIf=\"i % 5 != 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\n          </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"gamePlayer\">\n        <div class=\"row\">\n            <div *ngFor=\"let card of deck.cards; let i = index\">\n              <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div>\n              <div class=\"col-md-offset-1 col-md-2 card\" *ngIf=\"i % 5 == 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}} {{card.cardId}}</div>\n              <div class=\"col-md-2 card col-md-offset-1\" *ngIf=\"i % 5 != 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}} {{card.cardId}}</div>\n            </div>\n        </div>\n    </div>\n\n    <button (click)=\"newGame()\" class='btn btn-default'>Start a new game!</button>\n  <!-- </div> -->\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../client-src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../client-src/app/api.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_apiService) {
        this._apiService = _apiService;
        this.title = 'app';
        this.codeMaster = true;
        this.gamePlayer = true;
        this.redTeamScore = 0;
        this.blueTeamScore = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._apiService.getDeck()
            .then(function (deck) { _this.deck = deck; console.log('got deck', _this.deck); })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.clickCard = function (cardIdx) {
        console.log(this.deck.cards[cardIdx]); //update the local copy
        if (this.deck.cards[cardIdx].color == "red" && !this.deck.cards[cardIdx].isExposed) {
            this.redTeamScore++;
        }
        else if (this.deck.cards[cardIdx].color == "blue" && !this.deck.cards[cardIdx].isExposed) {
            this.blueTeamScore++;
        }
        this.deck.cards[cardIdx].isExposed = true;
        console.log("this is the card i am trying to update from the component", this.deck.cards[cardIdx]);
        this._apiService.updateDeck(this.deck.cards[cardIdx].cardId)
            .then(function (response) { console.log('response: ', response); })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.newGame = function () {
        var _this = this;
        console.log("clicked the new game button");
        this._apiService.makeNewGame()
            .then(function (response) {
            console.log(response);
            _this._apiService.getDeck()
                .then(function (deck) { _this.deck = deck; console.log('got deck', _this.deck); })
                .catch(function (err) { console.log(err); });
        })
            .catch(function (err) { console.log(err); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../client-src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../client-src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__api_service__["a" /* ApiService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../client-src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__api_service__ = __webpack_require__("../../../../../client-src/app/api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../client-src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_2__api_service__["a" /* ApiService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../client-src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../client-src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../client-src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../client-src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../client-src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map