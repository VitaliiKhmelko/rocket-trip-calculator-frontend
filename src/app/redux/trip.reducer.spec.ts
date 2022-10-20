import { initialState, tripReducer } from './trip.reducer';

describe('Trip Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = tripReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
