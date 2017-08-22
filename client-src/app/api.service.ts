import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getDeck(){
    console.log("In API service call");
    return this._http.get('/api/get_deck')
    .map(data => data.json())
    .toPromise();
  }

  updateDeck(cardId){
    console.log("updating the deck now!");
    console.log("this is the card i am trying to update from the service", cardId)
    return this._http.get(`/api/update_deck/${cardId}`)
    .map(data => data.json())
    .toPromise();

  }
  makeNewGame()
  {
    console.log("going thru new game service")
    return this._http.get('/api/create_game_in_database')
    .map(data => data.json())
    .toPromise();
  }
  getGame()
  {
    console.log("update game in service")
    return this._http.get('/api/gameUpdate')
    .map(data => data.json())
    .toPromise();
  }
  gameList()
  {
    console.log("")
  }

}
