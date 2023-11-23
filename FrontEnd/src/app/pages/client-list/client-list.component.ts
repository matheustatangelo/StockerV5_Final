import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Client {
  nome: string;
  email: string;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clients: Client[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Client[]>('http://localhost:3001/clients/').subscribe((data) => {
      this.clients = data;
    }, (error) => {
      console.error('Error:', error);
    });
  }
}