import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatNativeDateModule
} from "@angular/material";

@NgModule({
  imports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule ],
  exports: [ MatFormFieldModule, MatInputModule, MatButtonModule, MatDatepickerModule, MatNativeDateModule, MatCheckboxModule ]
})
export class MaterialModule { }
