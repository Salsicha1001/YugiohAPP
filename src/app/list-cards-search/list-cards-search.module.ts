import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { ListCardsSearchPageRoutingModule } from './list-cards-search-routing.module';

import { ListCardsSearchPage } from './list-cards-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListCardsSearchPageRoutingModule
  ],
  declarations: [ListCardsSearchPage],
  providers: [
    NavParams
  ]
})
export class ListCardsSearchPageModule {}
