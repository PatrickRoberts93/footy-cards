import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// VIEWS
import { CardComponent } from '../card/card.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';


const routes: Routes = [
        {
            path: '',
            component: CardComponent,
        },
        {
            path: 'about',
            component: AboutComponent,
        },
        {
            path: 'contact',
            component: ContactComponent,
        },
    ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ]
  declarations: []
})
export class AppRoutingModule { }
