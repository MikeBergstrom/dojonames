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
    ApiService.prototype.makeNewGame = function (gameName) {
        console.log("going thru new game service", gameName);
        return this._http.get("/api/create_game_in_database/" + gameName)
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
    ApiService.prototype.resetGame = function () {
        console.log("reset game service");
        return this._http.get('/api/newGame')
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
exports.push([module.i, "/* font-family: 'Rubik', sans-serif;\r\nfont-family: 'Roboto Mono', monospace; */\r\nbody {\r\n    color: white;\r\n    padding-bottom: 70px;\r\n}\r\n.container {\r\n    padding-bottom: 70px;\r\n}\r\n\r\n.top-row {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.text {\r\n    color: white;\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n.rules-text{\r\n    color: white;\r\n    font-family: 'Roboto Mono', monospace;\r\n    margin-top: 10px;\r\n}\r\n\r\n.score {\r\n    border-radius: 0px 0px 12px 12px;\r\n    height: 3em;\r\n    line-height: 3em;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 2.5em;\r\n}\r\n.red-score {\r\n    background: #f44336;\r\n}\r\n.blue-score {\r\n    background: #3030FF;\r\n}\r\n.dojo-score {\r\n    background: #E8BF81;\r\n}\r\n\r\n.capitalize {\r\n    text-transform: capitalize;\r\n }\r\n.card {\r\n    border: 10px solid #16C098;\r\n    border-radius: 6px;\r\n    height: 90px;\r\n    padding: 5px;\r\n    margin: 1%;\r\n    background: #16C098;\r\n    text-align: center;\r\n    vertical-align: middle;\r\n    line-height: 70px;   \r\n    font-size: 1.375em;\r\n    width: 18%;\r\n    box-shadow: inset 0 0 0 3px white;\r\n    display: inline-block;\r\n    /* text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black; */\r\n    color: snow;\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n.card-container {\r\n    background: #2e2e2e;\r\n    text-align: center;\r\n    width: 100%;\r\n}\r\n\r\n.card-container-red {\r\n    border: 2px solid #f44336;\r\n}\r\n.card-container-blue {\r\n    border: 2px solid #29798C;\r\n}\r\n\r\n/* .redTurn{\r\n    border: 50px solid red;\r\n}\r\n.blueTurn{\r\n    border: 50px solid blue;\r\n} */\r\n.redCard {\r\n    background: #FE9494;\r\n    border: 10px solid #FE9494;\r\n}\r\n\r\n.blueCard {\r\n    background: #4FD8F9;\r\n    border: 10px solid #4FD8F9;\r\n}\r\n\r\n.whiteCard {\r\n    background: #E8BF81;\r\n    border: 10px solid #E8BF81;\r\n}\r\n\r\n.blackCard {\r\n    background: #595959;\r\n    border: 10px solid #595959;\r\n}\r\n.testClass {\r\n    background: yellow;\r\n}\r\n\r\n.exposedRed {\r\n    background: #f44336;\r\n    border: 10px solid #f44336;\r\n}\r\n\r\n.exposedBlue {\r\n    background: #3030FF;\r\n    border: 10px solid #3030FF;\r\n}\r\n\r\n.exposedWhite {\r\n    background: #E8BF81;\r\n    border: 10px solid #E8BF81;\r\n}\r\n\r\n.exposedBlack {\r\n    background: black;\r\n    border: 10px solid black;\r\n}\r\n\r\ntd > .dn-button  {\r\n    background: #16C098;\r\n    color: white;\r\n    border: 1px solid #424242;\r\n    padding: 12px;\r\n    border-radius: 8px;\r\n    width: 12em;\r\n}\r\n.new-game-form{\r\n    margin: 15px;\r\n}\r\n.name-input {\r\n    text-align: center;\r\n}\r\n.dn-button-start {\r\n    margin-top: 20px;\r\n    background: #16C098;\r\n    color: white;\r\n    border: 1px solid #424242;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    padding: 12px;\r\n    font-size: 1.5em;\r\n\r\n}\r\n\r\n.table {\r\n    border-radius: 5px;\r\n    width: 60%;\r\n    margin: 0px auto;\r\n    float: none;\r\n    text-align: center;\r\n    margin-top: 1.5em;\r\n    margin-bottom: 1.5em;\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n.table > tbody > tr > td {\r\n    vertical-align: middle;\r\n}\r\n.table-header{\r\n    background: #E8BF81;\r\n    color: white;\r\n    height: 2em;\r\n    border-radius: 5px;\r\n    font-size: 3em;\r\n    \r\n}\r\n\r\n.table>tbody>tr>td{\r\n    border-top: 1px solid #2e2e2e;\r\n}\r\n\r\n.game-table {\r\n    background: #2e2e2e;\r\n}\r\n.game-row{\r\n    color: white;\r\n    font-size: 1.5em;\r\n}\r\n.table-curved {\r\n    border-collapse: separate;\r\n}\r\n.table-curved {\r\n    /* border: solid #ccc 1px; */\r\n    border-radius: 6px;\r\n}\r\n.table-curved td, .table-curved th {\r\n    /* border-left: 1px solid inherit;\r\n    border-top: 1px solid inherit; */\r\n}\r\n.table-curved tr > *:first-child {\r\n    border-left: 0px;\r\n}\r\n.table-curved tr:first-child > * {\r\n    border-top: 0px;\r\n}\r\n\r\n.hint-table {\r\n    text-align: left;\r\n}\r\n.hint-labels {\r\n    color: #626262;\r\n    font-size: 2.5em;\r\n}\r\n.hint-hints{\r\n    color: white;\r\n    font-size: 3em;\r\n}\r\n\r\n.hint-label{\r\n    color: white;\r\n    font-size: 2em;\r\n    font-family: 'Rubik', sans-serif;\r\n}\r\n\r\n.dn-button-hint {\r\n    background: #16C098;\r\n    color: white;\r\n    border: 1px solid #424242;\r\n    font-family: 'Rubik', sans-serif;\r\n    width: 100%;\r\n    border-radius: 8px;\r\n    padding: 10px;\r\n    font-size: 2em;\r\n\r\n}\r\n\r\n.dn-footer{\r\n    background: #2e2e2e;\r\n    text-align: right;\r\n    vertical-align: middle; \r\n    height: 30px;\r\n    line-height: 50px;\r\n    margin-top: 20px;\r\n}\r\n.game-container {\r\n    margin-bottom: 50px;\r\n}\r\n.footer-text{\r\n    margin-right: 10px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../client-src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n\r\n<div [ngClass]=\"{'redTurn': phase != 'waiting' && (turn == 'red' || phase =='redWin'), 'blueTurn': phase !='waiting' && (turn == 'blue' || phase == 'blueWin')}\" class='container-fluid game-container'>\r\n  <div class='row top-row' *ngIf=\"phase !== ''\">\r\n    <div class='col-md-7'>\r\n      <div class='col-sm-6'>\r\n        <h3 class='text score dojo-score'>Codenames</h3>\r\n      </div>\r\n      <div class='col-sm-6'>\r\n        <p class='rules-text'>\r\n          Each turn a codemaster will decide on a hint and the number\r\n          of cards associated with that hint.</p>\r\n          <p class='rules-text'>Members of the same team will then take guesses based on that hint\r\n            to try and reveal their team's cards.\r\n        </p>\r\n    </div>\r\n\r\n    </div>\r\n    <div class='col-md-5'>\r\n      <div class='col-sm-6'>\r\n        <h3 class='text score red-score'>Score:  0{{redTeamScore}}</h3>\r\n      </div>\r\n      <div class='col-sm-6'>\r\n        <h3 class='text score blue-score'>Score:  0{{blueTeamScore}}</h3>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <!-- <div class='col-md-12'> -->\r\n    <div class='col-md-4'>\r\n\r\n      <div *ngIf=\"phase == 'waiting'\">\r\n        <h3>Waiting for game to start</h3>\r\n      </div>\r\n\r\n      <div *ngIf=\"phase == 'hinting' && client== 'guessing'\">\r\n        <h3>Waiting for Hint...</h3>\r\n      </div>\r\n      <div *ngIf=\"phase == 'redWin'\">\r\n          <h3>Red Team Wins!</h3>\r\n      </div>\r\n    \r\n      <div *ngIf=\"phase == 'blueWin'\">\r\n        <h3>Blue Team Wins!</h3>\r\n      </div>\r\n\r\n      <div *ngIf=\"(phase == 'blueWin' || phase=='redWin') && client=='hinting'\">\r\n        <button (click)=\"resetGame()\" class='btn btn-default dn-button-start'>Start a New Game</button>\r\n      </div>\r\n    \r\n      <h3 *ngIf=\"phase!='' && phase!='blueWin' && phase!='redWin'\" class='text'><span class=\"capitalize\">{{turn}}</span> team's turn</h3>\r\n      <div *ngIf=\"phase == 'hinting' && client == 'hinting'\">\r\n        <h3 class='text'>Hinting Phase</h3>\r\n        <form (submit)=\"submitHint()\">\r\n          <div class='form-group'>\r\n            <label class=\"hint-label\">Hint: </label>\r\n            <input id=\"hintInput\" type=\"text\" name=\"hint\" autofocus=\"autofocus\" [(ngModel)]=\"hint\" class='form-control' placeholder=\"Hint\">\r\n          </div>\r\n          <div class='form-group'>\r\n          <label class=\"hint-label\"># of cards: </label>\r\n          <input type=\"text\" name=\"count\" [(ngModel)]=\"count\" class='form-control' placeholder=\"1\">\r\n          </div>\r\n          <input type=\"submit\" value=\"Submit Hint\" class='btn btn-default dn-button-hint'>\r\n        </form>\r\n      </div>\r\n      <div *ngIf=\"phase =='guessing' && client =='hinting'\">\r\n        <h2>Waiting on your team to guess on your hint...</h2>\r\n        <table class='table hint-table'>\r\n        <tr class='hint-labels'>\r\n            <td>Hint</td>\r\n            <td>#</td>\r\n          </tr>\r\n          <tr class='hint-hints'>\r\n            <td>{{LastHint}}</td>\r\n            <td>{{HintCount}}</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <div *ngIf=\"phase == 'guessing' && client=='guessing'\">\r\n        <h2>Your codemaster has given you this hint...</h2>\r\n        <table class='table hint-table'>\r\n          <tr class='hint-labels'>\r\n            <td>Hint</td>\r\n            <td>#</td>\r\n          </tr>\r\n          <tr class='hint-hints'>\r\n            <td>{{LastHint}}</td>\r\n            <td>{{HintCount}}</td>\r\n          </tr>\r\n        </table>\r\n        <button (click)=\"endTurn()\" class='btn btn-default dn-button-hint'>End Turn</button>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class='col-md-8'>\r\n      \r\n        <div *ngIf=\"client == 'hinting'\">\r\n            <div class=\"row card-container\" [ngClass]=\"{'card-container-red': turn=='red', 'card-container-blue': turn=='blue'}\">\r\n              <div *ngFor=\"let card of cards; let i = index\">\r\n                <!-- <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div> -->\r\n                <div class=\"col-xs-2 card capitalize\" *ngIf=\"i % 5 == 0\" [ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n                <div class=\"col-xs-2 card capitalize\" *ngIf=\"i % 5 != 0\"[ngClass]=\"{'redCard': card.color == 'red' && !card.isExposed, 'blueCard': card.color == 'blue' && !card.isExposed, 'whiteCard': card.color == 'white' && !card.isExposed, 'blackCard': card.color == 'black' && !card.isExposed, 'testClass': card.isExposed, 'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"client == 'guessing'\">\r\n            <div class=\"row card-container\" [ngClass]=\"{'card-container-red': turn=='red', 'card-container-blue': turn=='blue'}\">\r\n                <div *ngFor=\"let card of cards; let i = index\">\r\n                  <!-- <div class=\"clearfix\" *ngIf=\"i % 5 == 0\"></div> -->\r\n                  <div class=\"col-xs-offset-1 col-xs-2 card capitalize\" *ngIf=\"i % 5 == 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n                  <div class=\"col-xs-2 card capitalize\" *ngIf=\"i % 5 != 0\" (click)=\"clickCard(i)\" [ngClass]=\"{'exposedRed': card.isExposed && card.color == 'red', 'exposedBlue': card.isExposed && card.color == 'blue', 'exposedWhite': card.isExposed && card.color == 'white', 'exposedBlack': card.isExposed && card.color == 'black'}\">{{card.text}}</div>\r\n                  \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    </div>\r\n    <!-- Homepage-->\r\n    <div class='col-md-12'>\r\n      <div *ngIf=\"client == 'waiting'\">\r\n        <div class='col-md-4 col-md-offset-4'>\r\n          <form (submit)=\"newGame()\" class='new-game-form'#gameForm='ngForm'>\r\n            <!-- <label class='name-input'>Enter Your Name:</label> -->\r\n            <div class='form-group'>\r\n              <input id=\"gameName\" autofocus=\"autofocus\" type=\"text\" name=\"gameName\" [(ngModel)]=\"gameName\" class='form-control name-input' required placeholder=\"Game Name\">\r\n            </div>\r\n            <button type=\"submit\" class='btn btn-default dn-button-start center-block' [disabled]=\"!gameForm.form.valid\">Start a New Game</button>\r\n          </form>\r\n        </div>\r\n        <table class='table game-table table-curved'>\r\n          <tr>\r\n            <td align=\"center\" colspan=\"2\" class=\"table-header\">Codenames</td>\r\n          </tr>\r\n          <tr *ngFor=\"let game of games\">\r\n            <td class='game-row'  width=\"50%\">{{game.name}}'s Game</td>\r\n            <td width=\"50%\"><button (click) = \"joinGame(game.gameId)\" class=\"btn btn-default dn-button\">Join</button></td>\r\n          </tr>\r\n        </table>\r\n\r\n\r\n        <!-- <ul>\r\n          <li *ngFor=\"let game of games\">\r\n            <button (click) = \"joinGame(game.gameId)\" class=\"btn btn-default dn-button\">{{game.gameId}} Join Game</button>\r\n          </li>\r\n        </ul> -->\r\n      </div>\r\n\r\n    </div>\r\n  <!-- </div> -->\r\n</div>\r\n<div class=\"navbar navbar-fixed-bottom dn-footer\">\r\n  <span class='rules-text footer-text'> 2017 Mike Bergstrom and Michael Hartley</span>\r\n    \r\n</div>\r\n\r\n\r\n"

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
        this.count = 1;
        this.gameName = "";
        this.timer = 600;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this._apiService.getDeck()
        // .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
        // .catch(err => {console.log(err)});
        console.log(this.timer);
        this._apiService.gameList()
            .then(function (games) { _this.games = games; console.log('got game list', games); })
            .catch(function (err) { console.log(err); });
        document.getElementById("hintInput").focus();
        document.getElementById("gameName").focus();
    };
    AppComponent.prototype.clickCard = function (cardIdx) {
        var _this = this;
        console.log(this.cards[cardIdx]); //update the local copy
        if (!this.cards[cardIdx].isExposed && this.phase == "guessing") {
            this.redTeamScore++;
            this.cards[cardIdx].isExposed = true;
            console.log("this is the card i am trying to update from the component", this.cards[cardIdx]);
            this._apiService.updateDeck(this.cards[cardIdx].cardId)
                .then(function (response) { console.log('response: ', response); _this.updateGame(); _this.timer = 600; _this.intervalCall(); })
                .catch(function (err) { console.log(err); });
        }
    };
    AppComponent.prototype.newGame = function () {
        var _this = this;
        console.log("clicked the new game button", this.gameName);
        this._apiService.makeNewGame(this.gameName)
            .then(function (response) {
            console.log(response);
            _this.updateGame();
            _this.client = "hinting";
            _this.timer = 600;
            _this.intervalCall();
            // this._apiService.getDeck()
            // .then(cards => {this.cards = cards; this.client="codeMaster"; console.log('got deck', this.cards)})
            // .catch(err => {console.log(err)});
        })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.updateGame = function () {
        var _this = this;
        console.log(this.timer, "timer counter");
        this._apiService.getGame()
            .then(function (game) { _this.turn = game.turn; _this.redTeamScore = game.redScore; _this.blueTeamScore = game.blueScore; _this.phase = game.phase; _this.LastHint = game.lastHint; _this.HintCount = game.hintCount; _this.GameId = game.gameId; console.log('got game', game); _this.timer--; console.log(_this.timer); })
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
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].interval(1500).takeWhile(function (x) { return (_this.phase != _this.client || _this.phase == "waiting") && _this.timer > 0; }).subscribe(function (x) {
                _this.updateGame();
            });
        }
    };
    AppComponent.prototype.joinGame = function (GameId) {
        var _this = this;
        this._apiService.joinGame(GameId)
            .then(function () { _this.client = "guessing"; _this.updateGame(); _this.timer = 600; _this.intervalCall(); })
            .catch(function (err) { console.log(err); });
    };
    AppComponent.prototype.submitHint = function () {
        this._apiService.submitHint(this.hint, this.count);
        // setTimeout(this.updateGame(), 2000);
        this.phase = "guessing";
        // this.turn = this.turn == "red" ? "blue" : "red";
        this.hint = "";
        this.count = 0;
        this.timer = 600;
        setTimeout(this.intervalCall(), 4000);
    };
    AppComponent.prototype.endTurn = function () {
        console.log("end turn in app component.ts");
        this._apiService.endTurn();
        this.turn = this.turn == "red" ? "blue" : "red";
        this.phase = "hinting";
        // this.updateGame();
        this.timer = 600;
        setTimeout(this.intervalCall(), 4000);
    };
    AppComponent.prototype.resetGame = function () {
        console.log("reset game app component");
        this._apiService.resetGame();
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