import { createAction, props } from '@ngrx/store';

export const viewTripComponentInitialized = createAction(
  '[ViewTripComponent] Component initialized'
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
  props<{ uuid: string }>()
)

