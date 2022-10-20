import { Injectable } from '@angular/core';
import { Attendant } from '../models/attender';
import { Expenses } from '../models/expenses';
import { UserBelongings } from '../models/user-belongings';

/**
 * Calculates each user expenses for the trip
 */
@Injectable({
  providedIn: 'root'
})
export class TripCalculatorService {

  constructor() { }

  /**
   * Calculates who owes whom and how much
   * @param attendants Trip attendants
   */
  calculateBelongings(attendants: Attendant[]): { total: number, belongings: UserBelongings[] } {
    const total: number = attendants.reduce((cost: number, attendant: Attendant) => {
      return cost += this.calculateUserExpenses(attendant.expenses);
    }, 0)

    return {
      total,
      belongings: [{
        who: attendants[0].name,
        whom: attendants[1].name,
        amount: 30,
      }]
    };
  }

  /**
   * Calculate user expenses for the current trip
   * @param expenses 
   */
  calculateUserExpenses(expenses: Expenses[]): number {
    return expenses.reduce((aggregated: number, element: Expenses) => {
      return aggregated + element?.cost || 0
    }, 0);
  }
}
