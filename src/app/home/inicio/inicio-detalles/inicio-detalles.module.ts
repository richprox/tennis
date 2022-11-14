import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioDetallesPageRoutingModule } from './inicio-detalles-routing.module';

import { InicioDetallesPage } from './inicio-detalles.page';
import {SwiperModule} from "swiper/angular";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        InicioDetallesPageRoutingModule,
        SwiperModule
    ],
  declarations: [InicioDetallesPage]
})
export class InicioDetallesPageModule {}
