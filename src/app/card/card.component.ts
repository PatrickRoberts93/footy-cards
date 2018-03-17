import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

export interface Card {
  id: number;
  name: string;
  team: string;
  position: string;
  year: number;
  imageFront: string;
  imageBack: string;
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [

    trigger('fadeIn', [
      transition('* => *', [

        query(':enter', style({ opacity: 0 }), {optional: true}),

        query(':enter', stagger('75ms', [
          animate('300ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-15%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(10px)',  offset: 0.3}),
            style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
          ]))]), {optional: true})
      ])
    ])

  ]
})

export class CardComponent implements OnInit {
  @Input()
  cards: Card[];
  constructor() {}
  ngOnInit() {
    this.cards = [{
      id: 1,
      name: 'Hazem El Masri',
      team: 'Bulldogs',
      position: 'Wing',
      year: 2004,
        imageFront: 'http://www.diggaztradingcards.com.au/wp-content/uploads/2015/07/img0121.jpg',
        imageBack: 'https://cdn.shopify.com/s/files/1/0184/9092/products/2015_Elite_Bulldogs_1024x1024.jpg?v=1438878720',


    }, {
      id: 2,
      name: 'Terry Lamb',
      team: 'Bulldogs',
      position: 'Five-eighth',
      year: 1988,
        imageFront: 'https://i.ebayimg.com/thumbs/images/g/8PIAAOSwXxhaBqkx/s-l225.jpg',
        imageBack: 'https://i.ebayimg.com/images/g/0moAAOSw~HBaBqm~/s-l500.jpg',
    },
    {
     id: 3,
     name: 'Cameron Smith',
     team: 'Storm',
     position: 'Hooker',
     year: 2016,
       imageFront: '../../assets/images/cards/camsmith_front.png',
       imageBack: '../../assets/images/cards/camsmith_back.png',
   }
 ]
  }
}
