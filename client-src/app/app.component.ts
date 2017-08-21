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

  constructor(private _apiService: ApiService) {}

  ngOnInit(){
    this._apiService.getDeck()
    .then(deck => {this.deck = deck; console.log('got deck', this.deck)})
    .catch(err => {console.log(err)})
  }

  clickCard(cardNum){
    console.log(this.deck.cards[cardNum]);
    this.deck.cards[cardNum].IsExposed = true;
  }
}
