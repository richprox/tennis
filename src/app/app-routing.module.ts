// import { NgModule } from '@angular/core';
// import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// import {
//   redirectLoggedInTo,
//   redirectUnauthorizedTo,
//   canActivate} from '@angular/fire/auth-guard';
// // import {MembersComponent} from "./admin/members/members.component";
//
//   const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
//   const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);
//
// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () =>
//       import('./login/login.module').then( m => m.LoginPageModule),
//         ...canActivate(redirectLoggedInToHome)
//   },
//   {
//     path: 'home',
//     loadChildren: () =>
//       import('./home/home.module').then( m => m.HomePageModule),
//     ...canActivate(redirectUnauthorizedToLogin)
//   },
//   {
//     path: 'tennis',
//     loadChildren: () => import('./tennis/tennis.module').then( m => m.TennisPageModule)
//   },
//   {
//     path: 'bookings',
//     loadChildren: () => import('./bookings/bookings.module').then(m => m.BookingsPageModule)
//   },
//   {
//     path: 'users',
//     loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
//   },
//   {
//     path: 'admin',
//     loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
//   }
// ];
//
// @NgModule({
//   imports: [
//     RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
//   ],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
//


import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuard, canActivate} from '@angular/fire/auth-guard';
import { redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { AuthService } from './services/auth.service'; // Importa tu servicio AuthService

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then(m => m.LoginPageModule),
    canActivate: [AuthGuard], // Utiliza AuthGuard provisto por '@angular/fire/auth-guard'
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard], // Utiliza AuthGuard provisto por '@angular/fire/auth-guard'
  },
  {
    path: 'tennis',
    loadChildren: () =>
      import('./tennis/tennis.module').then(m => m.TennisPageModule)
  },
  {
    path: 'bookings',
    loadChildren: () =>
      import('./bookings/bookings.module').then(m => m.BookingsPageModule)
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then(m => m.UsersPageModule),
    canActivate: [AuthGuard], // Utiliza AuthGuard provisto por '@angular/fire/auth-guard'
    data: { authGuardPipe: (user, route) => AuthService.canAccessUsers(user, route) }, // Usa tu función personalizada
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then(m => m.AdminPageModule),
    canActivate: [AuthGuard], // Utiliza AuthGuard provisto por '@angular/fire/auth-guard'
    data: { authGuardPipe: (user, route) => AuthService.canAccessAdmin(user, route) }, // Usa tu función personalizada
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
