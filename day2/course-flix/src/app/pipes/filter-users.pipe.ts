import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterUsers'
})
export class FilterUsersPipe implements PipeTransform {

  transform(names: string[], ...args: string[]): string[] {
    if ( args[0]){
      console.log('came inside the correct block ..')
      return names.filter(name => name === args[0]);
    }
    return names;
  }

}
