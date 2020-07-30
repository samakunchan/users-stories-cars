import { CarsActions, CarsActionTypes } from '../actions/cars.actions';
import { Car } from '../../core/models/car.model';

export const carsFeatureKey = 'cars';

export interface CarsState {
  datas: Car[];
}

export const initialState: CarsState = {
  datas: undefined,
};

export function carsReducer(state = initialState, action: CarsActions): CarsState {
  switch (action.type) {
    case CarsActionTypes.LoadCarsSuccess:
      return {
        ...state,
        datas: action.payload.data,
      };
    default:
      return state;
  }
}
