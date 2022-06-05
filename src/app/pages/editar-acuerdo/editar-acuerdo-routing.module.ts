import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAcuerdoPage } from './editar-acuerdo.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAcuerdoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAcuerdoPageRoutingModule {}
