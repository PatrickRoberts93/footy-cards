import { Component, OnInit, Input } from '@angular/core';
import { Card, CardComponent } from '../card/card.component'

@Component({
  selector: 'app-card-count',
  templateUrl: './card-count.component.html',
  styleUrls: ['./card-count.component.scss']
})
export class CardCountComponent implements OnInit {
  @Input()
  items: Card[];
  constructor() { }

  ngOnInit() {
  }

}
