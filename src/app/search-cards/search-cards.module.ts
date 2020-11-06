import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchCardsPageRoutingModule } from './search-cards-routing.module';

import { SearchCardsPage } from './search-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchCardsPageRoutingModule
  ],
  declarations: [SearchCardsPage]
})
export class SearchCardsPageModule {}
