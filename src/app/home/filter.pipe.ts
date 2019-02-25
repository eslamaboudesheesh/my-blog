import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
// this pipe take two pramter first pramter the title write in input field second paramter the fetch data
  transform(value: any, filterName: any , nameSearch: string ): any {
    if (value.length === 0 || filterName === '') {
      return value;
    }
    const resultArry = [];
    for ( const item of value) {
      if (item[nameSearch] === filterName) {
        resultArry.push(item);

      }
    }
    return resultArry;

  }

}
