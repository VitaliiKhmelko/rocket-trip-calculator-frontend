import { TestBed } from '@angular/core/testing';

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
});
