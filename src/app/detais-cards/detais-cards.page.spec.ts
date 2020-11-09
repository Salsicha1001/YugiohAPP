import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetaisCardsPage } from './detais-cards.page';

describe('DetaisCardsPage', () => {
  let component: DetaisCardsPage;
  let fixture: ComponentFixture<DetaisCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaisCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetaisCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
