import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { SWAPIService } from '../swapi.service';
import { SearchBarComponent } from '../search-bar';
import { SearchPipe } from '../search.pipe';
import { ModalComponent } from '../modal';
import { DropdownFilterComponent } from '../dropdown-filter';
import { FilterPipe } from '../filter.pipe';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [SearchBarComponent, DropdownFilterComponent]
})
export class ListComponent implements OnInit {

  itemsPerPage : number = 10;
  searchInput : string = '';
  categories : Array<any>;
  loadedCategories : Array<any> = [];
  modalOpen : boolean = false;
  loading : boolean = true;
  modalItem;
  filterOption : string = 'all';

  constructor(private service: SWAPIService, public searchBar: SearchBarComponent) {
    this.categories = ['films', 'people', 'planets', 'species', 'starships', 'vehicles'];
    if(this.service.data === undefined) {
      this.service.data = [];
      this.categories.forEach((cat) => setTimeout(() => this.getData(cat), 1000));
    }
  }

  ngOnInit() {
  }

  search(input:string) {
    this.searchInput = input;
  }

  filterOptionSelected(value:string) {
    this.filterOption = value;
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
                this.service.getData(category, i)
                  .subscribe(
                    res => this.handleData(res, category),
                    err => console.error(err)
                  )
              });
            },1000);
          } else {
            this.handleData(res, category);
          }
        }, err => console.error(err)
      );
  }

  handleData(data, category) {
    this.service.data = this.service.data.concat(data.results.map((item) => {
      item.category = category;
      return item;
    }));
    this.loadedCategories.push(category);
    this.loading = Array.from(new Set(this.loadedCategories)).length === this.categories.length ? false : true;
  }

  viewDetails(item) {
    this.modalOpen = true;
    this.modalItem = item;
  }

  modalClosed() {
    this.modalOpen = false;
  }

}
