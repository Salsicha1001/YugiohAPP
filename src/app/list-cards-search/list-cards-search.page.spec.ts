import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListCardsSearchPage } from './list-cards-search.page';

describe('ListCardsSearchPage', () => {
  let component: ListCardsSearchPage;
  let fixture: ComponentFixture<ListCardsSearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCardsSearchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListCardsSearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
