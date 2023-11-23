// user-form-dialog.component.ts
import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { UserService } from '../../services/userService.service';

@Component({
  selector: 'app-user-form-dialog',
  templateUrl: './user-form-dialog.component.html',
})
export class UserFormDialogComponent {

  mode: string = 'Form';
  buttonText: string;
  userForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UserFormDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService  // Inject UserService here

  ) {
    this.buttonText = data.buttonText;
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, this.emailValidator, this.emailServiceValidator]],
      password: ['', [Validators.required, Validators.minLength(12)]]
    });
  }

  openDialog(): void {
    if (this.userForm.valid) {
      this.userService.createUser(this.userForm.value).subscribe(response => {
        // Handle the response here
        this.dialogRef.close();
      });
    }
  }

  emailValidator(control: AbstractControl) {
    const email = control.value;
    if (email && email.indexOf("@") == -1) {
      return { missingAtSymbol: true };
    }
    if (email && email.indexOf(".com") == -1) {
      return { missingDotCom: true };
    }
    return null;
  }

  emailServiceValidator(control: AbstractControl) {
    const email = control.value;
    const validServices = ['outlook', 'hotmail', 'gmail'];
    if (email) {
      const domain = email.split('@')[1];
      if (domain) {
        const service = domain.split('.')[0];
        if (!validServices.includes(service)) {
          return { invalidService: true };
        }
      }
    }
    return null;
  }
}
