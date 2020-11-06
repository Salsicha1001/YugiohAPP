import { StorageService } from './../Services/Storage.service';
import { AuthService } from './../Services/Authorization/Auth.service';
import { CredDto } from './../Model/DTO/CredDto.model';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.css'],
})
export class LoginPage implements OnInit {

  cred: CredDto = {
    email: '', password: ''
  }

  constructor(private authService: AuthService, public navCtrl: NavController,
    public menu: MenuController, public alertController: AlertController,
    public loadingCtrl: LoadingController, private storageService: StorageService) { }

  ngOnInit() {
  }

  async login() {
    let loader = await this.presentLoading();
    this.authService.authenticate(this.cred).subscribe(async (u) => {
      if (u.body === "401") {
        const alert = await this.alertController.create({
          header: 'Erro',
          message: 'Credenciais invalidas',
          buttons: ['OK']
        });
        await alert.present();
        loader.dismiss()
      } else {
        this.authService.successLogin(u.body);
        this.navCtrl.navigateForward('home');
        loader.dismiss();
      }
    })
  }


  async presentLoading() {
    let loader = await this.loadingCtrl.create({
      message: "Aguarde..."
    });
    await loader.present();
    return loader;
  }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ionViewDidLeave() {
    this.menu.enable(true);
  }
  ionViewDidEnter() {
    this.authService.refreshToken()
      .subscribe(response => {
        this.authService.successLogin(response.headers.get('Authorization'));
        this.navCtrl.navigateForward("home");
      },
        error => {
          console.log(error.status);
          this.storageService.setLocalUser(null);

        });
  }
}
