import { Pipe, PipeTransform } from '@angular/core';

// this pipe is for sorting an array Numerically in Descending order based on a passed attribute 
@Pipe({
  name: 'orderByNumerical',
  pure: true
})

export class OrderByNumerical implements PipeTransform {

  transform(value: any[], attribute: string, sortOrNot: boolean, name: string): any[] {
    if (!sortOrNot) {
      return value;
    }
    if (sortOrNot) {
      if (name) {
        return value?.sort((a: any, b: any) => b[name][attribute] - (a[name][attribute]));
      }
      else if (attribute) {
        return value?.sort((a: any, b: any) => b[attribute] - (a[attribute]));
      }
      else
        return value;
    }
  }
}

// this pipe is for sorting an array alphabatically based on a passed attribute
@Pipe({
  name: 'orderByAlphabatical',
  pure: true
})

export class OrderByPipeAlphabatical implements PipeTransform {

  transform(value: any[], attribute: string, sortOrNot: boolean, name: string): any[] {
    if (!sortOrNot) {
      return value;
    }
    if (sortOrNot) {
      if (attribute && name) {
        return value.sort((a: any, b: any) => a[name][attribute].localeCompare(b[name][attribute]));
      }
      else if (attribute) {
        return value.sort((a: any, b: any) => a[attribute].localeCompare(b[attribute]));
      }
      else
        return value;
    }
  }
}