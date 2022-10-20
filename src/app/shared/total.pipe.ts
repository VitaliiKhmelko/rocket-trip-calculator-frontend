import { Pipe, PipeTransform } from '@angular/core';
import { Expenses } from '../models/expenses';
import { TripCalculatorService } from '../services/trip-calculator.service';

/**
 * Sum of all user expenses
 * 
 * @param value Array of expenses with cost for each product or service
 * 
 * @returns Sum of all expenses in the array.
 */
@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  constructor(private tripCalculator: TripCalculatorService) { }

  transform(expenses: Expenses[]): number {
    return this.tripCalculator.calculateUserExpenses(expenses)
  }

}
