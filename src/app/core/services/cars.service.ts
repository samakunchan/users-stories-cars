import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Car } from '../models/car.model';
import { carsDatas } from '../fakedata/cars-datas';

@Injectable({
  providedIn: 'root',
})
export class CarsService {
  constructor() {}

  loadAllCars(): Observable<Car[]> {
    return of(carsDatas);
  }
}
