import { createAction, props } from '@ngrx/store';

export const finishTrip = createAction(
  '[showTripExpensesDialog$ effect] Finish trip button clicked'
);

export const finishTripCanceled = createAction(
  '[showTripExpensesDialog$ effect] Finish trip cancel clicked'
);

export const finishTripSuccess = createAction(
  '[finishTrip$ effect] finish trip success',
  props<{ data: any }>()
);

export const finishTripFailure = createAction(
  '[finishTrip$ effect] finish trip failure',
  props<{ error: any }>()
);
