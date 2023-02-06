import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'searchFilter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, isActive: boolean, attribute: string, name: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    if (!isActive) return items;
    searchText = searchText.toLowerCase();
    if (name) {
      return items.filter(it => {
        return it[name][attribute].toLowerCase().includes(searchText);
      });
    }
    else {
      return items.filter(it => {
        return it[attribute].toLowerCase().includes(searchText);
      });
    }
  }
}
