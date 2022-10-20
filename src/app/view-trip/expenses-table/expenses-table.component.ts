import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attender } from 'src/app/models/attender';
import { ExpensesType } from 'src/app/models/expenses.type';

/**
 * Show details about user's expenses during the trip
 */
@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesTableComponent implements OnInit {
  readonly displayedColumns = ['name', 'expenses', 'actions']

  data$: Observable<Attender[]> = of([{
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
  }])

  constructor() { }

  ngOnInit(): void {

  }

  trackByUserId(index: number, attender: Attender): string {
    return attender.name;
  }

  /**
   * Add expenses for the user
   * 
   * @param user User in the trip to add expenses
   */
  addExpenses(user: string) {
  }

  /**
   * Show details about user's expenses during the trip
   * @param user User to show current expenses
   */
  showDetails(user: string) {
  }

}
