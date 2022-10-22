import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { AddExpensesDialogComponent } from 'src/app/view-trip/add-expenses-dialog/add-expenses-dialog.component';
import { saveExpensesCanceled, saveSaveExpenses } from '../actions/save-expenses.actions';
import { viewTripComponentAddExpensesClicked } from '../actions/view-trip-component.actions';



@Injectable()
export class ExpensesEffects {

  openAddExpensesDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(viewTripComponentAddExpensesClicked),
      exhaustMap(({ payload: user }) => {
        return this.dialog.open(AddExpensesDialogComponent, { data: user }).afterClosed().pipe(
          map((result) => {
            return result ? saveSaveExpenses() : saveExpensesCanceled()
          })
        )
      })
    )
  }) 


  constructor(private actions$: Actions, private dialog: MatDialog) { }
}
