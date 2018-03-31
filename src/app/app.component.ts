import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Input } from '@angular/core/src/metadata/directives';
import { CardComponent } from './card/card.component';
import { routerTransition } from './animations/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routerTransition]

})
export class AppComponent implements OnInit {
  ngOnInit() {
  }
  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
