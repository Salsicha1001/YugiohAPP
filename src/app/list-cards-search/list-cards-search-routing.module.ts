import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListCardsSearchPage } from './list-cards-search.page';

const routes: Routes = [
  {
    path: '',
    component: ListCardsSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListCardsSearchPageRoutingModule {}
