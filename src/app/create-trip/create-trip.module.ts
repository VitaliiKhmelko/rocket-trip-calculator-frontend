import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTripRoutingModule } from './create-trip-routing.module';
import { CreateTripContainerComponent } from './create-trip-container/create-trip-container.component';


@NgModule({
  declarations: [
    CreateTripContainerComponent
  ],
  imports: [
    CommonModule,
    CreateTripRoutingModule
  ]
})
export class CreateTripModule { }
