import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from '../card/card.component';
import { Card } from '../card/card.component';
import { CardDetailComponent } from './card-detail.component';
import { StickyDirective } from '../sticky.directive';
import { SearchPipe } from '../search.pipe';
import { FormsModule } from '@angular/forms';

describe('CardDetailComponent', () => {
  let component: CardDetailComponent;
  let fixture: ComponentFixture<CardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailComponent,
      CardComponent,
      StickyDirective,
      SearchPipe ],
    imports: [
      FormsModule,
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
