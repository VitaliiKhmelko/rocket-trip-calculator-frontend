import { createAction, props } from '@ngrx/store';
import { Participator } from 'src/app/models/participator';

export const saveExpenses = createAction(
  '[openAddExpensesDialog$] Open add expenses dialog effect',
  props<{ payload: Participator }>(),
);

export const saveExpensesCanceled = createAction(
  '[openAddExpensesDialog$] Save expenses canceled'
);

export const saveExpensesSuccess = createAction(
  '[SaveExpenses] Save SaveExpenses Success',
  props<{ participator: Participator }>()
);

export const saveExpensesFailure = createAction(
  '[SaveExpenses] Save SaveExpenses Failure',
  props<{ error: any }>()
);
