import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AcuerdosPageRoutingModule } from './acuerdos-routing.module';

import { AcuerdosPage } from './acuerdos.page';
import { HerramientasModule } from '../../herramientas/herramientas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AcuerdosPageRoutingModule,
    HerramientasModule
  ],
  declarations: [AcuerdosPage]
})
export class AcuerdosPageModule {}
