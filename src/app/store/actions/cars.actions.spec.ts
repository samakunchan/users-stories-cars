import * as CarsActions from './cars.actions';

describe('Cars', () => {
  it('should create an instance', () => {
    expect(new CarsActions.LoadCars()).toBeTruthy();
  });
});
