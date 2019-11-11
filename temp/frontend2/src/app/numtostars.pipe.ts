import { Pipe, PipeTransform } from '@angular/core';
import { ResolvedStaticSymbol } from '@angular/compiler';

@Pipe({
  name: 'numtostars'
})
export class NumtostarsPipe implements PipeTransform {

  transform(num): any {
    let retval = "";
    for (let i=1;i<num;i++) {
      retval += "*"
    }
    return retval;
  }
}
