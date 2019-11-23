import {Component, KeyValueDiffers, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  maliciousForm: FormGroup;

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
        Validators.pattern('[0-9]{16}')
        
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

}
