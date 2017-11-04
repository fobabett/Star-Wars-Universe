import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SWAPIService {

  data : Array<any>;
  private apiUrl : string = 'https://swapi.co/api/';

  constructor(private http: Http) { }

  getData(endpoint, page) {
    return this.http.get(`${this.apiUrl}${endpoint}/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    return Observable.throw(error);
  }
}
