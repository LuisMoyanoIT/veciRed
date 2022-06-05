import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscarComPage } from './buscar-com.page';

const routes: Routes = [
  {
    path: '',
    component: BuscarComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscarComPageRoutingModule {}
