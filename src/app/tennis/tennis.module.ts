import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TennisPageRoutingModule } from './tennis-routing.module';

import { TennisPage } from './tennis.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TennisPageRoutingModule
  ],
  exports: [
    TennisPage
  ],
  declarations: [TennisPage]
})
export class TennisPageModule {}
