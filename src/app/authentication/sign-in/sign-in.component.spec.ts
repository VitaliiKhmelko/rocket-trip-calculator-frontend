import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormControlName, FormGroupDirective } from '@angular/forms';
import { MatCard, MatCardContent, MatCardFooter } from '@angular/material/card';
import { MatError, MatFormField, MatLabel } from '@angular/material/form-field';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponents, MockDirectives } from 'ng-mocks';

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
});
