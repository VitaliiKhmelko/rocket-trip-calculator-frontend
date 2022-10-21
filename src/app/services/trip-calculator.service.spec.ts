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

  //Example from task requirements
  it('should make calculations', (): void => {
    const attendants: Attendant[] = [{
      name: 'Adriana',
      expenses: [{ cost: 5.75 }, { cost: 35.00 }, { cost: 12.79 }]
    }, {
      name: 'Bao',
      expenses: [{ cost: 12.00 }, { cost: 15.00 }, { cost: 23.23 }]
    }, {
      name: 'Camden',
      expenses: [{ cost: 10.00 }, { cost: 20.00 }, { cost: 38.41 }, { cost: 45.00 }]
    }]

    const result = service.calculateBelongings(attendants);

    expect(result.total).toBe(217.18);
    expect(result.belongings).toEqual([
      { who: 'Bao', whom: 'Camden', amount: 22.16 },
      { who: 'Adriana', whom: 'Camden', amount: 18.85 },
    ]);
  })
});
