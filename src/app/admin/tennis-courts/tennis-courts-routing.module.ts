import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TennisCourtsComponent } from './tennis-courts.component';

const routes: Routes = [
  { path: '', component: TennisCourtsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TennisCourtsRoutingModule {}
