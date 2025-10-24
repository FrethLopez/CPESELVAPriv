import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { MainLayout } from './shared/layout/main-layout/main-layout';

export const routes: Routes = [
  { path: '', component: Inicio },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'consultas',
        loadComponent: () =>
          import('./pages/consultas/consultas').then(
            m => m.Consultas
          ),
      },
      {
        path: 'reportes',
        loadComponent: () =>
          import('./pages/reportes/reportes').then(
            m => m.Reportes
          ),
      },
      {
        path: 'configuracion',
        loadComponent: () =>
          import('./pages/configuracion/configuracion').then(
            m => m.Configuracion
          ),
      },
    ],
  },
  { path: '**', redirectTo: '' },
];
