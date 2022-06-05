import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarComPageRoutingModule } from './editar-com-routing.module';

import { EditarComPage } from './editar-com.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarComPageRoutingModule
  ],
  declarations: [EditarComPage]
})
export class EditarComPageModule {}
