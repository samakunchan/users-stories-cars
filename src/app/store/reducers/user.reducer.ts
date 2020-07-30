import { UserActions, UserActionTypes } from '../actions/user.actions';
import { User } from '../../core/models/user.model';

export const userFeatureKey = 'user';

export interface UserState {
  user: User;
}

export const initialState: UserState = {
  user: undefined,
};

export function userReducer(state = initialState, action: UserActions): UserState {
  switch (action.type) {
    case UserActionTypes.LoadUserIdSuccess:
      return {
        ...state,
        user: action.payload.user,
      };
    default:
      return state;
  }
}
