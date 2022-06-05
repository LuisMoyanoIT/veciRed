import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleVotacionPageRoutingModule } from './detalle-votacion-routing.module';

import { DetalleVotacionPage } from './detalle-votacion.page';
import { HerramientasModule } from '../../herramientas/herramientas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleVotacionPageRoutingModule,
    HerramientasModule
  ],
  declarations: [DetalleVotacionPage]
})
export class DetalleVotacionPageModule {}
