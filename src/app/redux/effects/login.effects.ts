import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationHttpService } from 'src/app/services/authentication-http.service';
import { UserService } from 'src/app/services/user.service';
import { loginButtonClicked, loginFailure, loginSuccess } from '../actions/login.actions';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() => this.actions$.pipe(
    ofType(loginButtonClicked),
    exhaustMap(({ name }) => {
      return this.authenticationService.login$(name).pipe(
        map((user: User) => loginSuccess({ payload: user })),
        catchError((error) => of(loginFailure({ error })))
      )
    }),
  ));

  loginSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      map(({ payload: user }) => {
        this.userService.User = user;
        this.router.navigate([''])
      })
    )
  }, { dispatch: false })

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationHttpService,
    private router: Router,
    private userService: UserService
  ) { }
}
