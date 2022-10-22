import { createAction, props } from '@ngrx/store';

export const saveSaveExpenses = createAction(
  '[openAddExpensesDialog$] Open add expenses dialog effect'
);

export const saveExpensesCanceled = createAction(
  '[openAddExpensesDialog$] Open add expenses dialog effect'
);

export const saveSaveExpensesSuccess = createAction(
  '[SaveExpenses] Save SaveExpenses Success',
  props<{ data: any }>()
);

export const saveSaveExpensesFailure = createAction(
  '[SaveExpenses] Save SaveExpenses Failure',
  props<{ error: any }>()
);
