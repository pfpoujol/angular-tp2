import {Component, KeyValueDiffers, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CreditCardValidator} from '../reactive-form/validateCcNumber';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  maliciousForm: FormGroup;
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
  ngOnInit() {
    this.maliciousForm = this.fb.group({
      cardType : ['',[
        Validators.required
    ]],
    titre : ['',[
        Validators.required
    ]],
    nom : ['',[
        Validators.required,
        Validators.pattern('[A-Za-z]*')
    ]],
    cardNum : ['',[
        Validators.required,
        Validators.pattern('[0-9]{16}'),
        CreditCardValidator      
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
    return this.maliciousForm.get('cardNum');
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
