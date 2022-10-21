import { round } from "./calculations.helper";

describe('round function', () => {
  it('should round the value', () => {
    expect(round(0.1 + 0.2)).toBe(0.3);
  })
})