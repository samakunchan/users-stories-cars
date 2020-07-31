import { Injectable } from '@angular/core';
import { Actions, Effect, ofType, OnInitEffects } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LoadUserId, LoadUserIdSuccess, UserActionTypes } from '../actions/user.actions';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from '../../core/services/user.service';
import { User } from '../../core/models/user.model';

@Injectable()
export class UserEffects implements OnInitEffects {
  @Effect()
  loadCar$ = this.actions$.pipe(
    ofType<LoadUserId>(UserActionTypes.LoadUserId),
    switchMap(() => this.userService.loadUserId().pipe(map((user: User) => new LoadUserIdSuccess({ user })))),
  );

  constructor(private actions$: Actions, private userService: UserService) {}

  ngrxOnInitEffects(): Action {
    return new LoadUserId();
  }
}
