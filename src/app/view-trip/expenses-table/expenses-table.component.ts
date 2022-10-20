import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Attendant } from 'src/app/models/attender';

/**
 * Show details about user's expenses during the trip
 */
@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExpensesTableComponent {
  readonly displayedColumns = ['name', 'expenses', 'actions'];

  /**
   * Attenders for the current trip
   */
  @Input() attenders: Attendant[] | undefined;

  /**
   * Emits a new value every time when user hits Add expenses button
   */
  @Output() addExpensesAction = new EventEmitter<string>();

  /**
   * Emits a new value every time when user hits show details button
   */
  @Output() showDetailsAction = new EventEmitter<string>();

  constructor() { }

  trackByUserId(index: number, attender: Attendant): string {
    return attender.name;
  }

  /**
   * Add expenses for the user
   * 
   * @param user User in the trip to add expenses
   */
  addExpenses(user: string) {
    this.addExpensesAction.emit(user);
  }

  /**
   * Show details about user's expenses during the trip
   * @param user User to show current expenses
   */
  showDetails(user: string) {
    this.showDetailsAction.emit();
  }

}
