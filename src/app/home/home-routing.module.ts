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
          },
          {
            path: 'tennis-courts',
            loadChildren: () => import('../admin/tennis-courts/tennis-courts.module').then(m => m.TennisCourtsModule)
          },
          {
            path: 'dashboard',
            loadChildren: () => import('../admin/dashboard/dashboard.module').then(m => m.DashboardPageModule)
          }
        ]
      },

  //     {
  //       path: 'adminGosa',
  //       children:[
  //         {
  //           path: 'account',
  //           loadChildren: () => import('../adminGosa/pages/account/account.module').then(m => m.AccountModule)
  //         },
  // {
  //   path: 'support',
  //   loadChildren: () => import('../adminGosa/pages/support/support.module').then(m => m.SupportModule)
  // },
  // {
  //   path: 'login',
  //   loadChildren: () => import('../adminGosa/pages/login/login.module').then(m => m.LoginModule)
  // },
  // {
  //   path: 'signup',
  //   loadChildren: () => import('../adminGosa/pages/signup/signup.module').then(m => m.SignUpModule)
  // },
  // {
  //   path: 'app',
  //   loadChildren: () => import('../adminGosa/pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
  // },
  // {
  //   path: 'tutorial',
  //   loadChildren: () => import('../adminGosa/pages/tutorial/tutorial.module').then(m => m.TutorialModule)
  //         },
  //       ]
  //     },
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
