import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearAvisoPageRoutingModule } from './crear-aviso-routing.module';

import { CrearAvisoPage } from './crear-aviso.page';
import { HerramientasModule } from 'src/app/herramientas/herramientas.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearAvisoPageRoutingModule,
    HerramientasModule
  ],
  declarations: [CrearAvisoPage]
})
export class CrearAvisoPageModule {}
