import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CarsComponent } from './front/pages/cars/cars.component';
import { NotFoundComponent } from './not-found.component';

const routes: Routes = [
  { path: 'cars', component: CarsComponent },
  { path: 'cars/not-found', component: NotFoundComponent },
  { path: '', redirectTo: 'cars', pathMatch: 'full' },
  { path: '**', redirectTo: 'cars/not-found' },
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
