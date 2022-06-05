import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAcuerdoPageRoutingModule } from './crear-acuerdo-routing.module';

import { CrearAcuerdoPage } from './crear-acuerdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAcuerdoPageRoutingModule
  ],
  declarations: [CrearAcuerdoPage]
})
export class CrearAcuerdoPageModule {}
