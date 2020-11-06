import { TypeCard, RaceModel } from './../Config/typerace.config';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-cards',
  templateUrl: './search-cards.page.html',
  styleUrls: ['./search-cards.page.scss'],
})
export class SearchCardsPage implements OnInit {
  val: any
  constructor() { }
  yugiohGroup: TypeCard[] = [
    { name: "Monstro Efeito", value: "effect monster" },
    { name: "Monstro Efeito Virar", value: "flip effect monster" },
    { name: "Monstro Gêmeos", value: "gemini%20monster" },
    { name: "Monstro Nomal", value: "normal%20monster" },
    { name: "Monstro Regulador Normal", value: "normal%20tuner%20monster" },
    { name: "Monstro Pendulo Efeito", value: "pendulum%20effect%20monster" },
    { name: "Monstro Pendulo Virar", value: "pendulum%20flip%20effect%20monster" },
    { name: "Monstro Pendulo", value: "pendulum%20normal%20monster" },
    { name: "Monstro Pendulo Regulador", value: "pendulum%20tuner%20effect%20monster" },
    { name: "Monstro Ritual Efeito", value: "ritual%20effect%20monster" },
    { name: "Monstro Ritual", value: "ritual%20monster" },
    { name: "Monstro Tonn", value: "toon%20monster" },
    { name: "Monstro Regulador", value: "tuner%20monster" },
    { name: "Monstro Union", value: "union%20effect%20monster" },
    { name: "Monstro Fusão", value: "fusion%20monster" },
    { name: "Monstro Link", value: "link%20monster" },
    { name: "Monstro Pendulo Fusão", value: "pendulum%20effect%20fusion%20monster" },
    { name: "Monstro Sincro", value: "synchro%20monster" },
    { name: "Monstro Sincro Pendulo", value: "synchro%20pendulum%20effect%20monster" },
    { name: "Monstro XYZ", value: "xyz%20monster" },
    { name: "Monstro WYZ Pendulo", value: "xyz%20pendulum%20effect%20monster" }

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
    { name: "Besta Alada", value: "winged%20beast" },

  ]
  ngOnInit() {
  }
  segmentChanged(ev: any) {
    this.val = ev.detail.value
    console.log(this.val)
  }

}
