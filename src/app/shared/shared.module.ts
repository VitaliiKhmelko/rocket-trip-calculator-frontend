import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TotalPipe } from './total.pipe';



@NgModule({
  declarations: [
    TotalPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TotalPipe
  ]
})
export class SharedModule { }
