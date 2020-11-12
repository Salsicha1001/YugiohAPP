import { async } from '@angular/core/testing';
import { CardService } from './../Services/Cards/card.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-list-cards-search',
  templateUrl: './list-cards-search.page.html',
  styleUrls: ['./list-cards-search.page.css'],
})
export class ListCardsSearchPage implements OnInit {
  search: any
  cards = []
  page = 0
  meta = []
  constructor(private navParams: NavParams,
    private route: Router,
    public navCtrl: NavController,
    private cardService: CardService,
    public loadingCtrl: LoadingController) { }

  async ngOnInit() {
    const nav = this.route.getCurrentNavigation()
 
    if (nav.extras.state === undefined) {

      this.navCtrl.navigateBack('search-cards')

    }

    else {
      this.search = nav.extras.state.any
      let loader = await this.presentLoading();
      this.find();
      loader.dismiss()
    }

  }


  find() {


      if (this.search.magic === "spell card" && this.search.race === undefined) {
        this.cardService.findAllSpell(this.page, 18).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      } else if (this.search.magic === "trap card" && this.search.race === undefined) {
        this.cardService.findAllTrap(this.page, 18).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      } else if (this.search.magic === "trap card" && this.search.race != undefined) {
        this.cardService.findAllTrapRace(this.page, 18, this.search.race).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      } else if (this.search.magic === "spell card" && this.search.race != undefined) {
        this.cardService.findAllSpelRace(this.page, 18, this.search.race).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      }
      else if (this.search.type != undefined && this.search.race == undefined || this.search.race == "") {
        this.cardService.findAllMonster(this.page, 18, this.search.type).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      } else if (this.search.type === undefined ||this.search.type ===  "" && this.search.race != undefined || this.search.race != "") {
        this.cardService.findAllMonsterRace(this.page, 18, this.search.race).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      } else {
        this.cardService.findAllMonsterTypeRace(this.page, 18, this.search.type, this.search.race).subscribe((u) => {
          let start = this.cards.length;
          this.cards = this.cards.concat(u['data'])
          this.meta = this.meta.concat(u['meta'])
          let end = this.cards.length - 1;

        })
      }
    
  }

  onClick(c) {
    this.navCtrl.navigateForward("detais-cards", { state: { c: c } })
  }
  doInfinite(event) {

    setTimeout(() => {
      this.page += 18;
      this.find();
      event.target.complete();
      if (this.cards.length == this.meta[0].total_rows) {
        event.target.disabled = true
      }
    }, 1000);
  }
  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Aguarde..."
    });
    await loader.present();
    return loader;
  }
}
