import { Action } from '@ngrx/store';

export enum CarsActionTypes {
  LoadCars = '[Home] Load Cars',
  NewCars = '[Home new btn] Add new Car',
  EditCars = '[Home edit btn] Edit a Car',
  DeleteCars = '[Home del btn] Delete a Car',
  LoadCarsSuccess = '[Cars] Load Cars Success',
  LoadCarsFailure = '[Cars] Load Cars Failure',
}

export class LoadCars implements Action {
  readonly type = CarsActionTypes.LoadCars;
}

export class NewCars implements Action {
  readonly type = CarsActionTypes.NewCars;
  constructor(public payload: { data: any }) {}
}

export class EditCars implements Action {
  readonly type = CarsActionTypes.EditCars;
  constructor(public payload: { data: any }) {}
}

export class DeleteCars implements Action {
  readonly type = CarsActionTypes.DeleteCars;
  constructor(public payload: { data: any }) {}
}
export class LoadCarsSuccess implements Action {
  readonly type = CarsActionTypes.LoadCarsSuccess;
  constructor(public payload: { data: any }) {}
}

export class LoadCarsFailure implements Action {
  readonly type = CarsActionTypes.LoadCarsFailure;
  constructor(public payload: { error: any }) {}
}

export type CarsActions = LoadCars | LoadCarsSuccess | LoadCarsFailure;
