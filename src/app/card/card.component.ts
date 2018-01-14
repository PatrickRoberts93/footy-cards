import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

export interface Card {
  id: number;
  title: string;
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
  @Input()
  cards: Card[];
  constructor() {}
  ngOnInit() {
    this.cards = [{
      id: 1,
      title: 'Hasim El Masri',
      year: 2004,
        imageFront: 'http://www.diggaztradingcards.com.au/wp-content/uploads/2015/07/img0121.jpg',
        imageBack: 'https://theholybootsfootballemporium.files.wordpress.com/2013/06/royce-hart-sharpened.jpg',  
      
    
    }, {
      id: 2,
      title: 'Terry Lamb',
      year: 1988,
        imageFront: 'https://i.ebayimg.com/thumbs/images/g/8PIAAOSwXxhaBqkx/s-l225.jpg',
        imageBack: 'http://michaelpanckridge.com.au/wp-content/uploads/2016/09/1979-scanlens.jpg',
    }]
  }
}
