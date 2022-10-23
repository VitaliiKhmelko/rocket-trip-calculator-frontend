import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControl, FormControlDirective, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { Trip } from 'src/app/models/trip';
import { createTripComponentCreateButtonClicked } from 'src/app/redux/actions/create-trip-component.actions.ts.actions';
import { UserService } from 'src/app/services/user.service';

import { CreateTripContainerComponent } from './create-trip-container.component';

describe('CreateTripContainerComponent', () => {
  let component: CreateTripContainerComponent;
  let fixture: ComponentFixture<CreateTripContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CreateTripContainerComponent,
        MockDirectives(FormControlDirective, MatLabel, MatError, MatCardContent, FormGroupDirective, MatCardFooter),
        MockComponents(MatFormField)
      ],
      providers: [
        provideMockStore(),
        {
          provide: UserService,
          useValue: {},
        },
        {
          provide: FormBuilder,
          useValue: {
            group: () => { }
          }
        },
        {
          provide: Router,
          useValue: {
            navigate: () => { }
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateTripContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect to empty path if tripId', () => {
    TestBed.inject(UserService).User = { name: 'Jim', tripId: 'trip' };
    const spy = spyOn(TestBed.inject(Router), 'navigate')

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith(['']);
  })

  it('should push participator on addParticipator', () => {
    component.participators = [];

    component.addParticipator();

    expect(component.participators.length).toBe(1)
  })

  it('should not dispatch createTripComponentCreateButtonClicked if form is not valid', () => {
    const spy = spyOn(TestBed.inject(MockStore), 'dispatch');
    component.form = {
      valid: false
    } as FormGroup;
    component.onSubmit();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should dispatch createTripComponentCreateButtonClicked if form valid', () => {
    const spy = spyOn(TestBed.inject(MockStore), 'dispatch');
    component.participators = [{
      value: 'Bob'
    } as FormControl];

    component.form = {
      valid: true,
      value: {
        name: 'Trip to LA',
        description: 'enjoy!',
      } as Partial<Trip>
    } as FormGroup;
    component.onSubmit();
    expect(spy).toHaveBeenCalledWith(createTripComponentCreateButtonClicked({
      trip: {
        name: 'Trip to LA', description: 'enjoy!', participators: {
          Bob: {
            name: 'Bob', expenses: []
          }
        }
      }
    }));
  });
});
