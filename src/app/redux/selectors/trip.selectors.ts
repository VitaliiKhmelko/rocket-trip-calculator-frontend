import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';
import { tripFeatureKey, TripState } from '../trip.reducer';

const selectTripFeature: MemoizedSelector<object, TripState, DefaultProjectorFn<TripState>> = createFeatureSelector(tripFeatureKey);

/**
 * Select trip from the store
 */
export const selectTrip = createSelector(selectTripFeature, (tripState: TripState) => {
  return tripState.trip
})