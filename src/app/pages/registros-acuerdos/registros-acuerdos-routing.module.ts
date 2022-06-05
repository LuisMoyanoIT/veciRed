import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrosAcuerdosPage } from './registros-acuerdos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrosAcuerdosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrosAcuerdosPageRoutingModule {}
