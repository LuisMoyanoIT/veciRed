import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearAcuerdoPage } from './crear-acuerdo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearAcuerdoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearAcuerdoPageRoutingModule {}
