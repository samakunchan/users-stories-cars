import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { CarsActionTypes, NewCars } from '../actions/cars.actions';

@Injectable()
export class CarsEffects {
  @Effect({ dispatch: false })
  loadCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.LoadCars));

  @Effect({ dispatch: false })
  newCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.NewCars));

  @Effect({ dispatch: false })
  editCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.EditCars));

  @Effect({ dispatch: false })
  deleteCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.DeleteCars));

  constructor(private actions$: Actions) {}
}
