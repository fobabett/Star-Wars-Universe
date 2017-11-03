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
    this.service.getFilms(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages-1 }, (v, i) => i+1);
            Observable.forkJoin(
              Observable.of(
              pages.map(
                i => this.service.getFilms(i)
                  .map(res => res.json())
              )).delay(1000)
            ).subscribe(data => {
              this.data = this.data.concat(res.results);
            });
          } else {
            this.data = this.data.concat(res.results);
            console.log(this.data)
          }
        }, err => console.error(err)
      );

  }

  getPeople() {
    this.service.getPeople(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages-1 }, (v, i) => i+1);
            Observable.forkJoin(
              Observable.of(pages.map(
                i =>
                  this.service.getPeople(i)
                  .map(res => res.json())
              )).delay(1000)
            ).subscribe(data => {
              this.data = this.data.concat(res.results);
            })
          } else {
            this.data = this.data.concat(res.results);
          }
        }, err => console.error(err)
      );
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
