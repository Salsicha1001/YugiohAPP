import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchCardsPage } from './search-cards.page';

const routes: Routes = [
  {
    path: '',
    component: SearchCardsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchCardsPageRoutingModule {}
