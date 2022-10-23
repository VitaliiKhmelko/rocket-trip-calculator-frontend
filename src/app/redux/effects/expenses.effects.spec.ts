import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { ExpensesEffects } from './expenses.effects';

describe('ExpensesEffects', () => {
  let actions$: Observable<any>;
  let effects: ExpensesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ExpensesEffects,
        provideMockActions(() => actions$),
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

    effects = TestBed.inject(ExpensesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
