import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardCountComponent } from './card-count/card-count.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardCountComponent,
    CardDetailComponent,
    HeaderComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
