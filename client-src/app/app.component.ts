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
  deck;
  client = "";
  turn = "";
  phase = "";
  redTeamScore = 0;
  blueTeamScore = 0;
  LastHint = "";
  HintCount;
  games;

  constructor(private _apiService: ApiService) {}

  ngOnInit(){
    this._apiService.getDeck()
    .then(deck => {this.deck = deck; console.log('got deck', this.deck)})
    .catch(err => {console.log(err)});
    this._apiService.gameList()
    .then(games => {this.games = games; console.log('got game list', games)})
    .catch(err => {console.log(err)});
  }

  clickCard(cardIdx){
    console.log(this.deck.cards[cardIdx]);//update the local copy
    if (this.deck.cards[cardIdx].color == "red" && !this.deck.cards[cardIdx].isExposed){
        this.redTeamScore++;
      }
    else if (this.deck.cards[cardIdx].color == "blue" && !this.deck.cards[cardIdx].isExposed){
        this.blueTeamScore++;
      }
    this.deck.cards[cardIdx].isExposed = true;
    console.log("this is the card i am trying to update from the component", this.deck.cards[cardIdx])
    this._apiService.updateDeck(this.deck.cards[cardIdx].cardId)
    .then(response => {console.log('response: ', response)})
    .catch(err => {console.log(err)});
  }

  newGame(){
    console.log("clicked the new game button")
    this._apiService.makeNewGame()
    .then(response => {console.log(response)
      this._apiService.getDeck()
      .then(deck => {this.deck = deck; this.client="codeMaster"; this.intervalCall(); console.log('got deck', this.deck)})
      .catch(err => {console.log(err)});
    })
    .catch(err => {console.log(err)});
  }
  updateGame(){
    this._apiService.getGame()
    .then(game => {this.turn = game.Turn; this.redTeamScore = game.RedScore; this.blueTeamScore= game.BlueScore; this.phase = game.Phase; this.LastHint = game.LastHint; this.HintCount = game.HintCount; this.GameId = game.GameId; console.log('got deck', this.deck)})
    .catch(err => {console.log(err)});
    this._apiService.getDeck()
    .then(deck => {this.deck = deck; console.log('got deck', this.deck)})
    .catch(err => {console.log(err)});
  }
  intervalCall(){
    while(this.phase != this.client ){
      Observable.interval(15000).subscribe(x => {
        this.updateGame();
    })
  }
  }
}
