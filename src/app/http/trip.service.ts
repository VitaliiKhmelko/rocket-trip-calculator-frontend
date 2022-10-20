import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ExpensesType } from '../models/expenses.type';
import { Trip } from '../models/trip';

/**
 * Http service to work with Trips API
 */
@Injectable({
  providedIn: 'root'
})
export class TripService {
  private readonly trip: Trip = {
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


  constructor(private httpClient: HttpClient) { }

  /**
   * Get trip that is in progress by attender's name
   * @param name User name
   * @returns trip in progress
   */
  getByUserName(name: string): Observable<Trip | undefined> {
    return of(this.trip)
  }
}
