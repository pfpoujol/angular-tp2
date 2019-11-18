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
  }

}
