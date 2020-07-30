import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from '../reducers/user.reducer';

export const getCarsState = createFeatureSelector<UserState>(userFeatureKey);

export const getUserId = createSelector(getCarsState, (state: UserState) => state.user);
