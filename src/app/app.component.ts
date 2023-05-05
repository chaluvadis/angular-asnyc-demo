import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { User } from "./models/user";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  constructor(private http: HttpClient) { }
  // approach 1
  // users: User[] = [];
  // constructor(private http: HttpClient) {
  //   this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
  //     .subscribe(data => this.users = data);
  // }
}
