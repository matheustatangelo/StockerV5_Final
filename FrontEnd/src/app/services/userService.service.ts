import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../BackEnd/src/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:4001/users'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  createUser(userData: User) {
    return this.http.post<User>(this.apiUrl, userData);
  }
}
