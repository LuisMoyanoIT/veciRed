import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearComPageRoutingModule } from './crear-com-routing.module';

import { CrearComPage } from './crear-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearComPageRoutingModule
  ],
  declarations: [CrearComPage]
})
export class CrearComPageModule {}
