import { createAction, props } from '@ngrx/store';

export const loginButtonClicked = createAction(
  '[SignInComponent] login button clicked',
  props<{ name: string }>()
);

export const loginSuccess = createAction(
  '[Login] Load Logins Success',
  props<{ name: string, tripUuid: string | undefined }>()
);

export const loginFailure = createAction(
  '[Login] Load Logins Failure',
  props<{ error: any }>()
);
