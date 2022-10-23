import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';

import { HasTripInProgressGuard } from './has-trip-in-progress.guard';
import { UserService } from './user.service';

describe('HasTripInProgressGuard', () => {
  let guard: HasTripInProgressGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: UserService,
          useValue: {}
        },
        {
          provide: Router,
          useValue: {
            navigate: () => { }
          }
        }
      ]
    });
    guard = TestBed.inject(HasTripInProgressGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });

  it('should return true if trip is in progress', () => {
    TestBed.inject(UserService).User = { name: 'Joan', tripId: 'trip' }
    expect(guard.canActivate()).toBeTrue();
  });

  it('should navigate to create-trip if no trip in progress', () => {
    const spy = spyOn(TestBed.inject(Router), 'navigate');

    guard.canActivate()

    expect(spy).toHaveBeenCalledWith(['create-trip'])
  })
});
