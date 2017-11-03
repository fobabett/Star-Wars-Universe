import { Component, OnInit } from '@angular/core';
import { SWAPIService } from '../swapi.service';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data : Array<any>;
  itemsPerPage : number = 10;

  constructor(private service: SWAPIService) {
    this.data = this.service.data;
    if(this.data === undefined) {
      this.getData();
    }
  }

  ngOnInit() {
  }

  getData() {
    this.data = [];
    this.getFilms();
    this.getPeople();
    this.getPlanets();
    this.getSpecies();
    this.getStarShips();
    this.getVehicles();
  }

  getFilms() {
    let films;
    this.service.getFilms(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages }, (v, i) => i);
            Observable.forkJoin(
              pages.map(
                i => this.service.getFilms(i)
                  .map(res => res.json())
              )
            ).subscribe(data => {
              this.data = this.data.concat(res.results.map((item) => {
                item.category = 'films';
                item.id = item.url.split(`${item.category}/`)[1];
                return item;
              }));
            });
          } else {
            this.data = this.data.concat(res.results.map((item) => {
              item.category = 'films';
              item.id = item.url.split(`${item.category}/`)[1];
              return item;
            }));
          }
        }, err => console.error(err)
      )
  }

  getPeople() {

  }

  getPlanets() {

  }

  getSpecies() {

  }

  getStarShips() {

  }
  getVehicles() {

  }

}
