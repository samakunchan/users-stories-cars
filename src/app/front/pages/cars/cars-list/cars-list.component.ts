import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../../../../core/models/car.model';
import { DialogBuilder } from '../../../../core/utils/builders/dialogBuilder';
import { MatDialog } from '@angular/material/dialog';
import { CarsEditComponent } from '../../cars-edit/cars-edit.component';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.scss'],
})
export class CarsListComponent implements OnInit {
  @Input() car: Car;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onEditNewCar(car: Car): void {
    const dialogConfig = new DialogBuilder()
      .withTitle('Mettre à jour: ' + car.nom)
      .withWidth('400px')
      .withDatas(car)
      .build();
    this.dialog.open(CarsEditComponent, dialogConfig).afterClosed();
  }
}
