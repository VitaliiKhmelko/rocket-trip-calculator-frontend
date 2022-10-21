import { Injectable } from '@angular/core';
import { Expenses } from '../models/expenses';
import { Participator } from '../models/participator';
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
   * @param participators Trip participators
   */
  calculateBelongings(participators: Participator[]): { total: number, belongings: UserBelongings[] } {
    const participatorSpends = this.getActualParticipatorSpends(participators);

    const totalSpends = round(participatorSpends.reduce((value: number, { amount }) => {
      return value += amount;
    }, 0));


    const belongings: UserBelongings[] = this.calculateStudentsBelongings(participatorSpends, totalSpends);

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
   * @param participators Trip participators
   */
  private getActualParticipatorSpends(participators: Participator[]): { name: string, amount: number }[] {
    const actualSpendsForEachParticipator: { name: string, amount: number }[] = [];

    if (participators.length > 0) {
      actualSpendsForEachParticipator.push({
        name: participators[0].name,
        amount: this.calculateStudentExpenses(participators[0].expenses),
      });

      for (let index = 1; index < participators.length; index++) {
        const participator: Participator = participators[index];

        const amount = this.calculateStudentExpenses(participator.expenses);

        // Sort array by each user's amount. participators who owe are at the end of the array.
        let participatorIndex = 0;
        while (participatorIndex < actualSpendsForEachParticipator.length && amount < actualSpendsForEachParticipator[participatorIndex].amount) {
          participatorIndex++;
        }

        actualSpendsForEachParticipator.splice(participatorIndex, 0, { name: participator.name, amount })
      }
    }

    return actualSpendsForEachParticipator;
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
