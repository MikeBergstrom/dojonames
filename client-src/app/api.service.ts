import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ApiService {

  constructor(private _http: Http) { }

  getDeck(){
    console.log("In API service call")
    return this._http.get('/api/get_deck')
    .map(data => data.json())
    .toPromise();
  }

}
