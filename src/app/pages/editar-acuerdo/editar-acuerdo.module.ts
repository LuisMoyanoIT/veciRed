import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarAcuerdoPageRoutingModule } from './editar-acuerdo-routing.module';

import { EditarAcuerdoPage } from './editar-acuerdo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarAcuerdoPageRoutingModule
  ],
  declarations: [EditarAcuerdoPage]
})
export class EditarAcuerdoPageModule {}
