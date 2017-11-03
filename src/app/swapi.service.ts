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

  getFilms(page) {
    return this.http.get(`${this.apiUrl}films/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPeople(page) {
    return this.http.get(`${this.apiUrl}people/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getPlanets(page) {
    return this.http.get(`${this.apiUrl}planets/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getSpecies(page) {
    return this.http.get(`${this.apiUrl}species/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getStarShips(page) {
    return this.http.get(`${this.apiUrl}starships/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  getVehicles(page) {
    return this.http.get(`${this.apiUrl}vehicles/?page=${page}`)
      .map(res => res.json())
      .catch(this.handleError);
  }

  handleError(error: Response) {
    return Observable.throw(error);
  }
}
