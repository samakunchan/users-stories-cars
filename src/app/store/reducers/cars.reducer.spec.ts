import { carsReducer, initialState } from './cars.reducer';

describe('Cars Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = carsReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
