import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpensesDialogComponent } from './add-expenses-dialog.component';

describe('AddExpensesDialogComponent', () => {
  let component: AddExpensesDialogComponent;
  let fixture: ComponentFixture<AddExpensesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExpensesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpensesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
