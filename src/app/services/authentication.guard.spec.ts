import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { IsAuthenticatedGuard } from './authentication.guard';
import { UserService } from './user.service';

describe('AuthenticationGuard', () => {
  let guard: IsAuthenticatedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: {}
        }, {
          provide: Router,
          useValue: {
            navigate: jasmine.createSpy()
          }
        }
      ]
    });
    guard = TestBed.inject(IsAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy(); 
  });

  it('should return true if user existed', () => {
    TestBed.inject(UserService).User = { name: 'Joan' }
    expect(guard.canActivate()).toBeTrue();
  })

  it('should navigate if user not existed', () => {
    const spy = TestBed.inject(Router).navigate;
    guard.canActivate();

    expect(spy).toHaveBeenCalled()
  })
});
