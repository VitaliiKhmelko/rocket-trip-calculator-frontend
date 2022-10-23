import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { AuthenticationHttpService } from 'src/app/services/authentication-http.service';
import { UserService } from 'src/app/services/user.service';
import { loginButtonClicked, loginFailure, loginSuccess } from '../actions/login.actions';

import { LoginEffects } from './login.effects';

describe('LoginEffects', () => {
  let actions$: Observable<any>;
  let effects: LoginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginEffects,
        provideMockActions(() => actions$),
        {
          provide: AuthenticationHttpService,
          useValue: jasmine.createSpyObj<AuthenticationHttpService>('AuthenticationHttpService', ['login$']),
        }, {
          provide: UserService,
          useValue: {}
        }
      ]
    });

    effects = TestBed.inject(LoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('login$', () => {
    it('should return loginSuccess is success', () => {
      (TestBed.inject(AuthenticationHttpService).login$ as jasmine.Spy).and.returnValue(of({ name: 'Wally' }));

      actions$ = cold('a', {
        a: loginButtonClicked({ name: 'Wally' }),
      });

      expect(effects.login$).toBeObservable(cold('a', {
        a: loginSuccess({ payload: { name: 'Wally' } })
      }));
    });

    it('should return loginFailure is failure', () => {
      (TestBed.inject(AuthenticationHttpService).login$ as jasmine.Spy).and.returnValue(throwError(() => Error('404')));

      actions$ = cold('a', {
        a: loginButtonClicked({ name: 'Wally' }),
      });

      expect(effects.login$).toBeObservable(cold('a', {
        a: loginFailure({ error: Error('404') })
      }));
    });
  });

  describe('loginSuccess$', () => {
    it('should assign User', () => {
      actions$ = cold('a', {
        a: loginSuccess({ payload: { name: 'Wally' } }),
      });

      expect(effects.loginSuccess$).toBeObservable(cold('a', {
        a: undefined
      }));

      const user: User | undefined = TestBed.inject(UserService).User;

      expect(user?.name).toEqual('Wally')
    })
  })
});
