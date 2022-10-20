import { Trip } from "src/app/models/trip";
import { selectTrip } from "./trip.selectors";


describe('Trip Selectors', () => {
  it('should select trip', () => {
    const result = selectTrip.projector({
      trip: { name: 'NY trip' }
    });

    expect(result).toEqual({ name: 'NY trip' } as Trip)
  });
});
