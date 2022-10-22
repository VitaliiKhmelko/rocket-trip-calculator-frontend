import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap, tap } from 'rxjs';
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

@Injectable()
export class TripEffects {
  loadTrip$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(viewTripComponentInitialized),
      switchMap(({ tripId }) => {
        return this.tripService.get$(tripId).pipe(
          map((trip: Trip) => loadTripsSuccess({ data: trip })),
          catchError((error) => of(loadTripsFailure(error)))
        )
      })
    )
  });

  showTripExpensesDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(viewTripComponentFinishTripClicked),
      exhaustMap(({ trip }) => {
        const tripResult = this.tripCalculatorService.calculateBelongings(trip.participators)
        return this.dialog.open(FinishTripDialogComponent, { data: tripResult, width: '700px' }).afterClosed().pipe(
          map((result: string) => {
            return result ? finishTrip({ id: trip.id }) : finishTripCanceled()
          })
        )
      })
    )
  });

  createTrip$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTripComponentCreateButtonClicked),
      exhaustMap(({ trip }) => {
        return this.tripService.put$(trip).pipe(
          map((tripId: string) => createTripSuccess({ payload: tripId })),
          catchError((error) => of(createTripFailure({ error })))
        )
      })
    )
  });

  createTripSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createTripSuccess),
      map(({ payload: id }) => {
        if (this.userService.User) {
          this.userService.User = {
            name: this.userService.User.name,
            tripId: id,
          }
          this.router.navigate([''])
        }
      })
    )
  }, { dispatch: false });

  finishTrip$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(finishTrip),
      exhaustMap(({ id }) => {
        return this.tripService.patch$(id, { isFinished: true }).pipe(
          map(() => finishTripSuccess()),
          catchError((error) => of(finishTripFailure({ error })))
        )
      })
    )
  });

  finishTripSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(finishTripSuccess),
      tap(() => {
        this.userService.User = {
          name: this.userService.User?.name!,
        },
          this.router.navigate(['create-trip'])
      }),
    )
  }, { dispatch: false });

  constructor(
    private actions$: Actions,
    private tripService: TripHttpService,
    private dialog: MatDialog,
    private tripCalculatorService: TripCalculatorService,
    private userService: UserService,
    private router: Router) { }
}
