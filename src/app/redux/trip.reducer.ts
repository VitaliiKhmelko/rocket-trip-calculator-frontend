import { createReducer, on } from '@ngrx/store';
import { Participator } from '../models/participator';
import { Trip } from '../models/trip';
import { loadTripsSuccess } from './actions/load-trip.actions';
import { saveExpensesSuccess } from './actions/save-expenses.actions';


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
  }),
  on(saveExpensesSuccess, (state, { participator }) => {
    if (state.trip) {
      const currentParticipator: Participator | undefined = state.trip.participators[participator.name];

      if (currentParticipator) {
        const trip: Trip = {
          ...state.trip,
          participators: {
            ...state.trip.participators,
            [participator.name]: {
              ...currentParticipator,
              expenses: currentParticipator.expenses.concat(participator.expenses),
            },
          }
        }

        return {
          ...state,
          trip
        }
      }
    }

    return state;
  })
);
