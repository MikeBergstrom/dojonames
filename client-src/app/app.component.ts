import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  deck;
  codeMaster = true;
  gamePlayer = true;

  redTeamScore = 0;
  blueTeamScore = 0;



  constructor(private _apiService: ApiService) {}

  ngOnInit(){
    this._apiService.getDeck()
    .then(deck => {this.deck = deck; console.log('got deck', this.deck)})
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
    console.log("this is the card i am trying to update from the component", cardIdx)
    this._apiService.updateDeck(cardIdx)
    .then(response => {console.log('response: ', response)})
    .catch(err => {console.log(err)});
  }
}
