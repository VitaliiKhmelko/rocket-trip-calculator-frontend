import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TripEffects } from './redux/effects/trip.effects';
import { tripReducer } from './redux/trip.reducer';
import { WINDOW } from './shared/window-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ trip: tripReducer }, {}),
    EffectsModule.forRoot(
      [TripEffects]
    ),
    HttpClientModule,
    MatDialogModule
  ],
  providers: [{
    provide: WINDOW,
    useValue: window,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
