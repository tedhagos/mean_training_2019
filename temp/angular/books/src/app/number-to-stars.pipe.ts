import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToStars'
})
export class NumberToStarsPipe implements PipeTransform {

  transform(number): any {
    let retval = "";
    for (let i=1;i<=number;i++) {
      retval += "*";
    }
    return retval
  }

}
