import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {ReservasPageRoutingModule} from './reservas-routing.module';
import {ReservasComponent} from './reservas.component';



const routes: Routes = [
  {
    path: '',
    component: ReservasComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReservasPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ReservasComponent]
})
export class ReservasPageModule {}
