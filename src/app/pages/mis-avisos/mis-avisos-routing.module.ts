import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisAvisosPage } from './mis-avisos.page';

const routes: Routes = [
  {
    path: '',
    component: MisAvisosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisAvisosPageRoutingModule {}
