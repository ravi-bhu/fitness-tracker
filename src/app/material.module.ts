import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCardModule,
  MatCheckboxModule,
  MatDatepickerModule, MatDialogModule,
  MatFormFieldModule, MatIconModule,
  MatInputModule, MatListModule,
  MatNativeDateModule, MatProgressSpinnerModule, MatSelectModule,
  MatSidenavModule, MatTabsModule, MatToolbarModule
} from "@angular/material";

@NgModule({
  imports: [ MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  exports: [ MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
