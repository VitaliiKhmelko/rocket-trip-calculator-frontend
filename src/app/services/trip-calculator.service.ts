import { Injectable } from '@angular/core';
import { Attendant } from '../models/attender';
import { Expenses } from '../models/expenses';
import { UserBelongings } from '../models/user-belongings';
import { round } from '../shared/calculations.helper';

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
    const actualAttendantsSpends = this.getActualAttendantsSpends(attendants);

    const totalSpends = round(actualAttendantsSpends.reduce((value: number, { amount }) => {
      return value += amount;
    }, 0));


    const belongings: UserBelongings[] = this.calculateStudentsBelongings(actualAttendantsSpends, totalSpends);

    return {
      total: totalSpends,
      belongings,
    };

  }

  /**
   * Calculate user expenses for the current trip
   * @param expenses 
   */
  calculateStudentExpenses(expenses: Expenses[]): number {
    const userExpenses = expenses.reduce((aggregated: number, element: Expenses) => {
      return aggregated + element?.cost || 0
    }, 0);

    return round(userExpenses);
  }

  /**
   * Get amount of money that has been spent by each user during the trip
   * 
   * @param attendants Trip attendants
   */
  private getActualAttendantsSpends(attendants: Attendant[]): { name: string, amount: number }[] {
    const actualSpendsForEachAttendant: { name: string, amount: number }[] = [];

    if (attendants.length > 0) {
      actualSpendsForEachAttendant.push({
        name: attendants[0].name,
        amount: this.calculateStudentExpenses(attendants[0].expenses),
      });

      for (let index = 1; index < attendants.length; index++) {
        const attendant: Attendant = attendants[index];

        const amount = this.calculateStudentExpenses(attendant.expenses);

        // Sort array by each user's amount. Attendants who owe are at the end of the array.
        let attendantIndex = 0;
        while (attendantIndex < actualSpendsForEachAttendant.length && amount < actualSpendsForEachAttendant[attendantIndex].amount) {
          attendantIndex++;
        }

        actualSpendsForEachAttendant.splice(attendantIndex, 0, { name: attendant.name, amount })
      }
    }

    return actualSpendsForEachAttendant;
  }

  /**
   * Calculate users' belongings. Who owes whom and how much.
   * 
   * @param actualSpends sorted array of actual spends for each user during the trip
   * @param totalSpends amount of money spent by this trip in total
   * @returns 
   */
  private calculateStudentsBelongings(actualSpends: { name: string, amount: number }[], totalSpends: number): UserBelongings[] {
    const eachUserShouldSpend: number = round(totalSpends / actualSpends.length);
    const userBelongings: UserBelongings[] = [];

    while (actualSpends.length > 1) {
      const whoOwe = actualSpends[actualSpends.length - 1];
      const whomOwe = actualSpends[0];
      const whomExtraSpends = whomOwe.amount - eachUserShouldSpend;
      let oweAmount = 0;

      if (whomExtraSpends < (eachUserShouldSpend - whoOwe.amount)) {
        oweAmount = whomExtraSpends;
        actualSpends.splice(0, 1);
        actualSpends[actualSpends.length - 1].amount = whoOwe.amount + oweAmount
      } else {
        oweAmount = eachUserShouldSpend - whoOwe.amount;
        actualSpends.splice(actualSpends.length - 1, 1);
        actualSpends[0].amount = whomOwe.amount - oweAmount;
      }

      userBelongings.push({
        who: whoOwe.name,
        whom: whomOwe.name,
        amount: round(oweAmount)
      });
    }

    return userBelongings
  }

}
