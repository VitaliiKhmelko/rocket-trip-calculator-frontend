import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { MockComponents, MockDirectives } from 'ng-mocks';

import { AddExpensesDialogComponent } from './add-expenses-dialog.component';

describe('AddExpensesDialogComponent', () => {
  let component: AddExpensesDialogComponent;
  let fixture: ComponentFixture<AddExpensesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddExpensesDialogComponent,
        MockDirectives(MatDialogContent, MatDialogActions, MatLabel, MatError, FormGroupDirective),
        MockComponents(MatFormField)
      ],
      providers: [{
        provide: MAT_DIALOG_DATA,
        useValue: {},
      }, {
        provide: FormBuilder,
        useValue: {
          group: () => { }
        }
      }, {
        provide: MatDialogRef,
        useValue: {
          close: jasmine.createSpy()
        }
      }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddExpensesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should close dialog on submit if form is valid', () => {
    component.form = {
      valid: true,
      controls: {
        expenses: {
          value: 4
        }
      } as any
    } as FormGroup;

    const spy = TestBed.inject(MatDialogRef).close;

    component.submit();

    expect(spy).toHaveBeenCalledWith(4)
  })


  it('should not close dialog on submit if form is invalid', () => {
    component.form = {
      valid: false
    } as FormGroup;

    const spy = TestBed.inject(MatDialogRef).close;

    component.submit();

    expect(spy).not.toHaveBeenCalled()
  })
});
