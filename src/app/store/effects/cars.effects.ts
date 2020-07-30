import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { CarsActionTypes, DeleteCars, EditCars, LoadCars, LoadCarsSuccess, NewCars } from '../actions/cars.actions';
import { Action, Store } from '@ngrx/store';
import { CarsService } from '../../core/services/cars.service';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { Car } from '../../core/models/car.model';
import { AppState } from '../../reducers';
import { carSuccessfullyLoaded } from '../selectors/cars.selectors';

@Injectable()
export class CarsEffects implements OnInitEffects {
  @Effect()
  loadCar$ = this.actions$.pipe(
    ofType<LoadCars>(CarsActionTypes.LoadCars),
    switchMap(() => this.carsService.loadAllCars().pipe(map((data: Car[]) => new LoadCarsSuccess({ data })))),
  );

  @Effect({ dispatch: false })
  newCar$ = this.actions$.pipe(
    ofType<NewCars>(CarsActionTypes.NewCars),
    withLatestFrom(this.store.select(carSuccessfullyLoaded)),
    map(([newCar, listCars]) => this.carsService.addCar(listCars, newCar.payload.data)),
    tap((data) => this.store.dispatch(new LoadCarsSuccess({ data }))),
  );

  @Effect({ dispatch: false })
  editCar$ = this.actions$.pipe(
    ofType<EditCars>(CarsActionTypes.EditCars),
    withLatestFrom(this.store.select(carSuccessfullyLoaded)),
    map(([editCar, listCars]) => this.carsService.editCar(listCars, editCar.payload.data)),
    tap((data) => this.store.dispatch(new LoadCarsSuccess({ data }))),
  );

  @Effect({ dispatch: false })
  deleteCar$ = this.actions$.pipe(
    ofType<DeleteCars>(CarsActionTypes.DeleteCars),
    withLatestFrom(this.store.select(carSuccessfullyLoaded)),
    map(([delCar, listCars]) => this.carsService.deleteCar(listCars, delCar.payload.data)),
    tap((data) => this.store.dispatch(new LoadCarsSuccess({ data }))),
  );

  constructor(private actions$: Actions, private carsService: CarsService, private store: Store<AppState>) {}

  ngrxOnInitEffects(): Action {
    return new LoadCars();
  }
}
