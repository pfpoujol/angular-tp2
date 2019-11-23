import { AbstractControl } from '@angular/forms';

export function CreditCardValidator (control: AbstractControl) {
  if (! (control.value.startsWith('37') //N°de carte commence par 37
  || control.value.startsWith('4') 
  || control.value.startsWith('5'))
) {
    return {creditCard : 'N° de carte non accepté par le service'}; 
   } // retourne le message d'erreur si le numero de carte ne commence pas par 4, 5, ou 37
  return null;
}


