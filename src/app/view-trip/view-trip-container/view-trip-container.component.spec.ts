import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { viewTripComponentAddExpensesClicked, viewTripComponentInitialized, viewTripComponentShowDetailsClicked } from 'src/app/redux/actions/view-trip-component.actions';
import { UserService } from 'src/app/services/user.service';
import { ExpensesTableComponent } from '../expenses-table/expenses-table.component';
import { ViewTripContainerComponent } from './view-trip-container.component';

describe('ViewTripContainerComponent', () => {
  let component: ViewTripContainerComponent;
  let fixture: ComponentFixture<ViewTripContainerComponent>;
  let mockStore: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTripContainerComponent, MockComponents(ExpensesTableComponent)],
      providers: [
        provideMockStore(),
        {
          provide: Router,
          useValue: jasmine.createSpyObj('Router', ['navigate'])
        },
        {
          provide: UserService,
          useValue: jasmine.createSpyObj('UserService', [''], ['User'])
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockStore = TestBed.inject(MockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch viewTripComponentInitialized on component initialized', () => {
    const spy = spyOn(mockStore, 'dispatch');

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(viewTripComponentInitialized({ tripUuid: 'vitalii' }))
  });

  it('should dispatch viewTripComponentInitialized on addExpenses', () => {
    const spy = spyOn(mockStore, 'dispatch');

    component.addExpenses('name');

    expect(spy).toHaveBeenCalledWith(viewTripComponentAddExpensesClicked({ name: 'name' }))
  });

  it('should dispatch viewTripComponentShowDetailsClicked on showDetails', () => {
    const spy = spyOn(mockStore, 'dispatch');

    component.showDetails('name');

    expect(spy).toHaveBeenCalledWith(viewTripComponentShowDetailsClicked({ name: 'name' }))
  });
});
