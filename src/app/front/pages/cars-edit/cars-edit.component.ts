import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { Car } from '../../../core/models/car.model';
import { EditCars } from '../../../store/actions/cars.actions';

@Component({
  selector: 'app-cars-edit',
  templateUrl: './cars-edit.component.html',
  styleUrls: ['./cars-edit.component.scss'],
})
export class CarsEditComponent implements OnInit {
  dialogTitle: string;
  carEditForm: FormGroup;
  car: Car;
  constructor(
    private dialogRef: MatDialogRef<CarsEditComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.car = this.data.datas;
    this.initEditForm();
  }

  initEditForm(): void {
    this.carEditForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      couleur: ['', [Validators.required, Validators.minLength(3)]],
      dateAchat: ['', [Validators.required, Validators.minLength(3)]],
      etat: ['', [Validators.required, Validators.minLength(3)]],
      immatriculation: ['', [Validators.required, Validators.minLength(3)]],
      marque: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.carEditForm.patchValue({ ...this.car });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    console.log(this.carEditForm.value);
    const submitValue: Car = {
      ...this.carEditForm.value,
      ...{ id: this.car.id },
    };
    this.store.dispatch(new EditCars({ data: submitValue }));
    this.onClose();
  }
}
