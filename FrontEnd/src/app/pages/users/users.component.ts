// users.component.ts
import { MatDialog } from '@angular/material/dialog';
import { UserFormDialogComponent } from '../../shared/UserFormDialogComponent/user-form-dialog.component';
import { UserListDialogComponent } from '../../shared/UserListDialogComponent/user-list-dialog.component';
import {UserDialogComponent} from "../../shared/UserDialogComponent/user-dialog.component";
import {UserReadDialogComponent} from "../../shared/UserReadDialogComponent/user-read-dialog.component";
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/userService.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  constructor(public dialog: MatDialog) {} // Inject MatDialog here

  ngOnInit(): void {

  }

  openListDialog() {
    this.dialog.open(UserListDialogComponent);
  }
  openUserDialog(action: string): void {
    console.log(`openUserDialog called with action: ${action}`);
    let dialogComponent;
    if (action === 'Read') {
      dialogComponent = UserReadDialogComponent;
    } else {
      dialogComponent = UserDialogComponent;
    }

    const dialogRef = this.dialog.open(dialogComponent, {
      width: '250px',
      data: { action: action }
    });

    console.log(`Dialog opened with component: ${dialogComponent.name}`);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Handle the result of the dialog here
    });
  }



  openFormDialog(buttonText: string): void {
    this.dialog.open(UserFormDialogComponent, {
      data: { buttonText: buttonText }
    });
  }

  updateDialog(){
    this.dialog.open(UserFormDialogComponent, {
      data: { buttonText: "Update" }
    });
  }

  deleteDialog(){
    this.dialog.open(UserFormDialogComponent, {
      data: { buttonText: "Delete" }
    });
  }

}
