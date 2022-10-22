import { createAction, props } from '@ngrx/store';
import { Trip } from 'src/app/models/trip';

export const createTripComponentCreateButtonClicked = createAction(
  '[Create trip component] create trip button clicked',
  props<{ trip: Partial<Trip> }>()
);




