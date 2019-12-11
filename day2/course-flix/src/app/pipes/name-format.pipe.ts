import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameFormat'
})
export class NameFormatPipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    value = ( args[0] && args[0] === 'upper' ) ? value.toUpperCase() : value.toLowerCase(); 
    return value;
  }

}
