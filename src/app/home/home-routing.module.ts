import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from './home.page';




const routes: Routes = [
  {
    path: 'tabs',
    component: HomePage,
    children: [
      {
        path: 'inicio',
        children: [
          {
          path: '',
          loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
        },
        ]
      },
      {
        path: 'membresias',
        children: [
          {
            path: '',
            loadChildren: () => import('../tennis/membresias/membresias.module').then(m => m.MembresiasPageModule)
          }
        ]
      },
      {
        path: 'booking',
        children: [
          {
            path: '',
            loadChildren: () => import('../bookings/bookings.module').then(m => m.BookingsPageModule)
          }
        ]
      },
      {
        path: 'admin',
        children: [
          {
            path: '',
            loadChildren: () => import('../admin/admin.module').then(m => m.AdminPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/home/tabs/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/home/tabs/inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio-detalles',
    loadChildren: () => import('./inicio/inicio-detalles/inicio-detalles.module').then( m => m.InicioDetallesPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
