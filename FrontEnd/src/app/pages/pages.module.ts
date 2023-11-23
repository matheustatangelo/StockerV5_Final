import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {RoutingModule} from "./routing.module";
import {SharedModule} from "../shared/shared.module";
import { ClientsComponent } from './clients/clients.component';
import { ProductsComponent } from './products/products.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { UsersComponent } from './users/users.component';
import { ClientListComponent } from './client-list/client-list.component';



@NgModule({
  declarations: [
    HomeComponent,
    ClientsComponent,
    ProductsComponent,
    SuppliersComponent,
    UsersComponent,
    ClientListComponent,
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class PagesModule { }
