import { Component, OnInit } from '@angular/core';
import { LoadCarsSuccess } from '../../../store/actions/cars.actions';
import { carSuccessfullyLoaded } from '../../../store/selectors/cars.selectors';
import { map } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(new LoadCarsSuccess({ data: 'hello' }));
    this.store
      .select(carSuccessfullyLoaded)
      .pipe(map((data) => console.log(data)))
      .subscribe();
  }
}
