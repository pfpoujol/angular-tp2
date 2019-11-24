import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatRadioModule,
  MatSelectModule, MatTooltipModule
} from '@angular/material';

import {ReactiveFormsModule} from '@angular/forms';
import { ReactiveFormComponent } from './payment-form/reactive-form.component';
import {NoAutocompleteDirective} from './payment-form/noAutocomplete';
import { DialogCbComponent } from './dialog-cb/dialog-cb.component';


@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    NoAutocompleteDirective,
    DialogCbComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
