import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { TripHttpService } from 'src/app/services/trip-http.service';
import { UserService } from 'src/app/services/user.service';
import { AddExpensesDialogComponent } from 'src/app/view-trip/add-expenses-dialog/add-expenses-dialog.component';
import { saveExpenses, saveExpensesCanceled, saveExpensesFailure, saveExpensesSuccess } from '../actions/save-expenses.actions';
import { viewTripComponentAddExpensesClicked } from '../actions/view-trip-component.actions';

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
          useValue: jasmine.createSpyObj<MatDialog>('MatDialog', ['open'])
        },
        {
          provide: UserService,
          useValue: {}
        },
        {
          provide: TripHttpService,
          useValue: jasmine.createSpyObj<TripHttpService>('TripHttpService', ['patchCost$'])
        }
      ]
    });

    effects = TestBed.inject(ExpensesEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('openAddExpensesDialog$', () => {
    it('should open dialog on viewTripComponentAddExpensesClicked', () => {
      const spy = (TestBed.inject(MatDialog).open as jasmine.Spy).and.returnValue({
        afterClosed: () => of(3.44)
      })

      actions$ = cold('a', {
        a: viewTripComponentAddExpensesClicked({ payload: { name: 'Paul' } })
      });

      expect(effects.openAddExpensesDialog$).toBeObservable(cold('a', {
        a: saveExpenses({
          payload: { name: 'Paul', expenses: [{ cost: 3.44 }] }
        })
      }));
      expect(spy).toHaveBeenCalledWith(AddExpensesDialogComponent, { data: { name: 'Paul' } });
    });

    it('should return cancel if no return value', () => {
      (TestBed.inject(MatDialog).open as jasmine.Spy).and.returnValue({
        afterClosed: () => of('')
      })

      actions$ = cold('a', {
        a: viewTripComponentAddExpensesClicked({ payload: { name: 'Paul' } })
      });

      expect(effects.openAddExpensesDialog$).toBeObservable(cold('a', {
        a: saveExpensesCanceled()
      }));
    });
  });

  describe('saveExpenses$', () => {
    it('should return saveExpensesSuccess if success', () => {
      (TestBed.inject(TripHttpService).patchCost$ as jasmine.Spy).and.returnValue(of('id'));

      actions$ = cold('a', {
        a: saveExpenses({ payload: { name: 'John', expenses: [{ cost: 2.32 }] } })
      });

      expect(effects.saveExpenses$).toBeObservable(cold('a', {
        a: saveExpensesSuccess({ participator: { name: 'John', expenses: [{ cost: 2.32 }] } })
      }))
    });

    it('should return saveExpensesFailure if failure', () => {
      (TestBed.inject(TripHttpService).patchCost$ as jasmine.Spy).and.returnValue(throwError(() => Error('403')));

      actions$ = cold('a', {
        a: saveExpenses({ payload: { name: 'John', expenses: [{ cost: 2.32 }] } })
      });

      expect(effects.saveExpenses$).toBeObservable(cold('a', {
        a: saveExpensesFailure({ error: Error('403') })
      }))
    })
  })
});
