
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,

  ) {
    this.initializeApp();
    this.sideMenu();
  }
  ngOnInit() {

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.pages = [
      { title: "Perfil", component: "profile" },
      { title: "Cartas", component: "search-cards" },
      {title:"Favoritos", component:"favorites"}
   
    ];
  }

  ButtonClick(s) {
    if ("Logout" === s) {
 //     this.authService.logout();
    }

  }
}
