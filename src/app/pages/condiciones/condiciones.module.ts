import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CondicionesPageRoutingModule } from './condiciones-routing.module';

import { CondicionesPage } from './condiciones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CondicionesPageRoutingModule
  ],
  declarations: [CondicionesPage]
})
export class CondicionesPageModule {}
