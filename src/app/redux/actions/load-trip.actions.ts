import { createAction, props } from '@ngrx/store';
import { Trip } from 'src/app/models/trip';

export const loadTripsSuccess = createAction(
  '[LoadTrip Effect] Load LoadTrips Success',
  props<{ data: Trip }>()
);

export const loadTripsFailure = createAction(
  '[LoadTrip Effect] Load LoadTrips Failure',
  props<{ error: any }>()
);
