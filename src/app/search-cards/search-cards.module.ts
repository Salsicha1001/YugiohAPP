import { ListCardsPageModule } from './../list-cards/list-cards.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCardsPageRoutingModule } from './search-cards-routing.module';

import { SearchCardsPage } from './search-cards.page';
import { ListCardsPage } from '../list-cards/list-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCardsPageRoutingModule,
  ],
  declarations: [SearchCardsPage,
    ListCardsPage
  ],

})
export class SearchCardsPageModule {}
