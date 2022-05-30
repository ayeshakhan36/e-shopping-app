import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollectionsComponent } from './collections/collections.component';
import { HomeComponent } from './home/home.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { SpecialComponent } from './special/special.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'collection', component: CollectionsComponent},
  {path: 'add-to-cart', component: AddToCartComponent},
  {path: 'special', component: SpecialComponent}
  
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
