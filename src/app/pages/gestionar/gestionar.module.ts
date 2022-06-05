import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GestionarPageRoutingModule } from './gestionar-routing.module';

import { GestionarPage } from './gestionar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GestionarPageRoutingModule
  ],
  declarations: [GestionarPage]
})
export class GestionarPageModule {}
