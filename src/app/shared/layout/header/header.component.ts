import { Component, OnInit } from '@angular/core';
import { DialogBuilder } from '../../../core/utils/builders/dialogBuilder';
import { CarsNewComponent } from '../../../front/pages/cars-new/cars-new.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}

  onAddNewCar(): void {
    const dialogConfig = new DialogBuilder().withTitle('Ajouter une voiture').withWidth('400px').build();
    this.dialog.open(CarsNewComponent, dialogConfig).afterClosed();
  }
}
