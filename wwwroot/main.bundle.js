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
        console.log("In API service call get deck");
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
    ApiService.prototype.getGame = function () {
        console.log("update game in service");
        return this._http.get('/api/gameUpdate')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.gameList = function () {
        console.log("gameList");
        return this._http.get('/api/gameList')
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.joinGame = function (GameId) {
        console.log("join game service", GameId);
        return this._http.get("/api/join/" + GameId)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.submitHint = function (hint, count) {
        console.log("submit hint api service", hint, count);
        return this._http.get("/api/hint/" + hint + "/" + count)
            .map(function (data) { return data.json(); })
            .toPromise();
    };
    ApiService.prototype.endTurn = function () {
        console.log("end turn service");
        return this._http.get('/api/endTurn')
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
exports.push([module.i, ".card {\r\n    border: 2px solid black;\r\n    height: 180px;\r\n    padding: 5px;\r\n    margin: 15px;\r\n    background: #B5FFB5;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 180px;   \r\n    font-size: 2em;\r\n    text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;\r\n    color: snow;\r\n}\r\n\r\n\r\n.redCard {\r\n    background: #FE9494;\r\n}\r\n\r\n.blueCard {\r\n    background: #6666FF;\r\n}\r\n\r\n.whiteCard {\r\n    background: #FFFEB6;\r\n}\r\n\r\n.blackCard {\r\n    background: #303030;\r\n}\r\n.testClass {\r\n    background: yellow;\r\n}\r\n\r\n.exposedRed {\r\n    background: red;\r\n}\r\n\r\n.exposedBlue {\r\n    background: blue;\r\n}\r\n\r\n.exposedWhite {\r\n    background: yellow;\r\n}\r\n\r\n.exposedBlack {\r\n    background: black;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div class='container'>\r\n\r\n  <!-- <div class='col-md-12'> -->\r\n    <h3>Red Team: {{redTeamScore}}</h3>\r\n    <h3>Blue Team: {{blueTeamScore}}</h3>\r\n    <div *ngIf=\"phase!='waiting'\">\r\n      <h3>{{turn}} team's turn</h3>\r\n    </div>\r\n    \r\n    <div *ngIf=\"phase == 'waiting'\">\r\n      <h3>Waiting for game to start</h3>\r\n    </div>\r\n\r\n    <div *ngIf=\"phase == 'hinting' && client== 'guessing'\">\r\n      <h3>Waiting for Hint...</h3>\r\n    </div>\r\n\r\n    <div *ngIf=\"phase == 'hinting' && client == 'hinting'\">\r\n      <h3>Enter a hint and number of cards</h3>\r\n      <form (submit)=\"submitHint()\">\r\n        <label>Hint: </label>\r\n        <input type=\"text\" name=\"hint\" [(ngModel)]=\"hint\">\r\n        <label># of cards: </label>\r\n        <input type=\"text\" name=\"count\" [(ngModel)]=\"count\">\r\n        <input type=\"submit\" value=\"Submit Hint\">\r\n      </form>\r\n    </div>\r\n\r\n    <div *ngIf=\"phase == 'guessing' && client=='guessing'\">\r\n      <h3>Hint: {{LastHint}}</h3>\r\n      <h3># of Cards : {{HintCount}}</h3>\r\n      <button (click)=\"endTurn()\">End Turn</button>\r\n    </div>\r\n\r\n    <div *ngIf=\"phase == 'redWin'\">\r\n      <h3>Red Team Wins!</h3>\r\n    </div>\r\n\r\n    <div *ngIf=\"phase == 'blueWin'\">\r\n      <h3>Blue Team Wins!</h3>\r\n    </div>\r\n\r\n    <div *ngIf=\"client == 'hinting'\">\r\n      <div class=\"row\">\r\n          <div *ngFor=\"let card of cards; let i = index\">\r\n            <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div>\r\n            <div class=\"col-sm-2 card\" *ngIf=\"i % 5 == 0\" [ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n            <div class=\"col-sm-2 card\" *ngIf=\"i % 5 != 0\"[ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n          </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"client == 'guessing'\">\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let card of cards; let i = index\">\r\n              <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div>\r\n              <div class=\"col-md-offset-1 col-md-2 card\" *ngIf=\"i % 5 == 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n              <div class=\"col-md-2 card col-md-offset-1\" *ngIf=\"i % 5 != 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <button *ngIf=\"client =='waiting'\" (click)=\"newGame()\" class='btn btn-default'>Start a new game!</button>\r\n    <div *ngIf=\"client == 'waiting'\">\r\n      <h1>Join Game</h1>\r\n      <ul>\r\n        <li *ngFor=\"let game of games\">\r\n          <button (click) = \"joinGame(game.gameId)\">{{game.gameId}}</button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  <!-- </div> -->\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../client-src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_service__ = __webpack_require__("../../../../../client-src/app/api.service.ts");
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



var AppComponent = (function () {
    function AppComponent(_apiService) {
        this._apiService = _apiService;
        this.title = 'app';
        this.client = "waiting";
        this.turn = "";
        this.phase = "";
        this.redTeamScore = 0;
        this.blueTeamScore = 0;
        this.LastHint = "";
        this.hint = "";
        this.count = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._apiService.getDeck()
        // .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
        // .catch(err => {console.log(err)});
        this._apiService.gameList()
            .then(function (games) { _this.games = games; console.log('got game list', games); })
            .catch(function (err) { console.log(err); });
        this.intervalCall();
    };
    AppComponent.prototype.clickCard = function (cardIdx) {
        var _this = this;
        console.log(this.cards[cardIdx]); //update the local copy
        if (!this.cards[cardIdx].isExposed && this.phase == "guessing") {
            this.redTeamScore++;
            this.cards[cardIdx].isExposed = true;
            console.log("this is the card i am trying to update from the component", this.cards[cardIdx]);
            this._apiService.updateDeck(this.cards[cardIdx].cardId)
                .then(function (response) { console.log('response: ', response); _this.updateGame(); })
                .catch(function (err) { console.log(err); });
        }
    };
    AppComponent.prototype.newGame = function () {
        var _this = this;
        console.log("clicked the new game button");
        this._apiService.makeNewGame()
            .then(function (response) {
            console.log(response);
            _this.updateGame();
            _this.client = "hinting";
            // this._apiService.getDeck()
            // .then(cards => {this.cards = cards; this.client="codeMaster"; console.log('got deck', this.cards)})
            // .catch(err => {console.log(err)});
        })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.updateGame = function () {
        var _this = this;
        this._apiService.getGame()
            .then(function (game) { _this.turn = game.turn; _this.redTeamScore = game.redScore; _this.blueTeamScore = game.blueScore; _this.phase = game.phase; _this.LastHint = game.lastHint; _this.HintCount = game.hintCount; _this.GameId = game.gameId; console.log('got game', game); })
            .catch(function (err) { console.log(err); });
        this._apiService.getDeck()
            .then(function (cards) { _this.cards = cards; console.log('got deck', _this.cards); })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.intervalCall = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).subscribe(function (x) {
            _this.updateGame();
        });
    };
    AppComponent.prototype.joinGame = function (GameId) {
        var _this = this;
        this._apiService.joinGame(GameId)
            .then(function () { _this.client = "guessing"; _this.updateGame(); })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.submitHint = function () {
        this._apiService.submitHint(this.hint, this.count);
        this.updateGame();
        this.hint = "";
        this.count = 0;
    };
    AppComponent.prototype.endTurn = function () {
        this._apiService.endTurn();
        this.updateGame();
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