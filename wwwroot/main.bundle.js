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
exports.push([module.i, "/* font-family: 'Rubik', sans-serif;\nfont-family: 'Roboto Mono', monospace; */\nbody {\n    color: white;\n    padding-bottom: 70px;\n}\n.container {\n    padding-bottom: 70px;\n}\n\n.top-row {\n    margin-bottom: 20px;\n}\n\n.text {\n    color: white;\n    font-family: 'Rubik', sans-serif;\n}\n.rules-text{\n    color: white;\n    font-family: 'Roboto Mono', monospace;\n    margin-top: 10px;\n}\n\n.score {\n    border-radius: 0px 0px 12px 12px;\n    height: 3em;\n    line-height: 3em;\n    vertical-align: middle;\n    text-align: center;\n    margin: 0;\n    padding: 0;\n    font-size: 2.5em;\n}\n.red-score {\n    background: #f44336;\n}\n.blue-score {\n    background: #3030FF;\n}\n.dojo-score {\n    background: #E8BF81;\n}\n\n.capitalize {\n    text-transform: capitalize;\n }\n.card {\n    border: 2px solid black;\n    border-radius: 6px;\n    height: 90px;\n    padding: 5px;\n    margin: 1%;\n    background: #16C098;\n    text-align: center;\n    vertical-align: middle;\n    line-height: 90px;   \n    font-size: 1.375em;\n    width: 18%;\n    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */\n    color: snow;\n    font-family: 'Rubik', sans-serif;\n}\n\n.card-container {\n    background: #2e2e2e;\n    text-align: center;\n    width: 100%;\n}\n\n.card-container-red {\n    border: 2px solid #f44336;\n}\n.card-container-blue {\n    border: 2px solid #3030FF;\n}\n\n/* .redTurn{\n    border: 50px solid red;\n}\n.blueTurn{\n    border: 50px solid blue;\n} */\n.redCard {\n    background: #FE9494;\n}\n\n.blueCard {\n    background: #6666FF;\n}\n\n.whiteCard {\n    background: #E8BF81;\n}\n\n.blackCard {\n    background: #303030;\n}\n.testClass {\n    background: yellow;\n}\n\n.exposedRed {\n    background: #f44336;\n}\n\n.exposedBlue {\n    background: #3030FF;\n}\n\n.exposedWhite {\n    background: #E8BF81;\n}\n\n.exposedBlack {\n    background: black;\n}\n\ntd > .dn-button  {\n    background: #16C098;\n    color: white;\n    border: 1px solid #424242;\n    padding: 12px;\n    border-radius: 8px;\n    width: 12em;\n}\n.dn-button-start {\n    margin-top: 20px;\n    background: #16C098;\n    color: white;\n    border: 1px solid #424242;\n    font-family: 'Rubik', sans-serif;\n    width: 16em;\n    border-radius: 8px;\n    padding: 5px;\n\n}\n\n.table {\n    border-radius: 5px;\n    width: 60%;\n    margin: 0px auto;\n    float: none;\n    text-align: center;\n    margin-top: 1.5em;\n    margin-bottom: 1.5em;\n    font-family: 'Rubik', sans-serif;\n}\n.table > tbody > tr > td {\n    vertical-align: middle;\n}\n.table-header{\n    background: #E8BF81;\n    color: white;\n    height: 2em;\n    border-radius: 5px;\n    font-size: 3em;\n    \n}\n\n.table>tbody>tr>td{\n    border-top: 1px solid #2e2e2e;\n}\n\n.game-table {\n    background: #2e2e2e;\n}\n.game-row{\n    color: white;\n    font-size: 1.5em;\n}\n.table-curved {\n    border-collapse: separate;\n}\n.table-curved {\n    /* border: solid #ccc 1px; */\n    border-radius: 6px;\n}\n.table-curved td, .table-curved th {\n    /* border-left: 1px solid inherit;\n    border-top: 1px solid inherit; */\n}\n.table-curved tr > *:first-child {\n    border-left: 0px;\n}\n.table-curved tr:first-child > * {\n    border-top: 0px;\n}\n\n.hint-table {\n    text-align: left;\n}\n.hint-labels {\n    color: #626262;\n    font-size: 2.5em;\n}\n.hint-hints{\n    color: white;\n    font-size: 3em;\n}\n\n.hint-label{\n    color: white;\n    font-size: 2em;\n    font-family: 'Rubik', sans-serif;\n}\n\n.dn-button-hint {\n    background: #16C098;\n    color: white;\n    border: 1px solid #424242;\n    font-family: 'Rubik', sans-serif;\n    width: 100%;\n    border-radius: 8px;\n    padding: 10px;\n    font-size: 2em;\n\n}\n\n.dn-footer{\n    background: #2e2e2e;\n    text-align: right;\n    vertical-align: middle; \n    height: 30px;\n    line-height: 50px;\n    margin-top: -10px;\n}\n\n.footer-text{\n    margin-right: 10px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div [ngClass]=\"{'redTurn': phase != 'waiting' && (turn == 'red' || phase =='redWin'), 'blueTurn': phase !='waiting' && (turn == 'blue' || phase == 'blueWin')}\" class='container-fluid'>\n  <div class='row top-row' *ngIf=\"phase !== ''\">\n    <div class='col-md-7'>\n      <div class='col-sm-6'>\n        <h3 class='text score dojo-score'>Codenames</h3>\n      </div>\n      <div class='col-sm-6'>\n        <p class='rules-text'>\n          Each turn a codemaster will decide on a hint and the number\n          of cards associate with that hint.</p>\n          <p class='rules-text'>Members of the same team will then take guesses based on that hint\n            to try and reveal their team's cards.\n        </p>\n    </div>\n\n    </div>\n    <div class='col-md-5'>\n      <div class='col-sm-6'>\n        <h3 class='text score red-score'>Red Score:  {{redTeamScore}}</h3>\n      </div>\n      <div class='col-sm-6'>\n        <h3 class='text score blue-score'>Blue Score:  {{blueTeamScore}}</h3>\n      </div>\n    </div>\n\n\n  </div>\n\n  <!-- <div class='col-md-12'> -->\n    <div class='col-md-4'>\n\n      <div *ngIf=\"phase == 'waiting'\">\n        <h3>Waiting for game to start</h3>\n      </div>\n\n      <div *ngIf=\"phase == 'hinting' && client== 'guessing'\">\n        <h3>Waiting for Hint...</h3>\n      </div>\n      <div *ngIf=\"phase == 'redWin'\">\n          <h3>Red Team Wins!</h3>\n      </div>\n    \n      <div *ngIf=\"phase == 'blueWin'\">\n        <h3>Blue Team Wins!</h3>\n      </div>\n    \n      <h3 *ngIf=\"phase!=''\" class='text'><span class=\"capitalize\">{{turn}}</span> team's turn</h3>\n      <div *ngIf=\"phase == 'hinting' && client == 'hinting'\">\n        <h3 class='text'>Hinting Phase</h3>\n        <form (submit)=\"submitHint()\">\n          <div class='form-group'>\n            <label class=\"hint-label\">Hint: </label>\n            <input type=\"text\" name=\"hint\" [(ngModel)]=\"hint\" class='form-control' placeholder=\"Hint\">\n          </div>\n          <div class='form-group'>\n          <label class=\"hint-label\"># of cards: </label>\n          <input type=\"text\" name=\"count\" [(ngModel)]=\"count\" class='form-control' placeholder=\"1\">\n          </div>\n          <input type=\"submit\" value=\"Submit Hint\" class='btn btn-default dn-button-hint'>\n        </form>\n      </div>\n\n      <div *ngIf=\"phase == 'guessing' && client=='guessing'\">\n\n        \n        <table class='table hint-table'>\n          <tr class='hint-labels'>\n            <td>Hint</td>\n            <td>#</td>\n          </tr>\n          <tr class='hint-hints'>\n            <td>{{LastHint}}</td>\n            <td>{{HintCount}}</td>\n          </tr>\n        </table>\n        <button (click)=\"endTurn()\" class='btn btn-default dn-button-hint'>End Turn</button>\n      </div>\n\n    </div>\n\n    <div class='col-md-8'>\n      \n        <div *ngIf=\"client == 'hinting'\">\n            <div class=\"row card-container\" [ngClass]=\"{'card-container-red': turn=='red', 'card-container-blue': turn=='blue'}\">\n              <div *ngFor=\"let card of cards; let i = index\">\n                <!-- <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div> -->\n                <div class=\"col-sm-2 card\" *ngIf=\"i % 5 == 0\" [ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\n                <div class=\"col-sm-2 card\" *ngIf=\"i % 5 != 0\"[ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\n              </div>\n          </div>\n        </div>\n\n        <div *ngIf=\"client == 'guessing'\">\n            <div class=\"row card-container\" [ngClass]=\"{'card-container-red': turn=='red', 'card-container-blue': turn=='blue'}\">\n                <div *ngFor=\"let card of cards; let i = index\">\n                  <!-- <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div> -->\n                  <div class=\"col-md-offset-1 col-md-2 card\" *ngIf=\"i % 5 == 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\n                  <div class=\"col-md-2 card\" *ngIf=\"i % 5 != 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\n                  \n                </div>\n            </div>\n        </div>\n\n\n    </div>\n    <!-- Homepage-->\n    <div class='col-md-12'>\n      <div *ngIf=\"client == 'waiting'\">\n          <button *ngIf=\"client =='waiting'\" (click)=\"newGame()\" class='btn btn-default dn-button-start center-block'>Start a new game!</button>\n        <table class='table game-table table-curved'>\n          <tr>\n            <td align=\"center\" colspan=\"2\" class=\"table-header\">Codenames</td>\n          </tr>\n          <tr *ngFor=\"let game of games\">\n            <td class='game-row'  width=\"50%\">{{game.gameId}}</td>\n            <td width=\"50%\"><button (click) = \"joinGame(game.gameId)\" class=\"btn btn-default dn-button\">Join</button></td>\n          </tr>\n        </table>\n\n\n        <!-- <ul>\n          <li *ngFor=\"let game of games\">\n            <button (click) = \"joinGame(game.gameId)\" class=\"btn btn-default dn-button\">{{game.gameId}} Join Game</button>\n          </li>\n        </ul> -->\n      </div>\n\n    </div>\n  <!-- </div> -->\n</div>\n<div class=\"navbar navbar-fixed-bottom dn-footer\">\n  <span class='rules-text footer-text'> 2017 Mike Bergstrom and Michael Hartley</span>\n    \n</div>\n\n\n"

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
    };
    AppComponent.prototype.clickCard = function (cardIdx) {
        var _this = this;
        console.log(this.cards[cardIdx]); //update the local copy
        if (!this.cards[cardIdx].isExposed && this.phase == "guessing") {
            this.redTeamScore++;
            this.cards[cardIdx].isExposed = true;
            console.log("this is the card i am trying to update from the component", this.cards[cardIdx]);
            this._apiService.updateDeck(this.cards[cardIdx].cardId)
                .then(function (response) { console.log('response: ', response); _this.updateGame(); _this.intervalCall(); })
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
            _this.intervalCall();
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
        if (this.phase == this.client) {
        }
    };
    AppComponent.prototype.intervalCall = function () {
        var _this = this;
        {
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1000).takeWhile(function (x) { return _this.phase != _this.client || _this.phase == "waiting"; }).subscribe(function (x) {
                _this.updateGame();
            });
        }
    };
    AppComponent.prototype.joinGame = function (GameId) {
        var _this = this;
        this._apiService.joinGame(GameId)
            .then(function () { _this.client = "guessing"; _this.updateGame(); _this.intervalCall(); })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.submitHint = function () {
        this._apiService.submitHint(this.hint, this.count);
        // setTimeout(this.updateGame(), 2000);
        this.phase = "guessing";
        // this.turn = this.turn == "red" ? "blue" : "red";
        this.hint = "";
        this.count = 0;
        setTimeout(this.intervalCall(), 4000);
    };
    AppComponent.prototype.endTurn = function () {
        console.log("end turn in app component.ts");
        this._apiService.endTurn();
        this.turn = this.turn == "red" ? "blue" : "red";
        this.phase = "hinting";
        // this.updateGame();
        setTimeout(this.intervalCall(), 4000);
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