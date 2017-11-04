import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, filter?: any): any {
    if(filter === 'all') {
      return items;
    } else {
      return items.filter((item) => item.category === filter);
    } 
  }

}
