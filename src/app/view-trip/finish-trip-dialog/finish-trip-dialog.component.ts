import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserBelongings } from 'src/app/models/user-belongings';

@Component({
  selector: 'app-finish-trip-dialog',
  templateUrl: './finish-trip-dialog.component.html',
  styleUrls: ['./finish-trip-dialog.component.scss']
})
export class FinishTripDialogComponent implements OnInit {
  readonly displayedColumns = ['who', 'owes', 'whom', 'amount']

  constructor(@Inject(MAT_DIALOG_DATA) public data: { total: number, belongings: UserBelongings[] }) {

  }

  ngOnInit(): void {
  }

}
