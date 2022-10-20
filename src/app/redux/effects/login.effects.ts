import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
      map((response: { name: string, tripUuid: string | undefined }) => {
        return loginSuccess(response)
      })
    );
  });

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      map(({ tripUuid }) => {
        if (tripUuid) {
          this.router.navigate([''], { state: { tripUuid } })
        }
      })
    )
  }, { dispatch: false })

  constructor(private actions$: Actions, private authenticationService: AuthenticationHttpService, private router: Router) { }
}
