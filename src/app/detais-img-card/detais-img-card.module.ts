import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetaisImgCardPageRoutingModule } from './detais-img-card-routing.module';

import { DetaisImgCardPage } from './detais-img-card.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetaisImgCardPageRoutingModule
  ],
  declarations: [DetaisImgCardPage]
})
export class DetaisImgCardPageModule {}
