import { Pipe, PipeTransform } from '@angular/core';
import { Expenses } from '../models/expenses';

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

  transform(value: Expenses[]): number {
    return value.reduce((aggregated: number, element: Expenses) => {
      return aggregated + element?.cost || 0
    }, 0);
  }

}
