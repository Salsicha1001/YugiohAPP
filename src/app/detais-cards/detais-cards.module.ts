import { DetaisImgCardPage } from './../detais-img-card/detais-img-card.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule, NavParams } from '@ionic/angular';

import { DetaisCardsPageRoutingModule } from './detais-cards-routing.module';

import { DetaisCardsPage } from './detais-cards.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaisCardsPageRoutingModule
  ],
  declarations: [DetaisCardsPage,
  DetaisImgCardPage],
  providers: [
    NavParams
  ]
})
export class DetaisCardsPageModule {}
