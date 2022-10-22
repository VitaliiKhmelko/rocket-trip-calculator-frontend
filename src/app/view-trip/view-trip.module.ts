import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EffectsModule } from '@ngrx/effects';
import { ExpensesEffects } from '../redux/effects/expenses.effects';
import { AddExpensesDialogComponent } from './add-expenses-dialog/add-expenses-dialog.component';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { FinishTripDialogComponent } from './finish-trip-dialog/finish-trip-dialog.component';
import { ViewTripContainerComponent } from './view-trip-container/view-trip-container.component';
import { ViewTripRoutingModule } from './view-trip-routing.module';


@NgModule({
  declarations: [
    ViewTripContainerComponent,
    ExpensesTableComponent,
    FinishTripDialogComponent,
    AddExpensesDialogComponent
  ],
  imports: [
    CommonModule,
    ViewTripRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    EffectsModule.forFeature([ExpensesEffects]),
  ]
})
export class ViewTripModule { }
