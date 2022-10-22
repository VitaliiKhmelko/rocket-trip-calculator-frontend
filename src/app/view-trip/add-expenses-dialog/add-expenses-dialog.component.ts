import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-add-expenses-dialog',
  templateUrl: './add-expenses-dialog.component.html',
  styleUrls: ['./add-expenses-dialog.component.scss']
})
export class AddExpensesDialogComponent implements OnInit {
  form = this.formBuilder.group({
    expenses: new FormControl('', [Validators.required, Validators.pattern(/^\d{1,5}(\.\d{1,2})?$/), Validators.min(0.01)])
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: User,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddExpensesDialogComponent>) {
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.form.valid) {
      this.dialogRef.close(parseFloat(this.form.controls.expenses.value!))
    }
  }

}
