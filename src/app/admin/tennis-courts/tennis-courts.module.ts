import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { TennisCourtsComponent } from './tennis-courts.component';
import {TennisCourtsRoutingModule} from './tennis-courts-routing.module';
import {IonicModule} from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    TennisCourtsRoutingModule,
    IonicModule,
  ],
  declarations: [TennisCourtsComponent]
})
export class TennisCourtsModule {}
