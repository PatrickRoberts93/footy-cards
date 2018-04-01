import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/auth.guard'

// VIEWS
import { CardComponent } from '../card/card.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { AddCardComponent } from '../add-card/add-card.component';


const routes: Routes = [
    { path: '', component: CardComponent, data: { state: 'card' }  },
    { path: 'about', component: AboutComponent, data: { state: 'about' } },
    { path: 'contact', component: ContactComponent, data: { state: 'contact' } },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard], data: { state: 'dashboard' } },
    { path: 'add-card', component: AddCardComponent, canActivate: [AuthGuard], data: { state: 'add-card' } }
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
