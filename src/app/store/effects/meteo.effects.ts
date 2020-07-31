import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LoadMeteo, LoadMeteoSuccess, MeteoActionTypes } from '../actions/meteo.actions';
import { map, switchMap } from 'rxjs/operators';
import { MeteoService } from '../../core/services/meteo.service';

@Injectable()
export class MeteoEffects implements OnInitEffects {
  @Effect()
  loadCar$ = this.actions$.pipe(
    ofType<LoadMeteo>(MeteoActionTypes.LoadMeteo),
    switchMap(() => this.meteoService.loadMeteo().pipe(map((meteo) => new LoadMeteoSuccess({ meteo })))),
  );

  constructor(private actions$: Actions, private meteoService: MeteoService) {}

  ngrxOnInitEffects(): Action {
    return new LoadMeteo();
  }
}
