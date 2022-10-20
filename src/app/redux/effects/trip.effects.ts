import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { TripService } from 'src/app/http/trip.service';
import { Trip } from 'src/app/models/trip';
import { loadTripsFailure, loadTripsSuccess } from '../actions/load-trip.actions';
import { viewTripComponentInitialized } from '../actions/view-trip-component.actions';



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
  })

  constructor(private actions$: Actions, private tripService: TripService) { }
}
