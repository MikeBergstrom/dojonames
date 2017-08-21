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

  updateDeck(cardIdx){
    console.log("updating the deck now!");
    console.log("this is the card i am trying to update from the service", cardIdx)
    return this._http.get(`/api/update_deck/${cardIdx}`)
    .map(data => data.json())
    .toPromise();

  }

}
