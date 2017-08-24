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
  }

  clickCard(cardIdx){
    console.log(this.cards[cardIdx]);//update the local copy
    if (!this.cards[cardIdx].isExposed && this.phase == "guessing"){
        this.redTeamScore++;
        this.cards[cardIdx].isExposed = true;
        console.log("this is the card i am trying to update from the component", this.cards[cardIdx])
        this._apiService.updateDeck(this.cards[cardIdx].cardId)
        .then(response => {console.log('response: ', response); this.updateGame(); this.intervalCall();})
        .catch(err => {console.log(err)});
      }
  }

  newGame(){
    console.log("clicked the new game button")
    this._apiService.makeNewGame()
    .then(response => {console.log(response); this.updateGame();this.client="hinting"; this.intervalCall();
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
    if(this.phase == this.client){
      
    }
  }
  intervalCall(){
    {
      Observable.interval(1000).takeWhile(x => this.phase != this.client || this.phase == "waiting").subscribe(x => {
        this.updateGame();
      })
    }
  }
  joinGame(GameId){
    this._apiService.joinGame(GameId)
    .then(() => {this.client = "guessing"; this.updateGame(); this.intervalCall();})
    .catch(err => {console.log(err)})
  }
  submitHint(){
    this._apiService.submitHint(this.hint, this.count);
    // setTimeout(this.updateGame(), 2000);
    this.phase = "guessing";
    // this.turn = this.turn == "red" ? "blue" : "red";
    this.hint="";
    this.count=0;
    setTimeout(this.intervalCall(), 4000);
  }
  endTurn(){
    console.log("end turn in app component.ts");
    this._apiService.endTurn();
    this.turn = this.turn == "red" ? "blue" : "red";
    this.phase ="hinting";
    // this.updateGame();
    setTimeout(this.intervalCall(), 4000);
  }
}
