import { TripCalculatorService } from '../services/trip-calculator.service';
import { TotalPipe } from './total.pipe';

describe('TotalPipe', () => {
  const tripCalculatorServiceSpy: TripCalculatorService = jasmine.createSpyObj('TripCalculatorService', ['calculateStudentExpenses']);

  it('create an instance', () => {
    const pipe = new TotalPipe(tripCalculatorServiceSpy);
    expect(pipe).toBeTruthy();
  });

  it('should call calculateStudentExpenses', () => {
    const pipe = new TotalPipe(tripCalculatorServiceSpy);
    pipe.transform([])
    expect(tripCalculatorServiceSpy.calculateStudentExpenses).toHaveBeenCalled()
  });
});
