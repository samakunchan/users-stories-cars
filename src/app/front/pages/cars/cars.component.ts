import { Component, OnInit } from '@angular/core';
import { carSuccessfullyLoaded } from '../../../store/selectors/cars.selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { Observable } from 'rxjs';
import { Car } from '../../../core/models/car.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss'],
})
export class CarsComponent implements OnInit {
  cars$: Observable<Car[]>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.cars$ = this.store.select(carSuccessfullyLoaded);
  }
}
