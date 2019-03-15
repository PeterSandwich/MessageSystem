import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'dateSwich' })

export class DatePipe implements PipeTransform {
      transform(value): string {
        if(!value) return '';
        var date = new Date(value);
        let h = date.getHours() + ':';
        let m = date.getMinutes()+'';
        if(date.getMinutes()<10){
            m = '0'+m;
        }
        return h+m; 
      }
}
