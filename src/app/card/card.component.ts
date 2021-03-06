import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { environment } from '../../environments/environment';

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
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {

  queryString: string = '';

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
        imageFront: environment.imgSrc + '/assets/images/cards/hazemelmasri_front.jpg',
        imageBack: environment.imgSrc + '/assets/images/cards/card_back.jpg',


    }, {
      id: 2,
      name: 'Terry Lamb',
      team: 'Bulldogs',
      position: 'Five-eighth',
      year: 1988,
        imageFront: environment.imgSrc + '/assets/images/cards/terrylamb_front.jpg',
        imageBack: environment.imgSrc + '/assets/images/cards/terrylamb_back.jpg',
    },
    {
     id: 3,
     name: 'Cameron Smith',
     team: 'Storm',
     position: 'Hooker',
     year: 2016,
       imageFront: environment.imgSrc + '/assets/images/cards/camsmith_front.jpg',
       imageBack: environment.imgSrc + '/assets/images/cards/camsmith_back.jpg',
   },
   {
    id: 4,
    name: 'Jason Alchin',
    team: 'Bulldogs',
    position: 'Fullback',
    year: 1990,
      imageFront: environment.imgSrc + '/assets/images/cards/jasonalchin_front.jpg',
      imageBack: environment.imgSrc + '/assets/images/cards/jasonalchin_back.jpg',
  },
  {
    id: 4,
    name: 'Terry Lamb',
    team: 'Bulldogs',
    position: 'Five-eigth',
    year: 1990,
      imageFront: environment.imgSrc + '/assets/images/cards/terrylamb90_front.jpg',
      imageBack: environment.imgSrc + '/assets/images/cards/terrylamb90_back.jpg',
  },
  {
    id: 4,
    name: 'Paul Langmack',
    team: 'Bulldogs',
    position: 'Lock',
    year: 1990,
      imageFront: environment.imgSrc + '/assets/images/cards/paullangmack90_front.jpg',
      imageBack: environment.imgSrc + '/assets/images/cards/paullangmack90_back.jpg',
  }
 ]
  }
}
