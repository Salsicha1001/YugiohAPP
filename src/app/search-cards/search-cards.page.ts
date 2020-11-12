import { CardService } from './../Services/Cards/card.service';
import { TypeCard, RaceModel } from './../Config/typerace.config';
import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.page.html',
  styleUrls: ['./search-cards.page.css'],
})
export class SearchCardsPage implements OnInit {
  val: any = "monster";
  typemagic: any
  typeMonster: any
  raceMonster: any
  raceMagic: any
  constructor(private cardService: CardService,
    private navCtrl: NavController,
    public alertController: AlertController) { }
  yugiohGroup: TypeCard[] = [
    { name: "Monstro Efeito", value: "effect monster" },
    { name: "Monstro Efeito Virar", value: "flip effect monster" },
    { name: "Monstro Gêmeos", value: "gemini monster" },
    { name: "Monstro Nomal", value: "normal monster" },
    { name: "Monstro Regulador Normal", value: "normal tuner monster" },
    { name: "Monstro Pendulo Efeito", value: "pendulum effect monster" },
    { name: "Monstro Pendulo Virar", value: "pendulum flip effect monster" },
    { name: "Monstro Pendulo", value: "pendulum normal monster" },
    { name: "Monstro Pendulo Regulador", value: "pendulum tuner effect monster" },
    { name: "Monstro Ritual Efeito", value: "ritual effect monster" },
    { name: "Monstro Ritual", value: "ritual monster" },
    { name: "Monstro Tonn", value: "toon monster" },
    { name: "Monstro Regulador", value: "tuner monster" },
    { name: "Monstro Union", value: "union effect monster" },
    { name: "Monstro Fusão", value: "fusion monster" },
    { name: "Monstro Link", value: "link monster" },
    { name: "Monstro Pendulo Fusão", value: "pendulum effect fusion monster" },
    { name: "Monstro Sincro", value: "synchro monster" },
    { name: "Monstro Sincro Pendulo", value: "synchro pendulum effect monster" },
    { name: "Monstro XYZ", value: "xyz monster" },
    { name: "Monstro WYZ Pendulo", value: "xyz pendulum effect monster" }

  ]
  raceGroup: RaceModel[] = [
    { name: "Água", value: "aqua" },
    { name: "Besta", value: "beast" },
    { name: "Besta Guerreira", value: "beast-warrior" },
    { name: "Cyberso", value: "cyberse" },
    { name: "Dinossauro", value: "dinosaur" },
    { name: "Dragão", value: "dragon" },
    { name: "Fada", value: "fairy" },
    { name: "Dêmonio", value: "fiend" },
    { name: "Peixe", value: "fish" },
    { name: "Inseto", value: "insect" },
    { name: "Máquina", value: "machine" },
    { name: "Planta", value: "plant" },
    { name: "Psíquico", value: "psychic" },
    { name: "Piro", value: "pyro" },
    { name: "Reptil", value: "reptile" },
    { name: "Besta Divina", value: "divine-beast" },
    { name: "Pedra", value: "rock" },
    { name: "Serpente Marinha", value: "sea%20serpent" },
    { name: "Feiticeiro", value: "spellcaster" },
    { name: "Trovão", value: "thunder" },
    { name: "Guerreiro", value: "warrior" },
    { name: "Besta Alada", value: "winged beast" },

  ]
  spell: TypeCard[] = [
    { name: "Magia", value: 'spell card' },
    { name: "Armadilha", value: "trap card" }
  ]

  racemagic: RaceModel[] = [
    { name: "Normal", value: "normal" },
    { name: "Campo", value: "field" },
    { name: "Equipamento", value: "equip" },
    { name: "Continuo", value: "continuous" },
    { name: "Rápida", value: "quick-play" },
    { name: "Ritual", value: "ritual" },
  ]
  racetrap: RaceModel[] = [
    { name: "Normal", value: "normal" },
    { name: "Resposta", value: "counter" },
    { name: "Continuo", value: "continuous" },

  ]
  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.val = ev.detail.value
  }
  searchMagic() {
    console.log(this.typemagic, this.raceMagic)
    if (this.typemagic === undefined || this.typemagic === '') {
      this.presentAlert()
    } else {
      let a = {
        'magic': this.typemagic,
        'race': this.raceMagic
      }
      this.navCtrl.navigateForward("list-cards-search", {
        state: { any: a }
      })
    }
  }
  searchMonster() {
    console.log(this.typeMonster, this.raceMonster)

    if (this.typeMonster === void 0 && this.raceMonster === void 0 || this.typeMonster === '' && this.raceMonster === ''
      || this.typeMonster === void 0 && this.raceMonster === ""|| this.typeMonster === '' && this.raceMonster === void 0) {
      this.presentAlert()
    }
    else {
      let a = {
        'type': this.typeMonster,
        'race': this.raceMonster
      }
      this.navCtrl.navigateForward("list-cards-search", {
        state: { any: a }
      })
}

  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      message: 'Selecione uma das opções',
      buttons: ['OK']
    });

    await alert.present();
  }
}
