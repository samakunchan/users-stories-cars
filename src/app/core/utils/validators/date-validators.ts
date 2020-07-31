import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export class DateValidators {
  static dateValidator(AC: AbstractControl) {
    if (AC && AC.value && !moment(AC.value, 'DD/MM/YYYY', true).isValid()) {
      return { dateValidator: true };
    }
    return null;
  }
}
