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
  HintCount;
  games = [45,21,12];

  constructor(private _apiService: ApiService) {}

  ngOnInit(){
    this._apiService.getDeck()
    .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
    .catch(err => {console.log(err)});
    // this._apiService.gameList()
    // .then(games => {this.games = games; console.log('got game list', games)})
    // .catch(err => {console.log(err)});
  }

  clickCard(cardIdx){
    console.log(this.cards[cardIdx]);//update the local copy
    if (this.cards[cardIdx].color == "red" && !this.cards[cardIdx].isExposed){
        this.redTeamScore++;
      }
    else if (this.cards[cardIdx].color == "blue" && !this.cards[cardIdx].isExposed){
        this.blueTeamScore++;
      }
    this.cards[cardIdx].isExposed = true;
    console.log("this is the card i am trying to update from the component", this.cards[cardIdx])
    this._apiService.updateDeck(this.cards[cardIdx].cardId)
    .then(response => {console.log('response: ', response)})
    .catch(err => {console.log(err)});
  }

  newGame(){
    console.log("clicked the new game button")
    this._apiService.makeNewGame()
    .then(response => {console.log(response)
      this._apiService.getDeck()
      .then(cards => {this.cards = cards; this.client="codeMaster"; console.log('got deck', this.cards)})
      .catch(err => {console.log(err)});
    })
    .catch(err => {console.log(err)});
  }
  updateGame(){
    this._apiService.getGame()
    .then(game => {this.turn = game.Turn; this.redTeamScore = game.RedScore; this.blueTeamScore= game.BlueScore; this.phase = game.Phase; this.LastHint = game.LastHint; this.HintCount = game.HintCount; this.GameId = game.GameId; console.log('got game')})
    .catch(err => {console.log(err)});
    this._apiService.getDeck()
    .then(cards => {this.cards = cards; console.log('got deck', this.cards)})
    .catch(err => {console.log(err)});
  }
  intervalCall(){
    while(this.phase != this.client ){
      Observable.interval(15000).subscribe(x => {
        this.updateGame();
    })
  }
  }
  joinGame(GameId){
    this._apiService.joinGame(GameId)
    .then(() => {this.intervalCall()})
    .catch(err => {console.log(err)})
  }
}
