import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = environment.firebaseConfig;
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardCountComponent } from './card-count/card-count.component';
import { CardDetailComponent } from './card-detail/card-detail.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FilterBarComponent } from './filter-bar/filter-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardCountComponent,
    CardDetailComponent,
    HeaderComponent,
    NavbarComponent,
    AboutComponent,
    ContactComponent,
    FilterBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
