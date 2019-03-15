import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeSwich' })

export class TimePipe implements PipeTransform {
      transform(value): string {
        var date = new Date(value);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds(); 
        return Y+M+D+h+m+s; 
      }
}
