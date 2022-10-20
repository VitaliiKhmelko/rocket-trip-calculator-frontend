import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewTripContainerComponent } from './view-trip-container/view-trip-container.component';

const routes: Routes = [{
  path: '',
  component: ViewTripContainerComponent
}, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewTripRoutingModule { }
