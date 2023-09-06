import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminPage } from './admin.page';
// import {DashboardPage} from "./dashboard/dashboard.page";
// import {MembresiasPage} from "./membresias/membresias.page";
// import {CanchasPage} from "./canchas/canchas.page";
// import {UsuariosPage} from "./usuarios/usuarios.page";
// import * as path from "path";




// const routes: Routes = [
//   {
//     path: '', component: AdminPage,
//   },
//       { path: '', redirectTo: 'admin', pathMatch: 'full' } // Ruta por defecto dentro de admin
// ];

const routes: Routes = [
  {
    path: '',
    component: AdminPage,
    children: [
      {
        path: 'dashboard',
        children: [
          {
            path: '',
            loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },
      {
        path: 'membresias',
        children: [
          {
            path: '',
            loadChildren: () => import('./membresias/membresias.module').then(m => m.MembresiasPageModule)
          }
        ]
      },
      {
        path: 'canchas',
        children: [
          {
            path: '',
            loadChildren: () => import('./canchas/canchas.module').then(m => m.CanchasPageModule)
          },
        ]
      },
      {        path: 'reservas',
        children: [
          {
            path: '',
            loadChildren: () => import('../admin/reservas/reservas.module').then(m => m.ReservasPageModule)
          },
        ]
      },
      {
        path: 'usuarios',
        children: [
          {
            path: '',
            loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosPageModule)
          }
        ]
      }
    ],
  }
      ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
