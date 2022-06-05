import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscarComPageRoutingModule } from './buscar-com-routing.module';

import { BuscarComPage } from './buscar-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscarComPageRoutingModule
  ],
  declarations: [BuscarComPage]
})
export class BuscarComPageModule {}
