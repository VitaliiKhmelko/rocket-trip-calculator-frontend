import { createAction, props } from '@ngrx/store';
import { Trip } from 'src/app/models/trip';

export const viewTripComponentInitialized = createAction(
  '[ViewTripComponent] Component initialized',
  props<{ tripId: string }>(),
);

export const viewTripComponentAddExpensesClicked = createAction(
  '[ViewTripComponent] Add expenses button clicked',
  props<{ name: string }>()
)

export const viewTripComponentShowDetailsClicked = createAction(
  '[ViewTripComponent] Add expenses button clicked',
  props<{ name: string }>()
)

export const viewTripComponentFinishTripClicked = createAction(
  '[ViewTripComponent] Finish trip button clicked',
  props<{ trip: Trip }>()
)


