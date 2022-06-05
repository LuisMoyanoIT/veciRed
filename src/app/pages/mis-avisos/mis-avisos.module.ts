import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisAvisosPageRoutingModule } from './mis-avisos-routing.module';

import { MisAvisosPage } from './mis-avisos.page';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisAvisosPageRoutingModule,
    PipesModule
  ],
  declarations: [MisAvisosPage]
})
export class MisAvisosPageModule {}
