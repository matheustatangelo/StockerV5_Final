import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDialogComponent } from './UserDialogComponent/user-dialog.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import { UserFormDialogComponent } from './UserFormDialogComponent/user-form-dialog.component';
import { UserListDialogComponent } from './UserListDialogComponent/user-list-dialog.component';
import { UserReadDialogComponent } from './UserReadDialogComponent/user-read-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import {UpdateDialogComponent} from "./UpdateDialogComponent/update-dialog.component";
import {DeleteDialogComponent} from "./DeleteDialogComponent/delete-dialog.component";
import {MatButtonModule} from "@angular/material/button"; // Import HttpClientModule

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    UserDialogComponent,
    UserFormDialogComponent,
    UserListDialogComponent,
    UserReadDialogComponent,
    UpdateDialogComponent,
    DeleteDialogComponent

  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    MatTableModule,
    MatDialogModule,
    UserDialogComponent,
    UserFormDialogComponent,
    UserListDialogComponent,
    UserReadDialogComponent,
    UpdateDialogComponent,
  ],
  imports: [
    MatTableModule,
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    // Import HttpClientModule
  ],
})
export class SharedModule { }
