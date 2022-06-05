import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAvisoPage } from './crear-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAvisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAvisoPageRoutingModule {}
