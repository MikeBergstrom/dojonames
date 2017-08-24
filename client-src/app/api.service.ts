import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getDeck(){
    console.log("In API service call get deck");
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
  makeNewGame(gameName)
  {
    console.log("going thru new game service", gameName)
    return this._http.get(`/api/create_game_in_database/${gameName}`)
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
    console.log("gameList")
    return this._http.get('/api/gameList')
    .map(data => data.json())
    .toPromise();
  }
  joinGame(GameId)
  {
    console.log("join game service", GameId)
    return this._http.get(`/api/join/${GameId}`)
    .map(data => data.json())
    .toPromise();
  }
  submitHint(hint, count)
  {
    console.log("submit hint api service", hint, count)
    return this._http.get(`/api/hint/${hint}/${count}`)
    .map(data => data.json())
    .toPromise();
  }
  endTurn()
  {
    console.log("end turn service")
    return this._http.get('/api/endTurn')
    .map(data => data.json())
    .toPromise();
  }

}
