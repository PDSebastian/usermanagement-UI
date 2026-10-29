import { Component } from '@angular/core';
import { UserList } from './users/user-list';

@Component({
  selector: 'app-root',
  imports: [UserList],
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {}
