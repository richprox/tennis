import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisDetailPageRoutingModule } from './tennis-detail-routing.module';

import { TennisDetailPage } from './tennis-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisDetailPageRoutingModule
  ],
  declarations: [TennisDetailPage]
})
export class TennisDetailPageModule {}
