import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsComponent } from './front/pages/cars/cars.component';
import { CarsNewComponent } from './front/pages/cars-new/cars-new.component';
import { CarsEditComponent } from './front/pages/cars-edit/cars-edit.component';
import { CarsDeleteComponent } from './front/pages/cars-delete/cars-delete.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'cars/new', component: CarsNewComponent },
  { path: 'cars/edit/:id', component: CarsEditComponent },
  { path: 'cars/delete/:id', component: CarsDeleteComponent },
  { path: 'cars/not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: '**', redirectTo: 'cars/not-found' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
