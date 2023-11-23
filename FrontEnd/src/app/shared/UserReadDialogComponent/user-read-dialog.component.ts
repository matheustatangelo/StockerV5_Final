// user-read-dialog.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-read-dialog',
  templateUrl: './user-read-dialog.component.html',
})
export class UserReadDialogComponent implements OnInit {
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['name'];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get('http://localhost:3000/users').subscribe((res: any) => {
      this.dataSource = new MatTableDataSource(res);
    });
  }

// user-read-dialog.component.ts
  applyFilter(event: KeyboardEvent) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
