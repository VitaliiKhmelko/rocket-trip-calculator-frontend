import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensesTableComponent } from './expenses-table.component';

describe('ExpensesTableComponent', () => {
  let component: ExpensesTableComponent;
  let fixture: ComponentFixture<ExpensesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExpensesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpensesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('trackByUserId', () => {
    expect(component.trackByUserName(0, { name: 'Bryan', expenses: [] })).toEqual('Bryan')
  })

  it('should emit addExpensesAction on addExpenses', () => {
    const spy = spyOn(component.addExpensesAction, 'emit');

    component.addExpenses('Helga');

    expect(spy).toHaveBeenCalledWith('Helga')
  });

});
