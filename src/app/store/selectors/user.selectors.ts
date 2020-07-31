import { createFeatureSelector, createSelector } from '@ngrx/store';
import { userFeatureKey, UserState } from '../reducers/user.reducer';

export const getUserState = createFeatureSelector<UserState>(userFeatureKey);

export const getUserId = createSelector(getUserState, (state: UserState) => state.user);
