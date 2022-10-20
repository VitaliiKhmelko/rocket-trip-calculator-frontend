import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponents } from 'ng-mocks';
import { ExpensesTableComponent } from '../expenses-table/expenses-table.component';
import { ViewTripContainerComponent } from './view-trip-container.component';

describe('ViewTripContainerComponent', () => {
  let component: ViewTripContainerComponent;
  let fixture: ComponentFixture<ViewTripContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTripContainerComponent, MockComponents(ExpensesTableComponent)]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
