import { TestBed } from '@angular/core/testing';
import { Attendant } from '../models/attender';

import { TripCalculatorService } from './trip-calculator.service';

describe('TripCalculatorService', () => {
  let service: TripCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('calculateStudentExpenses', () => {
    it('should return 0 if expenses are undefined', () => {
      const result = service.calculateStudentExpenses([undefined as any]);

      expect(result).toBe(0);
    })
  });

  describe('calculateBelongings', () => {
    it('should return total 0 if no attendants', (): void => {
      const result = service.calculateBelongings([])
      expect(result.total).toBe(0);
      expect(result.belongings).toEqual([])
    });

    it('should make calculations', (): void => {
      const attendants: Attendant[] = [{
        name: 'John',
        expenses: [{ cost: 2.56 }, { cost: 0.01 }, { cost: 0.02 }]
      }, {
        name: 'Sarah',
        expenses: [{ cost: 6.99 }, { cost: 5.98 }, { cost: 7.59 }]
      }, {
        name: 'Ivan',
        expenses: [{ cost: 13.01 }, { cost: 4.07 }, { cost: 3.09 }]
      }]

      const result = service.calculateBelongings(attendants);

      expect(result.total).toBe(43.32);
      expect(result.belongings).toEqual([
        { who: 'John', whom: 'Sarah', amount: 6.12 },
        { who: 'John', whom: 'Ivan', amount: 5.73 }
      ]);
    })
  });
});
