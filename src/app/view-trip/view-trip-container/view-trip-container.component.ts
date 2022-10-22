import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, Observable, tap } from 'rxjs';
import { Participator } from 'src/app/models/participator';
import { Trip } from 'src/app/models/trip';
import { viewTripComponentAddExpensesClicked, viewTripComponentFinishTripClicked, viewTripComponentInitialized } from 'src/app/redux/actions/view-trip-component.actions';
import { selectTrip } from 'src/app/redux/selectors/trip.selectors';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-view-trip-container',
  templateUrl: './view-trip-container.component.html',
  styleUrls: ['./view-trip-container.component.scss']
})
export class ViewTripContainerComponent implements OnInit {
  trip$: Observable<Trip | undefined> | undefined = undefined;
  participators: Participator[] | undefined;

  constructor(private store: Store, private userService: UserService) { }

  ngOnInit(): void {
    const tripId = this.userService.User?.tripId;

    if (tripId) {
      this.trip$ = this.store.select(selectTrip).pipe(
        filter((trip: Trip | undefined) => !!trip),
        tap((trip: Trip | undefined) => {
          this.participators = Object.values(trip!.participators);
        })
      );
      this.store.dispatch(viewTripComponentInitialized({ tripId }));
    }
  }

  addExpenses(name: string, tripId: string): void {
    this.store.dispatch(viewTripComponentAddExpensesClicked({ payload: { name, tripId } }));
  }

  finishTrip(trip: Trip) {
    this.store.dispatch(viewTripComponentFinishTripClicked({ trip }));
  }

}
