import { Action } from '@ngrx/store';

export enum MeteoActionTypes {
  LoadMeteo = '[Meteo] Load Meteos',
  LoadMeteoSuccess = '[Meteo] Load Meteos success',
}

export class LoadMeteo implements Action {
  readonly type = MeteoActionTypes.LoadMeteo;
}

export class LoadMeteoSuccess implements Action {
  readonly type = MeteoActionTypes.LoadMeteoSuccess;
  constructor(public payload: { meteo: any }) {}
}

export type MeteoActions = LoadMeteo | LoadMeteoSuccess;
