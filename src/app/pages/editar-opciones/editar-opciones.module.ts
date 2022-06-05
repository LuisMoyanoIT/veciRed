import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarOpcionesPageRoutingModule } from './editar-opciones-routing.module';

import { EditarOpcionesPage } from './editar-opciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarOpcionesPageRoutingModule
  ],
  declarations: [EditarOpcionesPage]
})
export class EditarOpcionesPageModule {}
