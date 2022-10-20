import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Attender } from 'src/app/models/attender';
import { ExpensesType } from 'src/app/models/expenses.type';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
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

}
