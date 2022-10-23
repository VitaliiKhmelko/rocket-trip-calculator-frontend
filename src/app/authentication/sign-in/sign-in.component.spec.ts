import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControlName, FormGroup, FormGroupDirective } from '@angular/forms';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { Router } from '@angular/router';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { MockComponents, MockDirectives } from 'ng-mocks';
import { loginButtonClicked } from 'src/app/redux/actions/login.actions';
import { UserService } from 'src/app/services/user.service';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SignInComponent,
        MockDirectives(MatCardFooter, MatCardContent, FormControlName, MatLabel, FormGroupDirective, MatError),
        MockComponents(MatCard, MatFormField)],
      providers: [
        provideMockStore(),
        {
          provide: FormBuilder,
          useValue: jasmine.createSpyObj('FormBuilder', ['group'])
        },
        {
          provide: UserService,
          useValue: {}
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate if user signed on', () => {
    const spy = spyOn(TestBed.inject(Router), 'navigate')
    TestBed.inject(UserService).User = { name: 'user' }

    component.ngOnInit();

    expect(spy).toHaveBeenCalledWith([''])
  })

  it('should dispatch event on onSubmit', () => {
    const spy = spyOn(TestBed.inject(MockStore), 'dispatch');

    component.form = {
      valid: true,
      value: { name: 'Sarah' }
    } as FormGroup;

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(loginButtonClicked({ name: 'Sarah' }))
  })
});
