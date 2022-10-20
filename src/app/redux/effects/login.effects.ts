import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { AuthenticationHttpService } from 'src/app/services/authentication-http.service';
import { loginButtonClicked, loginSuccess } from '../actions/login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginButtonClicked),
      exhaustMap(({ name }) => {
        return this.authenticationService.login(name);
      }),
      map((response: { name: string, trip: string | undefined }) => {
        return loginSuccess({
          data: response
        })
      })
    );
  })

  constructor(private actions$: Actions, private authenticationService: AuthenticationHttpService) { }
}
