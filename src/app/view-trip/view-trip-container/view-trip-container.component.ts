import { Component, OnInit } from '@angular/core';
import { ExpensesType } from 'src/app/models/expenses.type';
import { Trip } from 'src/app/models/trip';

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

  constructor() { }

  ngOnInit(): void {
  }

  addExpenses(): void {

  }

  showDetails(): void {

  }

}
