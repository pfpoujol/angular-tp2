import {Component, KeyValueDiffers, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreditCardValidator} from '../reactive-form/validateCcNumber'; // import du custom validator

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  maliciousForm: FormGroup;
  todayDate : Date = new Date();
  //dateRegex = '(([0-2])|((2)[0-9]))(\/)\d{2}$';     essai d'un pattern pour la date :'(


  // public isSubmit: boolean = false;
  // details:Detail[];

  constructor(private fb: FormBuilder) {
    this.maliciousForm = this.fb.group({
      cardType: '',
      titre: '',
      nom: '',
      cardNum: '',
      cardExpire: '',
      cardVCode: '',
      agree: false
    });
  }
  ngOnInit() { //initialisation de tout les validator
    this.maliciousForm = this.fb.group({
      cardType : ['',[
        Validators.required //Remplir le champ est obligatoire
    ]],
    titre : ['',[
        Validators.required
    ]],
    nom : ['',[
        Validators.required,
        Validators.pattern('[A-Za-z]*') // définition d'un pattern, ici seulement des lettres et nombre infini de caractere
    ]],
    cardNum : ['',[
        Validators.required,
        Validators.pattern('[0-9]{16}'), // pattern, seulement chiffre et la longueur doit etre de 16
        CreditCardValidator  // custom validator, verifie les 1er chiffre du N° de carte  
    ]],
    cardExpire : ['',[
      Validators.required,
    ]],
    cardVCode : ['',[
      Validators.required,
      Validators.pattern('[0-9]{3}')
    ]],
    agree : [Boolean,[
      Validators.required
    ]]
    })
    
  }

  
  get cardNum(){ 
    return this.maliciousForm.get('cardNum'); // recupere le cardNum
  }

  get cardVCode(){
    return this.maliciousForm.get('cardVCode');
  }

 
  // addDetail(){
  //   this.details.push({
  //   cardType: this.maliciousForm.value.cardType,
  //   titre: this.maliciousForm.value.titre,
  //   nom: this.maliciousForm.value.nom,
  //   cardNum: this.maliciousForm.value.cardNum,
  //   cardExpire: this.maliciousForm.value.cardExpire,
  //   cardVCode: this.maliciousForm.value.cardVCode,
  //   agree: this.maliciousForm.value.agree

  //   })
  // }
  
  // sendForm(): void {

  //   this.addDetail();
    
  //   this.isSubmit = true;
  //   console.log(this.maliciousForm.value);
  // }

}
