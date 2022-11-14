import { Pipe, PipeTransform } from '@angular/core';
import { IDatum } from '../models';
import { dataMock } from '../data/dataMock';

@Pipe({
  name: 'dataFilter',
})
export class DataFilterPipe implements PipeTransform {
  transform(data: IDatum[], filterString: string): IDatum[] {
    return dataMock.data.filter(item => {
      return item.type === filterString;
    });
  }
}
