import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchCardsPage } from './search-cards.page';

describe('SearchCardsPage', () => {
  let component: SearchCardsPage;
  let fixture: ComponentFixture<SearchCardsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCardsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCardsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
