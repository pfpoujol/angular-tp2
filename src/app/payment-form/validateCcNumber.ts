import { AbstractControl } from '@angular/forms';

export function CreditCardValidator(control: AbstractControl) {
  if (! (control.value.toString().startsWith('37') //N°de carte commence par 37
  || control.value.toString().startsWith('4')
  || control.value.toString().startsWith('5'))
) {
    return {doNotExist : 'N° de carte refusé par le service'};
   } // retourne le message d'erreur si le numero de carte ne commence pas par 4, 5, ou 37
  return null;
}


