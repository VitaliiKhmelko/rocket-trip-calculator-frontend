import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { Trip } from 'src/app/models/trip';
import { TripHttpService } from 'src/app/services/trip-http.service';
import { FinishTripDialogComponent } from 'src/app/view-trip/finish-trip-dialog/finish-trip-dialog.component';
import { finishTrip, finishTripCanceled } from '../actions/finish-trip.actions';
import { loadTripsFailure, loadTripsSuccess } from '../actions/load-trip.actions';
import { viewTripComponentFinishTripClicked, viewTripComponentInitialized } from '../actions/view-trip-component.actions';



@Injectable()
export class TripEffects {
  loadTrip$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(viewTripComponentInitialized),
      switchMap(({ name }) => {
        return this.tripService.getByUserName(name).pipe(
          map((trip: Trip) => loadTripsSuccess({ data: trip })),
          catchError((error) => of(loadTripsFailure(error)))
        )
      })
    )
  });

  showTripExpensesDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(viewTripComponentFinishTripClicked),
      exhaustMap(() => {
        return this.dialog.open(FinishTripDialogComponent).afterClosed().pipe(
          map((result: string) => {
            return result ? finishTrip() : finishTripCanceled()
          })
        )
      })
    )
  })

  constructor(private actions$: Actions, private tripService: TripHttpService, private dialog: MatDialog) { }
}
