import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./authentication/authentication.module').then((module) => module.AuthenticationModule)
}, {
  path: 'create-trip',
  loadChildren: () => import('./create-trip/create-trip.module').then((module) => module.CreateTripModule)
}, {
  path: '',
  loadChildren: () => import('./view-trip/view-trip.module').then((module) => module.ViewTripModule)
}
, {
  path: '**',
  redirectTo: ''
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
