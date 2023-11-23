// user-list-dialog.component.ts
import { Component } from '@angular/core';

@Component({
    selector: 'app-user-list-dialog',
    templateUrl: './user-list-dialog.component.html',
})
export class UserListDialogComponent {
    mode: string = 'List';
    displayedColumns: string[] = ['name', 'email', 'password'];
    dataSource = [
        {name: 'John Doe', email: 'john.doe@example.com', password: '******'},
        // More data...
    ];
}
