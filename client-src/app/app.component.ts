import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from "rxjs/Rx";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  GameId;
  cards;
  client = "waiting";
  turn = "";
  phase = "";
  redTeamScore = 0;
  blueTeamScore = 0;
  LastHint = "";
  hint="";
  count = 0;
  HintCount;
  games;

  constructor(private _apiService: ApiService) {}

  ngOnInit(){
    // this._apiService.getDeck()
    // .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
    // .catch(err => {console.log(err)});
    this._apiService.gameList()
    .then(games => {this.games = games; console.log('got game list', games)})
    .catch(err => {console.log(err)});
    this.intervalCall();
  }

  clickCard(cardIdx){
    console.log(this.cards[cardIdx]);//update the local copy
    if (!this.cards[cardIdx].isExposed && this.phase == "guessing"){
        this.redTeamScore++;
        this.cards[cardIdx].isExposed = true;
        console.log("this is the card i am trying to update from the component", this.cards[cardIdx])
        this._apiService.updateDeck(this.cards[cardIdx].cardId)
        .then(response => {console.log('response: ', response); this.updateGame();})
        .catch(err => {console.log(err)});
      }
  }

  newGame(){
    console.log("clicked the new game button")
    this._apiService.makeNewGame()
    .then(response => {console.log(response); this.updateGame();this.client="hinting";
      // this._apiService.getDeck()
      // .then(cards => {this.cards = cards; this.client="codeMaster"; console.log('got deck', this.cards)})
      // .catch(err => {console.log(err)});
    })
    .catch(err => {console.log(err)});
  }
  updateGame(){
    this._apiService.getGame()
    .then(game => {this.turn = game.turn; this.redTeamScore = game.redScore; this.blueTeamScore= game.blueScore; this.phase = game.phase; this.LastHint = game.lastHint; this.HintCount = game.hintCount; this.GameId = game.gameId; console.log('got game', game)})
    .catch(err => {console.log(err)});
    this._apiService.getDeck()
    .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
    .catch(err => {console.log(err)});
  }
  intervalCall(){
      Observable.interval(1000).subscribe(x => {
        this.updateGame();
      })
  }
  joinGame(GameId){
    this._apiService.joinGame(GameId)
    .then(() => {this.client = "guessing"; this.updateGame();})
    .catch(err => {console.log(err)})
  }
  submitHint(){
    this._apiService.submitHint(this.hint, this.count);
    this.updateGame();
    this.hint="";
    this.count=0;
  }
  endTurn(){
    this._apiService.endTurn();
    this.updateGame();
  }
}
