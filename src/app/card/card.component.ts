import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Output } from '@angular/core/src/metadata/directives';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface Card {
  playerID: number;
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

  cardsCollection: AngularFirestoreCollection<Card>;
  cards: Observable<Card[]>;

  constructor(private afs: AngularFirestore) {}

  ngOnInit() {
    this.cardsCollection = this.afs.collection('cards')
    this.cards = this.cardsCollection.valueChanges()
  }

}
