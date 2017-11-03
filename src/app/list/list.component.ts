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

  itemsPerPage : number = 10;

  constructor(private service: SWAPIService) {
    if(this.service.data === undefined) {
      this.getData();
    }
  }

  ngOnInit() {
  }

  getData() {
    this.service.data = [];
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
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getFilms(i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = 'films';
                    item.id = item.url.split(`${item.category}/`)[1];
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results.map((item) => {
              item.category = 'films';
              item.id = item.url.split(`${item.category}/`)[1];
              return item;
            }));
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
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getPeople(i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = 'people';
                    item.id = item.url.split(`${item.category}/`)[1];
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results);
          }
        }, err => console.error(err)
      );
  }

  getPlanets() {
    this.service.getPlanets(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getPlanets(i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = 'planets';
                    item.id = item.url.split(`${item.category}/`)[1];
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results);
          }
        }, err => console.error(err)
      );
  }

  getSpecies() {
    this.service.getSpecies(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getSpecies(i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = 'species';
                    item.id = item.url.split(`${item.category}/`)[1];
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results);
          }
        }, err => console.error(err)
      );
  }

  getStarShips() {
    this.service.getStarShips(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getStarShips(i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = 'starships';
                    item.id = item.url.split(`${item.category}/`)[1];
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results);
          }
        }, err => console.error(err)
      );
  }
  getVehicles() {
    this.service.getVehicles(1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getVehicles(i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = 'vehicles';
                    item.id = item.url.split(`${item.category}/`)[1];
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results);
          }
        }, err => console.error(err)
      );
  }

}
