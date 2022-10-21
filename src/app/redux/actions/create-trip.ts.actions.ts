import { createAction, props } from '@ngrx/store';


export const createTripSuccess = createAction(
  '[createTrip$ effect] New trip created successfully',
  props<{ payload: string }>()
);

export const createTripFailure = createAction(
  '[createTrip$ effect] New trip creation failed',
  props<{ error: any }>()
);
