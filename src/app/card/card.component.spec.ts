import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { CardDetailComponent } from '../card-detail/card-detail.component';
import { SearchPipe } from '../search.pipe';
import { StickyDirective } from '../sticky.directive';
import { FormsModule } from '@angular/forms';


describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent,
      SearchPipe,
      CardDetailComponent,
    StickyDirective ],
    imports: [
      FormsModule
    ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
