import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from '../shared/shared.module';

import { MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { TripEffects } from '../redux/effects/trip.effects';
import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { FinishTripDialogComponent } from './finish-trip-dialog/finish-trip-dialog.component';
import { ViewTripContainerComponent } from './view-trip-container/view-trip-container.component';
import { ViewTripRoutingModule } from './view-trip-routing.module';


@NgModule({
  declarations: [
    ViewTripContainerComponent,
    ExpensesTableComponent,
    FinishTripDialogComponent
  ],
  imports: [
    CommonModule,
    ViewTripRoutingModule,
    SharedModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatTooltipModule,
    EffectsModule.forFeature([
      TripEffects
    ]),
  ]
})
export class ViewTripModule { }
