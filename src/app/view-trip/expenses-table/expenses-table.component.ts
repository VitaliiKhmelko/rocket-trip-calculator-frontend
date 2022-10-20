import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-expenses-table',
  templateUrl: './expenses-table.component.html',
  styleUrls: ['./expenses-table.component.scss']
})
export class ExpensesTableComponent implements OnInit {
  readonly displayedColumns = ['name', 'expenses', 'bar', 'actions']

  data$ = of([{
    name: 'Adriana',
    expenses: [
      {
        cost: 2.56,
        type: 'hotel',
        description: '3 star hotel in NYC'
      }
    ] 
  }])

  constructor() { }

  ngOnInit(): void {

  }

}
