import { CardService } from './../Services/Cards/card.service';
import { Card } from './../Model/Card.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.page.html',
  styleUrls: ['./list-cards.page.css'],
})
export class ListCardsPage implements OnInit {
  cards = []
  page = 0
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  constructor(private cardService: CardService,
    public loadingCtrl: LoadingController,
  private navCtrl:NavController) { }

  ngOnInit() {
    this.load()
  }
 async load() {
 
   this.cardService.findAll(this.page, 10).subscribe((u: any) => {
    let start = this.cards.length;
     this.cards = this.cards.concat(u['data'])
      console.log(this.cards)
     let end = this.cards.length - 1;
     console.log(this.page)

    })
  }

  onClick(c) {
    this.navCtrl.navigateForward("detais-cards", {state:{c:c}})
  }

  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Carregando as cartas"
    });
    await loader.present();
    return loader;
  }
  doInfinite(event) {

    setTimeout(() => {
      this.page+=10;
      this.load();
      event.target.complete();
    }, 500);
  }
}

