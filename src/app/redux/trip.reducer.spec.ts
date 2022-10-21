import { Trip } from '../models/trip';
import { loadTripsSuccess } from './actions/load-trip.actions';
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
});
