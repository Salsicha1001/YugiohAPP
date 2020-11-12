import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detais-img-card',
  templateUrl: './detais-img-card.page.html',
  styleUrls: ['./detais-img-card.page.scss'],
})
export class DetaisImgCardPage implements OnInit {
  img: string
  id:any
  @Input() i;
  imgs =[]
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    this.imgs= this.i
    console.log(this.imgs)
    this.rodadeImg()
  }
  dimiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });

  }

  rodadeImg() {
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
  ngOnDestroy() {
    clearInterval(this.id);
  }
}
