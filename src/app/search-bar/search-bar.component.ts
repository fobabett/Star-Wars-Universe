import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  searchInput : string = '';
  @Output() search = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  keypressed(event) {
    if(event.keyCode === 13) {
      this.search.emit(this.searchInput);
    }
  }

}
