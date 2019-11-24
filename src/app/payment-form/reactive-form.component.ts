import {AfterViewInit, Component, Inject, ElementRef, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {CreditCardValidator} from './validateCcNumber';
import {ExpirationDateValidator} from './validateExpirationDate';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import * as moment from 'moment';
import {DialogCbComponent} from '../dialog-cb/dialog-cb.component';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
  animations: [
    trigger('isValid', [
    state('error', style({
      visibility: 'visible',
      color: '#f44336'
    })),
    state('hidden', style({
      visibility: 'hidden'

    }))
  ]),
],
})
export class ReactiveFormComponent implements OnInit, AfterViewInit  {
  @ViewChild('expire', {static: false}) input: ElementRef;

  maliciousForm: FormGroup;
  todayDate: any;
  uncompleteValiAttempt: boolean;
  hint: 'Commence par 4, 5, ou 37';
  cbSent: boolean;

  // public isSubmit: boolean = false;
  // details:Detail[];

  constructor(private fb: FormBuilder, private renderer: Renderer2, public dialog: MatDialog) {
    this.uncompleteValiAttempt = false;
    this.cbSent = false;
    this.maliciousForm = this.fb.group({
      cardType: '',
      titre: '',
      nom: '',
      cardNum: '',
      cardExpire: '',
      cardVCode: '',
      agree: ''
    });
  }

  ngOnInit() { // initialisation de tout les validator
    this.maliciousForm = this.fb.group({
      cardType: ['', [
        Validators.required // Remplir le champ est obligatoire
      ]],
      titre: ['', [
        Validators.required
      ]],
      nom: ['', [
        Validators.required,
        Validators.pattern('[A-Za-z]*') // définition d'un pattern, ici seulement des lettres et nombre infini de caractere
      ]],
      cardNum: ['', [
        Validators.required,
        Validators.pattern('[0-9]{16}'), // pattern, seulement chiffre et la longueur doit etre de 16
        CreditCardValidator  // custom validator, verifie les 1er chiffre du N° de carte
      ]],
      cardExpire: ['', [
        Validators.required,
        ExpirationDateValidator
      ]],
      cardVCode: ['', [
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ]],
      agree: [false, [
        Validators.required,
        Validators.requiredTrue
      ]]
    });

/*  Formulaire pre-rempli

this.maliciousForm = this.fb.group({
      cardType: ['visa', [
        Validators.required // Remplir le champ est obligatoire
      ]],
      titre: ['mr', [
        Validators.required
      ]],
      nom: ['Poujol', [
        Validators.required,
        Validators.pattern('[A-Za-z]*') // définition d'un pattern, ici seulement des lettres et nombre infini de caractere
      ]],
      cardNum: ['4537639725488856', [
        Validators.required,
        Validators.pattern('[0-9]{16}'), // pattern, seulement chiffre et la longueur doit etre de 16
        CreditCardValidator  // custom validator, verifie les 1er chiffre du N° de carte
      ]],
      cardExpire: ['2019-12', [
        Validators.required,
        ExpirationDateValidator
      ]],
      cardVCode: ['000', [
        Validators.required,
        Validators.pattern('[0-9]{3}')
      ]],
      agree: [true, [
        Validators.required,
        Validators.requiredTrue
      ]]
    });*/

/*    this.maliciousForm.valueChanges.subscribe(value => {
      console.log('value changed', value);
    });*/
  }
  ngAfterViewInit() {
    // Definit la date minimal (ce mois-ci) selectionnable pour la date d'expiration
    this.todayDate = moment().format('YYYY-MM');
    this.renderer.selectRootElement(this.input.nativeElement).setAttribute('min', this.todayDate);
  }

  get cardNum() {
    return this.maliciousForm.get('cardNum'); // recupere le cardNum
  }

  get cardExpire() {
    return this.maliciousForm.get('cardExpire');
  }

  get cardVCode() {
    return this.maliciousForm.get('cardVCode');
  }

  get cardType() {
    return this.maliciousForm.get('cardType');
  }

  get agree() {
    return this.maliciousForm.get('agree');
  }
  send() {
    this.cbSent = true;
    console.log(this.maliciousForm.getRawValue());
  }
  /*openDialog() {
    this.dialog.open(DialogCbComponent, {
      data: {
        cardType: this.cardType.value

        /!*
        * cardType: '',
      titre: '',
      nom: '',
      cardNum: '',
      cardExpire: '',
      cardVCode: '',
      agree: ''*!/
      }
    });
  }*/

}
