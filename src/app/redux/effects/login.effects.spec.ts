import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { AuthenticationHttpService } from 'src/app/services/authentication-http.service';
import { UserService } from 'src/app/services/user.service';

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
          useValue: jasmine.createSpyObj('AuthenticationHttpService', ['login']),
        }, {
          provide: UserService,
          useValue: jasmine.createSpyObj('UserService', [''], ['User'])
        }
      ]
    });

    effects = TestBed.inject(LoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
