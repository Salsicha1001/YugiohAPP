import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetaisCardsPage } from './detais-cards.page';

const routes: Routes = [
  {
    path: '',
    component: DetaisCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetaisCardsPageRoutingModule {}
