import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: any, search?: any): any {
    if(search === '') {
      return items;
    } else {
      let result = items.filter((item) => {
        let match = false;
        for(const [key, value] of Object.entries(item)) {
          if((key === 'title' || key === 'name') && value.toString().toLowerCase().includes(search.toString().toLowerCase())) {
            match = true;
          }
        }
        if(match) {
          return item;
        }
      });
      if(result.length === 0) {
        return [-1];
      }
      return result;
    }
  }

}
