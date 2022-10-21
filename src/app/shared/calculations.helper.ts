/**
 * Round the value with precision 2 so it always looks like money
 *  
 * @param value value to round
 */
export function round(value: number): number {
  return Math.round(value * 100) / 100;
}