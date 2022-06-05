import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearComPage } from './crear-com.page';

const routes: Routes = [
  {
    path: '',
    component: CrearComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearComPageRoutingModule {}
