import { Routes } from '@angular/router';
import { Landing } from './landing/landing';
import { CasasPiloto } from './casas-piloto/casas-piloto';

export const routes: Routes = [
  {
    path: '',
    component: Landing,
    title: 'M.A Modular — Arquitectura que se siente'
  },
  {
    path: 'casas-piloto',
    component: CasasPiloto,
    title: 'Casas Piloto — M.A Modular'
  },
  {
    path: '**',
    redirectTo: ''
  }
];