import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from "rxjs/Rx";
import { NgForm } from '@angular/forms';

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
  count = 1;
  HintCount;
  games;
  gameName ="";
  timer=600;

  constructor(private _apiService: ApiService) {}

  ngOnInit(){
    // this._apiService.getDeck()
    // .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
    // .catch(err => {console.log(err)});
    console.log(this.timer);
    this._apiService.gameList()
    .then(games => {this.games = games; console.log('got game list', games)})
    .catch(err => {console.log(err)});
    document.getElementById("hintInput").focus();
    document.getElementById("gameName").focus();
  }

  clickCard(cardIdx){
    console.log(this.cards[cardIdx]);//update the local copy
    if (!this.cards[cardIdx].isExposed && this.phase == "guessing"){
        this.redTeamScore++;
        this.cards[cardIdx].isExposed = true;
        console.log("this is the card i am trying to update from the component", this.cards[cardIdx])
        this._apiService.updateDeck(this.cards[cardIdx].cardId)
        .then(response => {console.log('response: ', response); this.updateGame(); this.timer=600; this.intervalCall();})
        .catch(err => {console.log(err)});
      }
  }

  newGame(){
    console.log("clicked the new game button", this.gameName)
    this._apiService.makeNewGame(this.gameName)
    .then(response => {console.log(response); this.updateGame();this.client="hinting";this.timer=600; this.intervalCall();
      // this._apiService.getDeck()
      // .then(cards => {this.cards = cards; this.client="codeMaster"; console.log('got deck', this.cards)})
      // .catch(err => {console.log(err)});
    })
    .catch(err => {console.log(err)});
  }
  updateGame(){
    console.log(this.timer, "timer counter");
    this._apiService.getGame()
    .then(game => {this.turn = game.turn; this.redTeamScore = game.redScore; this.blueTeamScore= game.blueScore; this.phase = game.phase; this.LastHint = game.lastHint; this.HintCount = game.hintCount; this.GameId = game.gameId; console.log('got game', game); this.timer--; console.log(this.timer)})
    .catch(err => {console.log(err)});
    this._apiService.getDeck()
    .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
    .catch(err => {console.log(err)});
    if(this.phase == this.client){
      
    }
  }
  intervalCall(){
    {
      Observable.interval(1500).takeWhile(x => (this.phase != this.client || this.phase == "waiting")&& this.timer>0).subscribe(x => {
        this.updateGame();
      })
    }
  }
  joinGame(GameId){
    this._apiService.joinGame(GameId)
    .then(() => {this.client = "guessing"; this.updateGame(); this.timer =600;this.intervalCall();})
    .catch(err => {console.log(err)})
  }
  submitHint(){
    this._apiService.submitHint(this.hint, this.count);
    // setTimeout(this.updateGame(), 2000);
    this.phase = "guessing";
    // this.turn = this.turn == "red" ? "blue" : "red";
    this.hint="";
    this.count=0;
    this.timer =600;
    setTimeout(this.intervalCall(), 4000);
  }
  endTurn(){
    console.log("end turn in app component.ts");
    this._apiService.endTurn();
    this.turn = this.turn == "red" ? "blue" : "red";
    this.phase ="hinting";
    // this.updateGame();
    this.timer=600;
    setTimeout(this.intervalCall(), 4000);
  }
  resetGame(){
    console.log("reset game app component")
    this._apiService.resetGame();
    
  }
}
