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
    const newCar = {
      ...car,
      ...{ id: Date.now() },
    };
    return listCars.concat([newCar]);
  }

  editCar(listCars: Car[], replaceCar: Car): Car[] {
    const searchCar = listCars.findIndex((data) => data.id === replaceCar.id);
    const carsEdited = {
      ...listCars[searchCar],
      ...replaceCar,
    };
    return listCars.map((cars) => [carsEdited].find((o) => o.id === cars.id) || cars);
  }

  deleteCar(listCars: Car[], deletedCar: Car): Car[] {
    return listCars.filter((data) => data.id !== deletedCar.id);
  }
}
