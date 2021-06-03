import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { BuyListComponent } from './buy-list/buy-list.component';
import { BuyCreateComponent } from './buy-create/buy-create.component';
import { BuyUpdateComponent } from './buy-update/buy-update.component';

const routes: Routes = [
  { path: 'buyList', component: BuyListComponent },
  { path: 'buyList/buyCreate', component: BuyCreateComponent },
  { path: 'buyList/buyUpdate/:id', component: BuyUpdateComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
