import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'dropdown-filter',
  templateUrl: './dropdown-filter.component.html',
  styleUrls: ['./dropdown-filter.component.scss']
})
export class DropdownFilterComponent implements OnInit {

  @Input() categories : Array<any>;
  @Output() filterOptionSelected = new EventEmitter();
  dropfownFilter : string = 'all';
  
  constructor() { }

  ngOnInit() {
  }

}
