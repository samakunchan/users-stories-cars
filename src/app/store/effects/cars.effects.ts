import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { CarsActionTypes, LoadCars, LoadCarsSuccess, NewCars } from '../actions/cars.actions';
import { Action } from '@ngrx/store';
import { CarsService } from '../../core/services/cars.service';
import { map, switchMap } from 'rxjs/operators';
import { Car } from '../../core/models/car.model';

@Injectable()
export class CarsEffects implements OnInitEffects {
  @Effect()
  loadCar$ = this.actions$.pipe(
    ofType<NewCars>(CarsActionTypes.LoadCars),
    switchMap(() => this.carsService.loadAllCars().pipe(map((data: Car[]) => new LoadCarsSuccess({ data })))),
  );

  @Effect({ dispatch: false })
  newCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.NewCars));

  @Effect({ dispatch: false })
  editCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.EditCars));

  @Effect({ dispatch: false })
  deleteCar$ = this.actions$.pipe(ofType<NewCars>(CarsActionTypes.DeleteCars));

  constructor(private actions$: Actions, private carsService: CarsService) {}

  ngrxOnInitEffects(): Action {
    return new LoadCars();
  }
}
