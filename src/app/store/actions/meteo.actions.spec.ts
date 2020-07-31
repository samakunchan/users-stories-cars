import * as MeteoActions from './meteo.actions';

describe('Meteo', () => {
  it('should create an instance', () => {
    expect(new MeteoActions.LoadMeteos()).toBeTruthy();
  });
});
