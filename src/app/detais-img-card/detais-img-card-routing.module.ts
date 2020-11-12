import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaisImgCardPage } from './detais-img-card.page';

const routes: Routes = [
  {
    path: '',
    component: DetaisImgCardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaisImgCardPageRoutingModule {}
