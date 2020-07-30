import { CarsActions, CarsActionTypes } from '../actions/cars.actions';
import { Car } from '../../core/models/car.model';

export const carsFeatureKey = 'cars';

export interface CarsState {
  datas: Car[] | string;
  loading: boolean;
  loaded: boolean;
}

export const initialState: CarsState = {
  datas: undefined,
  loading: true,
  loaded: false,
};

export function carsReducer(state = initialState, action: CarsActions): CarsState {
  switch (action.type) {
    case CarsActionTypes.LoadCarsSuccess:
      return {
        ...state,
        datas: action.payload.data,
        loading: false,
        loaded: true,
      };
    case CarsActionTypes.LoadCarsFailure:
      return {
        ...state,
        datas: action.payload.error,
        loading: false,
        loaded: true,
      };
    default:
      return state;
  }
}
