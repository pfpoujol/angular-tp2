import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
import {ReactiveFormComponent} from '../payment-form/reactive-form.component';

@Component({
  selector: 'app-dialog-cb',
  templateUrl: './dialog-cb.component.html',
  styleUrls: ['./dialog-cb.component.css']
})
export class DialogCbComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: ReactiveFormComponent) { }

  ngOnInit() {
  }

}
