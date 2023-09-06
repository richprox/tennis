import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { AdminPage } from './admin.page';
import {AdminRoutingModule} from './admin-routing.module';
import {FormsModule} from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        AdminRoutingModule,
        FormsModule
    ],
  declarations: [AdminPage]
})
export class AdminPageModule {}
