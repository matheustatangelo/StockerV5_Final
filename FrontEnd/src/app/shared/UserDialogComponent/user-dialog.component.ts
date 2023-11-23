// user-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
})
export class UserDialogComponent {
  userForm: FormGroup;
  buttonText: string;
  mode: string;
  dataSource: any[];

    constructor(
        private fb: FormBuilder,
        public dialogRef: MatDialogRef<UserDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private http: HttpClient
    ) {
        if (data) {
            this.mode = data.mode;
            this.buttonText = data.buttonText;
        }
      this.userForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]], // Make sure 'email' is defined here
          password: ['', Validators.required],
          // Add more form controls as needed
      });
    if (this.mode === 'List') {
      this.http.get('http://localhost:3000/users').subscribe((res: any) => {
        this.dataSource = res;
      });
    }
  }

  fetchData(): void{
    this.http.get('http://localhost:3000/users').subscribe((res: any) => {
      this.dataSource = res;
    });
  }

  openDialog(): void {
    if (this.userForm.valid) {
      // Close the dialog when the form is submitted
      this.dialogRef.close(this.userForm.value);
    }
  }
}
