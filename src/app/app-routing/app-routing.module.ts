import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// VIEWS
import { CardComponent } from '../card/card.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
    { path: '', component: CardComponent, data: { state: 'card' }  },
    { path: 'about', component: AboutComponent, data: { state: 'about' } },
    { path: 'contact', component: ContactComponent, data: { state: 'contact' } }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
