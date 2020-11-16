import { UserModel } from './../Model/User.model';
import { UserService } from './../Services/User/user.service';

import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.css'],
})
export class ProfilePage implements OnInit {
  user:UserModel
  constructor(private userService: UserService, public loadingCtrl: LoadingController,
  private navCtrl:NavController)
   { }

  async ngOnInit() {
    let loader = await this.presentLoading();
    this.userService.getUser().subscribe(async( u) => {
      this.user = u as any
      console.log(this.user)
      loader.dismiss()
    })
  }
  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Aguarde..."
    });
    await loader.present();
    return loader;
  }
  

  logout() {
    this.userService.logout()
    this.navCtrl.navigateRoot('/')
    
  }
}
