import { AbstractControl } from '@angular/forms';
import * as moment from 'moment';

export function ExpirationDateValidator(control: AbstractControl) {
  if (moment().format('YYYY-MM') === moment(control.value).format('YYYY-MM')) {
    return null;
  } else if (moment().isAfter(control.value)) {
    return {expired : 'La date est passée'};
  }
  return null;
}


