import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { NewCars } from '../../../store/actions/cars.actions';
import { Car } from '../../../core/models/car.model';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.scss'],
})
export class CarsNewComponent implements OnInit {
  carForm: FormGroup;
  dialogTitle: string;
  constructor(
    private dialogRef: MatDialogRef<CarsNewComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private formBuilder: FormBuilder,
    private store: Store<AppState>,
  ) {}

  ngOnInit(): void {
    this.dialogTitle = this.data.dialogTitle;
    this.initForm();
  }

  initForm(): void {
    this.carForm = this.formBuilder.group({
      nom: ['', [Validators.required, Validators.minLength(3)]],
      couleur: ['', [Validators.required, Validators.minLength(3)]],
      dateAchat: ['', [Validators.required, Validators.minLength(3)]],
      etat: ['', [Validators.required, Validators.minLength(3)]],
      immatriculation: ['', [Validators.required, Validators.minLength(3)]],
      marque: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const dateGen = new Date(Date.parse(this.carForm.value.dateAchat));
    const day = dateGen.getDate() <= 10 ? '0' + dateGen.getDate() : dateGen.getDate();
    const mounth = dateGen.getMonth() + 1 <= 10 ? '0' + (dateGen.getMonth() + 1) : dateGen.getMonth() + 1;
    const year = dateGen.getFullYear();
    const dateFormat = day + '/' + mounth + '/' + year;
    const submitValue: Car = {
      ...this.carForm.value,
      ...{ dateAchat: dateFormat },
    };
    this.store.dispatch(new NewCars({ data: submitValue }));
    this.onClose();
  }
}
