import { createFeatureSelector, createSelector } from '@ngrx/store';
import { carsFeatureKey, CarsState } from '../reducers/cars.reducer';

export const getCarsState = createFeatureSelector<CarsState>(carsFeatureKey);

export const carSuccessfullyLoaded = createSelector(getCarsState, (state: CarsState) => state.datas);
