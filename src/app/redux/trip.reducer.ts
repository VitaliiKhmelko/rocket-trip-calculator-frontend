import { createReducer, on } from '@ngrx/store';
import { Trip } from '../models/trip';
import { loadTripsSuccess } from './actions/load-trip.actions';


export const tripFeatureKey = 'trip';

export interface TripState {
  trip: Trip | undefined
}

export const initialState: TripState = {
  trip: undefined
};

export const tripReducer = createReducer(
  initialState,
  on(loadTripsSuccess, (state, { data: trip }) => {
    return { ...state, trip };
  })
);
