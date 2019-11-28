import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeA'
})
export class RemoveAPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    try {
      return value.toLowerCase().replace('a', '');
    } catch (error) {
      return null;
    }
  }

}
