import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VotacionesPage } from './votaciones.page';

const routes: Routes = [
  {
    path: '',
    component: VotacionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VotacionesPageRoutingModule {}
