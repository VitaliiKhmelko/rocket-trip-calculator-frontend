import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { EffectsModule } from '@ngrx/effects';
import { LoginEffects } from '../redux/effects/login.effects';

@NgModule({
  declarations: [
    SignInComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AuthenticationRoutingModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    EffectsModule.forFeature([LoginEffects]),
  ]
})
export class AuthenticationModule { }
