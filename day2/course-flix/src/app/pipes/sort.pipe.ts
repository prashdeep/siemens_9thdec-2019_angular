import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(values: string[], ...args: any[]): string[] {
    if (args[0] && args[0]==='desc'){
      return values.sort().reverse();
    }
    return values.sort();
  }

}
