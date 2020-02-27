import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GrupinhosPage } from './grupinhos.page';

const routes: Routes = [
  {
    path: '',
    component: GrupinhosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GrupinhosPageRoutingModule {}
