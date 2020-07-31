import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../../../core/models/user.model';
import { getUserId } from '../../../store/selectors/user.selectors';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  userId$: Observable<User>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.userId$ = this.store.select(getUserId);
  }
}
