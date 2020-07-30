import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/layout/footer/footer.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CarsComponent } from './front/pages/cars/cars.component';
import { CarsNewComponent } from './front/pages/cars-new/cars-new.component';
import { CarsEditComponent } from './front/pages/cars-edit/cars-edit.component';
import { CarsDeleteComponent } from './front/pages/cars-delete/cars-delete.component';
import { UsersComponent } from './admin/pages/users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { carsReducer } from './store/reducers/cars.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CarsEffects } from './store/effects/cars.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CarsComponent,
    CarsNewComponent,
    CarsEditComponent,
    CarsDeleteComponent,
    UsersComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule,
    StoreModule.forRoot({ cars: carsReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    EffectsModule.forRoot([CarsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
