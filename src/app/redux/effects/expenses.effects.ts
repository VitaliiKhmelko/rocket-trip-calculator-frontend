import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, switchMap } from 'rxjs';
import { TripHttpService } from 'src/app/services/trip-http.service';
import { UserService } from 'src/app/services/user.service';
import { AddExpensesDialogComponent } from 'src/app/view-trip/add-expenses-dialog/add-expenses-dialog.component';
import { saveExpenses, saveExpensesCanceled, saveExpensesFailure, saveExpensesSuccess } from '../actions/save-expenses.actions';
import { viewTripComponentAddExpensesClicked } from '../actions/view-trip-component.actions';



@Injectable()
export class ExpensesEffects {

  openAddExpensesDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(viewTripComponentAddExpensesClicked),
      exhaustMap(({ payload: user }) => {
        return this.dialog.open(AddExpensesDialogComponent, { data: user }).afterClosed().pipe(
          map((result) => {
            return result ? saveExpenses({
              payload: { name: user.name, expenses: [{ cost: result }] }
            }) : saveExpensesCanceled()
          })
        )
      })
    )
  });

  saveExpenses$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(saveExpenses),
      switchMap(({ payload }) => {
        return this.tripService.patchCost$(this.userService.User?.tripId!, { [payload.name]: payload }).pipe(
          map(() => saveExpensesSuccess({ participator: payload })),
          catchError((error) => of(saveExpensesFailure(error)))
        )
      })
    )
  })


  constructor(private actions$: Actions, private dialog: MatDialog, private tripService: TripHttpService, private userService: UserService) { }
}
