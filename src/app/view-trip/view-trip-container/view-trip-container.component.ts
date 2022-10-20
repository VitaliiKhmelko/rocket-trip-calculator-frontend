import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExpensesType } from 'src/app/models/expenses.type';
import { Trip } from 'src/app/models/trip';
import { viewTripComponentAddExpensesClicked, viewTripComponentFinishTripClicked, viewTripComponentInitialized, viewTripComponentShowDetailsClicked } from 'src/app/redux/actions/view-trip-component.actions';

@Component({
  selector: 'app-view-trip-container',
  templateUrl: './view-trip-container.component.html',
  styleUrls: ['./view-trip-container.component.scss']
})
export class ViewTripContainerComponent implements OnInit {
  trip: Trip = {
    name: 'Trip to NY',
    uuid: 'nytrip',
    attenders:
      [{
        name: 'Adriana',
        expenses: [
          {
            cost: 2.56,
            type: ExpensesType.hotel,
            description: '3 star hotel in NYC'
          }, {
            cost: 40.53,
            type: ExpensesType.food,
            description: 'Pizza Manhattan'
          }
        ]
      },
      {
        name: 'Michael',
        expenses: [
          {
            cost: 3.89,
            type: ExpensesType.taxi,
            description: 'from 12 ave to MET'
          }, {
            cost: 140.53,
            type: ExpensesType.ticket,
            description: 'IAD to JFK'
          }
        ]
      }]
  }

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(viewTripComponentInitialized());
  }

  addExpenses(name: string): void {
    this.store.dispatch(viewTripComponentAddExpensesClicked({ name }));
  }

  showDetails(name: string): void {
    this.store.dispatch(viewTripComponentShowDetailsClicked({ name }))
  }

  finishTrip(uuid: string) {
    this.store.dispatch(viewTripComponentFinishTripClicked({ uuid }))
  }

}
