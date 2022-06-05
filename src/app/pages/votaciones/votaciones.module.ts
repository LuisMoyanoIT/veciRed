import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VotacionesPageRoutingModule } from './votaciones-routing.module';

import { VotacionesPage } from './votaciones.page';
import { HerramientasModule } from '../../herramientas/herramientas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VotacionesPageRoutingModule,
    HerramientasModule
  ],
  declarations: [VotacionesPage]
})
export class VotacionesPageModule {}
