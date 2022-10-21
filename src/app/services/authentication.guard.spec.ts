import { TestBed } from '@angular/core/testing';

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
        }
      ]
    });
    guard = TestBed.inject(IsAuthenticatedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
