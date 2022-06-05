import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionarPage } from './gestionar.page';

const routes: Routes = [
  {
    path: '',
    component: GestionarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GestionarPageRoutingModule {}
