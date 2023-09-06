import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from './app.component';

// const routes: Routes = [
//   {
//     path: '',
//     redirectTo: '/tutorial',
//     pathMatch: 'full'
//   },
//   {
//     path: 'account',
//     loadChildren: () => import('./pages/account/account.module').then(m => m.AccountModule)
//   },
//   {
//     path: 'support',
//     loadChildren: () => import('./pages/support/support.module').then(m => m.SupportModule)
//   },
//   {
//     path: 'login',
//     loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
//   },
//   {
//     path: 'signup',
//     loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignUpModule)
//   },
//   {
//     path: 'app',
//     loadChildren: () => import('./pages/tabs-page/tabs-page.module').then(m => m.TabsModule)
//   },
//   {
//     path: 'tutorial',
//     loadChildren: () => import('./pages/tutorial/tutorial.module').then(m => m.TutorialModule)}
// ];


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' } // Ruta por defecto dentro de admin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }