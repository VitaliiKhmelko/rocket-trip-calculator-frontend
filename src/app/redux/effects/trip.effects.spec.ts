import { TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold } from 'jasmine-marbles';
import { Observable, of, throwError } from 'rxjs';
import { Trip } from 'src/app/models/trip';
import { TripCalculatorService } from 'src/app/services/trip-calculator.service';
import { TripHttpService } from 'src/app/services/trip-http.service';
import { UserService } from 'src/app/services/user.service';
import { FinishTripDialogComponent } from 'src/app/view-trip/finish-trip-dialog/finish-trip-dialog.component';
import { createTripComponentCreateButtonClicked } from '../actions/create-trip-component.actions.ts.actions';
import { createTripFailure, createTripSuccess } from '../actions/create-trip.ts.actions';
import { finishTrip, finishTripCanceled, finishTripFailure, finishTripSuccess } from '../actions/finish-trip.actions';
import { loadTripsFailure, loadTripsSuccess } from '../actions/load-trip.actions';
import { viewTripComponentFinishTripClicked, viewTripComponentInitialized } from '../actions/view-trip-component.actions';
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
          provide: TripHttpService,
          useValue: jasmine.createSpyObj<TripHttpService>('TripHttpService', ['patch$', 'put$', 'get$'])
        },
        {
          provide: TripCalculatorService,
          useValue: jasmine.createSpyObj<TripCalculatorService>('TripCalculatorService', ['calculateBelongings'])
        },
        {
          provide: MatDialog,
          useValue: jasmine.createSpyObj<MatDialog>('MatDialog', ['open'])
        },
        {
          provide: UserService,
          useValue: {}
        },
        {
          provide: Router,
          useValue: jasmine.createSpyObj<Router>('Router', ['navigate'])
        }
      ]
    });

    effects = TestBed.inject(TripEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('loadTrip$', () => {
    it('should return loadTripsSuccess if success', () => {
      (TestBed.inject(TripHttpService).get$ as jasmine.Spy).and.returnValue(of({
        name: 'NY trip',
        id: 'trip'
      } as Trip));

      actions$ = cold('a', {
        a: viewTripComponentInitialized({ tripId: 'trip' })
      });

      expect(effects.loadTrip$).toBeObservable(cold('a', {
        a: loadTripsSuccess({
          data: {
            name: 'NY trip',
            id: 'trip'
          } as Trip
        })
      }))
    });

    it('should return createTripFailure if failure', () => {
      (TestBed.inject(TripHttpService).get$ as jasmine.Spy).and.returnValue(throwError(() => Error('403')));

      actions$ = cold('a', {
        a: viewTripComponentInitialized({ tripId: 'trip' })
      });

      expect(effects.loadTrip$).toBeObservable(cold('a', {
        a: loadTripsFailure({ error: Error('403') })
      }))
    })
  });

  describe('showTripExpensesDialog$', () => {
    it('should open a dialog', () => {
      (TestBed.inject(TripCalculatorService).calculateBelongings as jasmine.Spy).and.returnValue({
      });
      const spy = (TestBed.inject(MatDialog).open as jasmine.Spy).and.returnValue({
        afterClosed: () => of('finish')
      });

      actions$ = cold('a', {
        a: viewTripComponentFinishTripClicked({ trip: { id: 'trip', participators: {} } as Trip })
      });

      expect(effects.showTripExpensesDialog$).toBeObservable(cold('a', {
        a: finishTrip({ id: 'trip' })
      }));
      expect(spy).toHaveBeenCalledWith(FinishTripDialogComponent, { data: {}, width: '700px' })
    });

    it('should return finishTripCanceled if no dialog result', () => {
      (TestBed.inject(TripCalculatorService).calculateBelongings as jasmine.Spy).and.returnValue({
      });
      (TestBed.inject(MatDialog).open as jasmine.Spy).and.returnValue({
        afterClosed: () => of('')
      });

      actions$ = cold('a', {
        a: viewTripComponentFinishTripClicked({ trip: { id: 'trip', participators: {} } as Trip })
      });

      expect(effects.showTripExpensesDialog$).toBeObservable(cold('a', {
        a: finishTripCanceled()
      }));
    });
  });

  describe('createTrip$', () => {
    it('should return createTripSuccess if success', () => {
      (TestBed.inject(TripHttpService).put$ as jasmine.Spy).and.returnValue(of('trip'));

      actions$ = cold('a', {
        a: createTripComponentCreateButtonClicked({ trip: {} as Trip })
      });

      expect(effects.createTrip$).toBeObservable(cold('a', {
        a: createTripSuccess({ payload: 'trip' })
      }))
    });

    it('should return createTripFailure if failure', () => {
      (TestBed.inject(TripHttpService).put$ as jasmine.Spy).and.returnValue(throwError(() => Error('403')));

      actions$ = cold('a', {
        a: createTripComponentCreateButtonClicked({ trip: {} as Trip })
      });

      expect(effects.createTrip$).toBeObservable(cold('a', {
        a: createTripFailure({ error: Error('403') })
      }))
    })
  })

  describe('createTripSuccess$', () => {
    it('should set tripId for userService.User', () => {
      const userService = TestBed.inject(UserService)
      userService.User = { name: 'Ringo' }
      actions$ = cold('a', {
        a: createTripSuccess({ payload: 'trip' })
      });

      expect(effects.createTripSuccess$).toBeObservable(cold('a', {
        a: undefined
      }));
      expect(userService.User).toEqual({
        name: 'Ringo',
        tripId: 'trip'
      })
    })
  });

  describe('finishTrip$', () => {
    it('should call http service patch', () => {
      const spy = (TestBed.inject(TripHttpService).patch$ as jasmine.Spy)
        .and.returnValue(of('trip'))

      actions$ = cold('a', {
        a: finishTrip({ id: 'trip' })
      })

      expect(effects.finishTrip$).toBeObservable(cold('a', {
        a: finishTripSuccess()
      }));
      expect(spy).toHaveBeenCalled();
    });

    it('should return finishTripFailure if failed', () => {
      (TestBed.inject(TripHttpService).patch$ as jasmine.Spy)
        .and.returnValue(throwError(() => Error('500')))

      actions$ = cold('a', {
        a: finishTrip({ id: 'trip' })
      })

      expect(effects.finishTrip$).toBeObservable(cold('a', {
        a: finishTripFailure({ error: Error('500') })
      }));
    })
  });

  describe('finishTripSuccess$', () => {
    it('should navigate to create-trip route', () => {
      const spy = (TestBed.inject(Router).navigate as jasmine.Spy);

      actions$ = cold('a', {
        a: finishTripSuccess()
      });

      expect(effects.finishTripSuccess$).toBeObservable(cold('a', {
        a: finishTripSuccess()
      }));

      expect(spy).toHaveBeenCalledWith(['create-trip'])
    })
  })
});
