import { Participator } from '../models/participator';
import { Trip } from '../models/trip';
import { loadTripsSuccess } from './actions/load-trip.actions';
import { saveExpensesSuccess } from './actions/save-expenses.actions';
import { initialState, tripReducer } from './trip.reducer';

describe('Trip Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = tripReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });

  describe('loadTripsSuccess', () => {
    it('should update trip details', () => {
      const action = loadTripsSuccess({ data: { name: 'NY trip' } as Trip });

      const result = tripReducer(initialState, action);

      expect(result.trip).toEqual({ name: 'NY trip' } as Trip);
    });
  });

  describe('saveExpensesSuccess', () => {
    it('should return unchanged state if no trip', () => {
      const action = saveExpensesSuccess({ participator: {} as Participator });

      const result = tripReducer({ trip: undefined }, action);

      expect(result).toEqual({ trip: undefined })
    });

    it('should update expenses if participator', () => {
      const action = saveExpensesSuccess({ participator: { name: 'Moana', expenses: [{ cost: 2.34 }] } });

      const result = tripReducer({
        trip: {
          participators: {
            'Moana': {
              name: 'Moana',
              expenses: [{ cost: 2.32 }]
            }
          }
        } as unknown as Trip
      }
        , action);

      expect(result).toEqual({
        trip: {
          participators: {
            Moana: { name: 'Moana', expenses: [{ cost: 2.32 }, { cost: 2.34 }] }
          }
        } as unknown as Trip
      })
    })
  })
});
