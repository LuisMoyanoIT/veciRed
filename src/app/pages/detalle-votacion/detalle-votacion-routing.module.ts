import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleVotacionPage } from './detalle-votacion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleVotacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleVotacionPageRoutingModule {}
