// delete-dialog.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
})
export class DeleteDialogComponent {
  private apiUrl = 'http://localhost:3000/api/users';

  constructor(
    public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private http: HttpClient) {} // Inject HttpClient here

  async validateUser(userId: string): Promise<boolean> {
    try {
      await this.http.get(`${this.apiUrl}/${userId}`).toPromise();
      return true;
    } catch (error) {
      return false;
    }
  }

  async onConfirm(): Promise<void> {
    const userExists = await this.validateUser(this.data.userId);
    if (userExists) {
      this.dialogRef.close(true);
    } else {
      // Display an error message
      console.error('The user data is wrong or this user does not exist');
    }
  }

  onCancel(): void {
    this.dialogRef.close(true);
  }
}
