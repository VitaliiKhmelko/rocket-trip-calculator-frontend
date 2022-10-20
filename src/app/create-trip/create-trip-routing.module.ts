import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTripContainerComponent } from './create-trip-container/create-trip-container.component';

const routes: Routes = [{
  path: '',
  component: CreateTripContainerComponent
}, {
  path: '**',
  redirectTo: '',
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateTripRoutingModule { }
