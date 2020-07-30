import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CarsEffects } from './cars.effects';

describe('CarsEffects', () => {
  const actions$: Observable<any>;
  let effects: CarsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CarsEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(CarsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
