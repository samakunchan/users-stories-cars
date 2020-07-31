import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { MeteoEffects } from './meteo.effects';

describe('MeteoEffects', () => {
  let actions$: Observable<any>;
  let effects: MeteoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MeteoEffects, provideMockActions(() => actions$)],
    });

    effects = TestBed.inject(MeteoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
