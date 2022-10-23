import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents } from 'ng-mocks';
import { first } from 'rxjs';
import { Participator } from 'src/app/models/participator';
import { Trip } from 'src/app/models/trip';
import { viewTripComponentAddExpensesClicked, viewTripComponentFinishTripClicked, viewTripComponentInitialized } from 'src/app/redux/actions/view-trip-component.actions';
import { selectTrip } from 'src/app/redux/selectors/trip.selectors';
import { UserService } from 'src/app/services/user.service';
import { ExpensesTableComponent } from '../expenses-table/expenses-table.component';
import { ViewTripContainerComponent } from './view-trip-container.component';

describe('ViewTripContainerComponent', () => {
  let component: ViewTripContainerComponent;
  let fixture: ComponentFixture<ViewTripContainerComponent>;
  let mockStore: MockStore;
  let mockUserService: jasmine.SpyObj<UserService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTripContainerComponent, MockComponents(ExpensesTableComponent)],
      providers: [
        provideMockStore(),
        {
          provide: UserService,
          useValue: {}
        }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewTripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockStore = TestBed.inject(MockStore);
    mockUserService = TestBed.inject(UserService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch viewTripComponentInitialized on component initialized', () => {
    TestBed.inject(UserService).User = { name: 'Joan', tripId: 'NY trip' }
    const spy = spyOn(mockStore, 'dispatch');

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(viewTripComponentInitialized({ tripId: 'NY trip' }))
  });

  it('should dispatch viewTripComponentInitialized on addExpenses', () => {
    const spy = spyOn(mockStore, 'dispatch');

    component.addExpenses('name', 'tripId');

    expect(spy).toHaveBeenCalledWith(viewTripComponentAddExpensesClicked({ payload: { name: 'name', tripId: 'tripId' } }))
  });

  it('should dispatch viewTripComponentFinishTripClicked on finishTrip', () => {
    const spy = spyOn(mockStore, 'dispatch');

    component.finishTrip({} as Trip);

    expect(spy).toHaveBeenCalledWith(viewTripComponentFinishTripClicked({ trip: {} as Trip }))
  });

  it('should assign participators from ngrx store', () => {
    TestBed.inject(UserService).User = { name: 'John', tripId: 'trip' };
    mockStore.overrideSelector(selectTrip, {
      participators: {
        'Andrew': {
          name: 'Andrew',
          expenses: []
        }
      } as { [key: string]: Participator }
    } as Trip);

    component.ngOnInit();

    component.trip$?.pipe(first()).subscribe();

    expect(component.participators).toEqual([{
      name: 'Andrew',
      expenses: []
    }])
  })

});
