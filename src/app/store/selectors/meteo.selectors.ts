import { createFeatureSelector, createSelector } from '@ngrx/store';
import { meteoFeatureKey, MeteoState } from '../reducers/meteo.reducer';

export const getMeteoState = createFeatureSelector<MeteoState>(meteoFeatureKey);

export const getMeteoData = createSelector(getMeteoState, (state: MeteoState) => state.meteos);
