import { StorageService } from './Services/Storage.service';
import { UserService } from './Services/User/user.service';
import { CardService } from './Services/Cards/card.service';

import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  pages: Array<{ title: string; component: string; }>;
  tamanho: any
  time: any
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private userService: UserService,
    private strorageService: StorageService
  ) {
    this.initializeApp();
    this.sideMenu();
  }
  ngOnInit() {
    this.favoritesTam();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.pages = [
      { title: "Cartas", component: "search-cards" },
      { title: "Perfil", component: "profile" },
      { title: "Sair", component: "login" }


    ];
  }

  favoritesTam() {
    console.log(this.strorageService.getLocalUser().email)
    this.time = setInterval(() => {
      if (this.strorageService.getLocalUser().email != null) {
        this.userService.getCardUser().subscribe((u: any[]) => {
          if (u.length > 0) {
            this.tamanho = u.length;
          }
        })
      }
    }, 1000)
  }

  ButtonClick(s) {
    if ("Sair" === s) {
      this.userService.logout();
      clearInterval(this.time)

    }

  }
}
