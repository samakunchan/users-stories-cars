import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { NewCars } from '../../../store/actions/cars.actions';
import { Car } from '../../../core/models/car.model';
import { getUserId } from '../../../store/selectors/user.selectors';
import { tap } from 'rxjs/operators';
import { DateValidators } from '../../../core/utils/validators/date-validators';

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
      dateAchat: ['', Validators.compose([Validators.required, DateValidators.dateValidator])],
      etat: ['', [Validators.required, Validators.minLength(3)]],
      immatriculation: ['', [Validators.required, Validators.minLength(3)]],
      marque: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  onClose(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.store
      .select(getUserId)
      .pipe(
        tap((userId) => {
          const submitValue: Car = {
            ...this.carForm.value,
            ...{ dateAchat: this.carForm.value.dateAchat },
            ...{ createdBy: userId },
          };
          this.store.dispatch(new NewCars({ data: submitValue }));
        }),
      )
      .subscribe();
    this.onClose();
  }
}
