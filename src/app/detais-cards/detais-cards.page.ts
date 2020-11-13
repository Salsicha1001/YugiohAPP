import { DetaisImgCardPage } from './../detais-img-card/detais-img-card.page';
import { UserModel } from './../Model/User.model';
import { UserService } from './../Services/User/user.service';
import { Card } from './../Model/Card.model';
import { async } from '@angular/core/testing';
import { AlertController, LoadingController, ModalController, NavController, NavParams } from '@ionic/angular';
import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detais-cards',
  templateUrl: './detais-cards.page.html',
  styleUrls: ['./detais-cards.page.css'],
})
export class DetaisCardsPage implements OnInit {
  card: any
  img: string
  imgs = []
  id: any
  user: UserModel
  cardFav: any

  constructor(private navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController,
    private userService: UserService,
    private loadingCtrl: LoadingController,
    public modalController: ModalController) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state === undefined) {
      this.navCtrl.navigateBack('search-cards');
    } else {
      if (nav.extras.state.c.user_email) {
        this.card = nav.extras.state.c.card;
        this.cardFav = nav.extras.state.c;
      } else {
        this.card = nav.extras.state.c;
      }
    }
    for (let key in this.card.card_images) {
      this.imgs.push(this.card.card_images[key].image_url);
    };
    this.verify();
    this.rodade();

  }


  rodade() {
    this.img = this.imgs[0];
    let key = 0;
    if (this.imgs.length > 1) {
      this.id = setInterval(() => {
        if (key === this.imgs.length - 1) {
          key = -1;
        }
        key += 1;
        this.img = this.imgs[key];

      }, 6700);
    }
  }
  verify() {
    this.userService.getCardUser().subscribe((g) => {
      for (let key in g) {
        if (g[key].card.id == this.card.id) {
          this.card["check"] = true;
          this.cardFav = g[key];
        };
      };
    });
  }


  async deleteFav() {
    let loader = await this.presentLoading();
    this.userService.removeCard(this.cardFav.id).subscribe((u) => {
      if (u == true) {
        delete this.card["check"];
        console.log(this.card);
        this.cardFav = "";
        loader.dismiss();
      }
    })



  }
  ngOnDestroy() {
    clearInterval(this.id);
  }
  favorit(card) {

    let c: Card = {
      name: card.name,
      name_en: card.name_en,
      card_images: card.card_images,
      id: card.id,
      atk: card.atk,
      def: card.def,
      desc: card.desc,
      level: card.level,
      type: card.type,
      race: card.race,
      attribute: card.attribute,
      archetype: card.archetype,
      linkmarkers: card.linkmarkers,
      linkval: card.linkval,
      ban: card.banlist_info
    };
    this.userService.getUser().subscribe(async (u) => {
      this.user = u as any;
      let save = {
        'user_email': this.user.email,
        'card': c
      };
      this.userService.saveCardUser(save).subscribe((s) => {
        console.log(s);
        this.navCtrl.navigateRoot('favorites');
      });
    });


  }
  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Removendo dos Favoritos"
    });
    await loader.present();
    return loader;
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DetaisImgCardPage,
      cssClass: 'detais-img-card',
      swipeToClose: true,
      componentProps: {
        'i':this.imgs
      }
    });
    return await modal.present();
  }
  findArchetype(c) {
    let a = {
      'attribute': c,
      'att':true
    }
    this.navCtrl.navigateRoot('list-cards-search', {
      state:{any:a}
    })
  }
}
