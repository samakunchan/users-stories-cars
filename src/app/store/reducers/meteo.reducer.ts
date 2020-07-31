import { MeteoActions, MeteoActionTypes } from '../actions/meteo.actions';

export const meteoFeatureKey = 'meteo';

export interface MeteoState {
  meteos: any;
}

export const initialState: MeteoState = {
  meteos: undefined,
};

export function meteoReducer(state = initialState, action: MeteoActions): MeteoState {
  switch (action.type) {
    case MeteoActionTypes.LoadMeteoSuccess:
      return {
        ...state,
        meteos: action.payload.meteo,
      };
    default:
      return state;
  }
}
