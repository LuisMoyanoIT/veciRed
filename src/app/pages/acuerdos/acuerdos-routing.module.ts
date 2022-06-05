import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcuerdosPage } from './acuerdos.page';

const routes: Routes = [
  {
    path: '',
    component: AcuerdosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AcuerdosPageRoutingModule {}
