import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../card/card.component';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.scss']
})
export class CardDetailComponent implements OnInit {
  @Input()
  detail: Card;

  flip: boolean = true;
  toggleCard() {
    this.flip = !this.flip
  }

  constructor() { }

  ngOnInit() {
  }

}
