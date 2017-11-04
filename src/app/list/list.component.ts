import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SWAPIService } from '../swapi.service';
import { SearchBarComponent } from '../search-bar';
import { SearchPipe } from '../search.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SearchBarComponent]
})
export class ListComponent implements OnInit {

  itemsPerPage : number = 10;
  searchInput : string = '';

  constructor(private service: SWAPIService, public searchBar: SearchBarComponent) {
    if(this.service.data === undefined) {
      this.getData();
    }
  }

  ngOnInit() {
  }

  search(input:string) {
    this.searchInput = input;
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
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results.map((item) => {
              item.category = 'films';
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
