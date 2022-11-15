import { Pipe, PipeTransform } from '@angular/core';
import { IDatum } from '../models';
import { dataMockChanged } from '../data/dataMockChanged';

@Pipe({
  name: 'dataFilter',
})
export class DataFilterPipe implements PipeTransform {
  transform(data: IDatum[], filterString: string): IDatum[] {
    return dataMockChanged.data.filter(item => {
      return item.type === filterString;
    });
  }
}
