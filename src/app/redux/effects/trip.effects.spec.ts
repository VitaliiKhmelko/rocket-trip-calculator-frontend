import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { TripEffects } from './trip.effects';

describe('TripEffects', () => {
  let actions$: Observable<any>;
  let effects: TripEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TripEffects,
        provideMockActions(() => actions$),
        {
          provide: HttpClient,
          useValue: {}
        },
        {
          provide: MatDialog,
          useValue: {}
        },
        {
          provide: UserService,
          useValue: {}
        }
      ]
    });

    effects = TestBed.inject(TripEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
