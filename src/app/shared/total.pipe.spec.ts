import { TotalPipe } from './total.pipe';

describe('TotalPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return sum of expenses', () => {
    const expenses = [{
      cost: 1,
    }, {
      cost: 4,
    }]

    const pipe = new TotalPipe();
    expect(pipe.transform(expenses)).toBe(5)
  });

  it('should set 0 if no cost', () => {
    const expenses = [{
      costs: 1,
    }, {
      cost: 4,
    }];

    const pipe = new TotalPipe();

    expect(pipe.transform(expenses as any)).toBe(4);
  })
});
