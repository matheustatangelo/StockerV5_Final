import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientsComponent} from "./clients/clients.component";
import {ProductsComponent} from "./products/products.component";
import {UsersComponent} from "./users/users.component";
import {SuppliersComponent} from "./suppliers/suppliers.component";
import {ClientListComponent} from "./client-list/client-list.component";

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'clients',
    component: ClientsComponent,

  },
  {
    path:'products',
    component: ProductsComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'suppliers',
    component: SuppliersComponent
  },
  {
    path: 'client-list',
    component: ClientListComponent
  }
   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
