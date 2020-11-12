import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaisImgCardPage } from './detais-img-card.page';

describe('DetaisImgCardPage', () => {
  let component: DetaisImgCardPage;
  let fixture: ComponentFixture<DetaisImgCardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisImgCardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaisImgCardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
