import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../../core/models/car.model';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  @Input() car: Car;
  constructor() {}

  ngOnInit(): void {}
}
