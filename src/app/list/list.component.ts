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
  categories : Array<any>;

  constructor(private service: SWAPIService, public searchBar: SearchBarComponent) {
    this.categories = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];
    if(this.service.data === undefined) {
      this.service.data = [];
      this.categories.forEach((cat) => {
        setTimeout(() => {
          this.getData(cat);
        },1000)
      });
    }
  }

  ngOnInit() {
  }

  search(input:string) {
    this.searchInput = input;
  }

  getData(category:string) {
    this.service.getData(category, 1)
      .subscribe(
        res => {
          if(res.next !== null) {
            let count : number = res.count;
            let numOfPages = Math.ceil((count - res.results.length)/this.itemsPerPage);
            let pages = Array.from({ length: numOfPages }, (v, i) => i+1);
            setTimeout(() => {
              pages.map((i) => {
                this.service.getData(category, i).subscribe(
                  res => this.service.data = this.service.data.concat(res.results.map((item) => {
                    item.category = category;
                    return item;
                  }))),
                  err => console.error(err)
              })
            },1000)
          } else {
            this.service.data = this.service.data.concat(res.results.map((item) => {
              item.category = category;
              return item;
            }));
          }
        }, err => console.error(err)
      );
  }

}
