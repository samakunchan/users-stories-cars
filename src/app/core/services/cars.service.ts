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

  addCar(listCars: Car[], car: Car): Car[] {
    return listCars.concat([car]);
  }

  editCar(listCars: Car[], replaceCar: Car): Car[] {
    const searchCar = listCars.findIndex((data) => data.id === replaceCar.id);
    const carsEdited = {
      ...listCars[searchCar],
      ...replaceCar,
    };
    return listCars.map((obj) => [carsEdited].find((o) => o.id === obj.id) || obj);
  }
}
