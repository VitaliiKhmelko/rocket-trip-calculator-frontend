import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CreateTripContainerComponent } from './create-trip-container/create-trip-container.component';
import { CreateTripRoutingModule } from './create-trip-routing.module';


@NgModule({
  declarations: [
    CreateTripContainerComponent
  ],
  imports: [
    CommonModule,
    CreateTripRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
  ]
})
export class CreateTripModule { }
