import { async } from '@angular/core/testing';
import { UserService } from './../Services/User/user.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  card = []
  page = 0
  notCard: boolean = false;
  constructor(private userService: UserService,
    private loadingCtrl: LoadingController,
    private navCtrl: NavController) { }

  async ngOnInit() {
    let loader = await this.presentLoading();
    this.find();
    setTimeout(() => {
      loader.dismiss()
      this.notCard = true
    }, 3000)


  }

  find() {
    while (this.card.length > 0) {
      this.card.pop()
    }
    this.userService.getCardUser().subscribe((u) => {
      for (let key in u) {
        this.card.push(u[key]);
      }
    })
  }
  doRefresh(event) {
    this.notCard = false
    this.find();

    setTimeout(() => {
      event.target.complete();
      this.notCard = true
    }, 2000);
   
  }

  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Aguarde..."
    });
    await loader.present();
    return loader;
  }
  onClick(c) {
    this.find()
    c.card["check"] = true
    this.navCtrl.navigateForward("detais-cards", { state: { c: c } })
  }


}
