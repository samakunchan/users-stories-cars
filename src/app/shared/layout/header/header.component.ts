import { Component, OnInit } from '@angular/core';
import { DialogBuilder } from '../../../core/utils/builders/dialogBuilder';
import { CarsNewComponent } from '../../../front/pages/cars-new/cars-new.component';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../../reducers';
import { Observable } from 'rxjs';
import { Car } from '../../../core/models/car.model';
import { carSuccessfullyLoaded } from '../../../store/selectors/cars.selectors';
import { map, withLatestFrom } from 'rxjs/operators';
import { getUserId } from '../../../store/selectors/user.selectors';
import { TimeagoIntl } from 'ngx-timeago';
import { strings as frenchStrings } from 'ngx-timeago/language-strings/fr';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  $totalCarCreated$: Observable<Car[]>;
  oldestCar$: Observable<Car>;
  dateReformated$: Observable<number>;
  live = true;
  constructor(private dialog: MatDialog, private store: Store<AppState>, private intl: TimeagoIntl) {
    intl.strings = frenchStrings;
    intl.changes.next();
  }

  ngOnInit(): void {
    this.$totalCarCreated$ = this.store.select(carSuccessfullyLoaded).pipe(
      withLatestFrom(this.store.select(getUserId)),
      map(([listCars, userId]) => listCars.filter((car) => car.createdBy === userId)),
    );

    this.oldestCar$ = this.store.select(carSuccessfullyLoaded).pipe(
      map((cars) =>
        cars.reduce((c, n) => {
          return Date.parse(this.reformatDate(n.dateAchat)) < Date.parse(this.reformatDate(c.dateAchat)) ? n : c;
        }),
      ),
    );

    this.dateReformated$ = this.store.select(carSuccessfullyLoaded).pipe(
      map((cars) => {
        const oldCar = cars.reduce((c, n) => {
          return Date.parse(this.reformatDate(n.dateAchat)) < Date.parse(this.reformatDate(c.dateAchat)) ? n : c;
        });
        return Date.parse(this.reformatDate(oldCar.dateAchat));
      }),
    );
  }

  onAddNewCar(): void {
    const dialogConfig = new DialogBuilder().withTitle('Ajouter une voiture').withWidth('400px').build();
    this.dialog.open(CarsNewComponent, dialogConfig).afterClosed();
  }

  reformatDate(dateStr): string {
    const dArr = dateStr.split('/');
    return dArr[1] + '/' + dArr[0] + '/' + dArr[2];
  }
}
