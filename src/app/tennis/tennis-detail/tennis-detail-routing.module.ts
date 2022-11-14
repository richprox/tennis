import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TennisDetailPage } from './tennis-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TennisDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TennisDetailPageRoutingModule {}
