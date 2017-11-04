import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SWAPIService } from '../swapi.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {

  item : any;
  constructor(private route: ActivatedRoute, private service: SWAPIService) { }

  ngOnInit() {
    let params = this.route.snapshot.params;
    console.log(params)
    this.item = this.service.data.find((item) => item.id === params.id && item.category === params.category);
    console.log(this.item)
  }

}
