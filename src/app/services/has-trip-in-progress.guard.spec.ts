import { TestBed } from '@angular/core/testing';

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
        }
      ]
    });
    guard = TestBed.inject(HasTripInProgressGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
