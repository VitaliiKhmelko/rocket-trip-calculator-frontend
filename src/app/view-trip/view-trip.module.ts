import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../shared/shared.module';

import { ExpensesTableComponent } from './expenses-table/expenses-table.component';
import { ViewTripContainerComponent } from './view-trip-container/view-trip-container.component';
import { ViewTripRoutingModule } from './view-trip-routing.module';


@NgModule({
  declarations: [
    ViewTripContainerComponent,
    ExpensesTableComponent
  ],
  imports: [
    CommonModule,
    ViewTripRoutingModule,
    SharedModule,
    MatTableModule,
  ]
})
export class ViewTripModule { }
