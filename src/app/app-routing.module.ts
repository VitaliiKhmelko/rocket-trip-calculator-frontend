import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticatedGuard } from './services/authentication.guard';
import { HasTripInProgressGuard } from './services/has-trip-in-progress.guard';

const routes: Routes = [{
  path: 'sign-in',
  loadChildren: () => import('./authentication/authentication.module').then((module) => module.AuthenticationModule),
}, {
  path: 'create-trip',
  loadChildren: () => import('./create-trip/create-trip.module').then((module) => module.CreateTripModule),
  canActivate: [IsAuthenticatedGuard]
}, {
  path: '',
  loadChildren: () => import('./view-trip/view-trip.module').then((module) => module.ViewTripModule),
  canActivate: [IsAuthenticatedGuard, HasTripInProgressGuard]
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
