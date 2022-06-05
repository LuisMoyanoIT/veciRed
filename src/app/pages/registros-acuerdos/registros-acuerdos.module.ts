import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrosAcuerdosPageRoutingModule } from './registros-acuerdos-routing.module';

import { RegistrosAcuerdosPage } from './registros-acuerdos.page';
import { HerramientasModule } from '../../herramientas/herramientas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrosAcuerdosPageRoutingModule,
    HerramientasModule
  ],
  declarations: [RegistrosAcuerdosPage]
})
export class RegistrosAcuerdosPageModule {}
