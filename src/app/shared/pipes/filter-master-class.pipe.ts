import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterMasterClass'
})
export class FilterMasterClassPipe implements PipeTransform {

  transform(items: any[], searchText: string, isActive: boolean): any[] {
    if (!items) return [];
    if (!searchText) return items;
    if (!isActive) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.classDescription.toLowerCase().includes(searchText);
    });
  }

}
