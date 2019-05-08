import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'logPipe'
})
export class LogPipe implements PipeTransform {

   transform(value: any, ...args): any {
      console.log( 'log: ' , value);
      return value;
   }
}
