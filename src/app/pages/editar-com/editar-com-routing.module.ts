import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarComPage } from './editar-com.page';

const routes: Routes = [
  {
    path: '',
    component: EditarComPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarComPageRoutingModule {}
