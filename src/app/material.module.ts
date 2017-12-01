import { NgModule } from '@angular/core';

import {  MatToolbarModule,
          MatIconModule,
          MatCardModule,
          MatButtonModule,
          MatFormFieldModule,
          MatInputModule,
          MatListModule,
          MatGridListModule,
          MatRadioModule,
          MatProgressSpinnerModule,
          MatMenuModule,
          MatSnackBarModule,
          MatTabsModule
       } from '@angular/material';


const modulesToImportExport = [
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule,
  MatGridListModule,
  MatRadioModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBarModule,
  MatTabsModule
];

@NgModule({
  imports: modulesToImportExport,
  exports: modulesToImportExport
})
export class MaterialModule { }
