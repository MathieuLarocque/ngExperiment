import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dispatch'
})
export class DispatchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value === "third") {
      return 'fourth'
    }
    return value;
  }

}
