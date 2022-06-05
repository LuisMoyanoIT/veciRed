import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarAvisoPage } from './editar-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: EditarAvisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarAvisoPageRoutingModule {}
