import { Action } from '@ngrx/store';
import { User } from '../../core/models/user.model';

export enum UserActionTypes {
  LoadUserId = '[User] Init load for user',
  LoadUserIdSuccess = '[User effect] Load User id',
}

export class LoadUserId implements Action {
  readonly type = UserActionTypes.LoadUserId;
}

export class LoadUserIdSuccess implements Action {
  readonly type = UserActionTypes.LoadUserIdSuccess;
  constructor(public payload: { user: User }) {}
}

export type UserActions = LoadUserId | LoadUserIdSuccess;
