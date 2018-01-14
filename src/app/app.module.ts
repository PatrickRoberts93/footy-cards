import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardCountComponent } from './card-count/card-count.component';
import { CardDetailComponent } from './card-detail/card-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardCountComponent,
    CardDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
