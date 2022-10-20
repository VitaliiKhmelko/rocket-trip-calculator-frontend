import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewTripRoutingModule } from './view-trip-routing.module';
import { ViewTripContainerComponent } from './view-trip-container/view-trip-container.component';


@NgModule({
  declarations: [
    ViewTripContainerComponent
  ],
  imports: [
    CommonModule,
    ViewTripRoutingModule
  ]
})
export class ViewTripModule { }
