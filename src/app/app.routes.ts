import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardsPackageComponent } from './components/cards-package/cards-package.component';
import { SetsModel } from './core/models/BoostersModel';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'cards',
    component: CardsPackageComponent,
  },
];
