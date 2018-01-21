import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardCountComponent } from './card-count/card-count.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardCountComponent,
    CardDetailComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
