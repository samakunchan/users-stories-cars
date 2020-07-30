import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Car } from '../../../core/models/car.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { DeleteCars } from '../../../store/actions/cars.actions';

@Component({
  selector: 'app-cars-delete',
  templateUrl: './cars-delete.component.html',
  styleUrls: ['./cars-delete.component.scss'],
})
export class CarsDeleteComponent implements OnInit {
  dialogTitle: string;
  carEditForm: FormGroup;
  car: Car;
  constructor(
    private dialogRef: MatDialogRef<CarsDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.car = this.data.datas;
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onConfirm(car: Car): void {
    this.store.dispatch(new DeleteCars({ data: car }));
    this.onClose();
  }
}
