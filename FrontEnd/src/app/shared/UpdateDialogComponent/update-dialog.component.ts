// update-dialog.component.ts
import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormBuilder, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { User } from '../../../../BackEnd/src/models/User';

// ...
@Component({
  selector: 'app-update-dialog',
  templateUrl: './update-dialog.component.html',
})
export class UpdateDialogComponent implements OnInit {
  mode: string = 'Update';
  buttonText: string;
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<UpdateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Define the data property here
    public dialog: MatDialog // Define the dialog property here
  ) {
    this.buttonText = data.buttonText;
  }

  openUpdateDialog(user: User) {
    const dialogRef = this.dialog.open(UpdateDialogComponent, {
      data: {
        user: user,
        buttonText: 'Update'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit() {
    this.updateForm = this.fb.group({
      name: [this.data.user.name, Validators.required],
      email: [this.data.user.email, [Validators.required, Validators.email, this.emailValidator, this.emailServiceValidator]],
      password: [this.data.user.password, [Validators.required, Validators.minLength(12)]]
    });
  }

  openDialog(): void {
    if (this.updateForm.valid) {
      // Handle the form submission here
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
