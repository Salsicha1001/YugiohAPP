import { AlertController, NavController, NavParams } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-detais-cards',
  templateUrl: './detais-cards.page.html',
  styleUrls: ['./detais-cards.page.css'],
})
export class DetaisCardsPage implements OnInit {
  card:any
  constructor( private navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
    const nav = this.router.getCurrentNavigation();
    if (nav.extras.state === undefined) {
      this.navCtrl.navigateBack('search-cards');
    } else {
      this.card = nav.extras.state.c;
    }
  console.log(this.card)
  }
  
}
