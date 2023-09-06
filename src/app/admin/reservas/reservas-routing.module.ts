import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReservasComponent} from './reservas.component';




const routes: Routes = [
  {
    path: '',
    component: ReservasComponent,
  },
  // Agrega más rutas específicas para Reservas si es necesario
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReservasPageRoutingModule {}
