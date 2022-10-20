import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user';

export const loginButtonClicked = createAction(
  '[SignInComponent] login button clicked',
  props<{ name: string }>()
);

export const loginSuccess = createAction(
  '[Login] Load Logins Success',
  props<{ payload: User }>()
);

export const loginFailure = createAction(
  '[Login] Load Logins Failure',
  props<{ error: any }>()
);
