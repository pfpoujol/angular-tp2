import { AbstractControl } from '@angular/forms';

export function CreditCardValidator (control: AbstractControl) {
  if (! (control.value.startsWith('37') 
  || control.value.startsWith('4') 
  || control.value.startsWith('5'))
) {
    return {creditCard : 'Your credit card number is not from a supported credit card provider'};
  }
  return null;
}


