import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  loadUserId(): Observable<User> {
    return of({ uid: Math.random().toString(36).substr(2, 9) });
  }
}
