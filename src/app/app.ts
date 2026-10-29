import { Component } from '@angular/core';
import { UsersData } from './users/users';



@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [ UsersData],
})
export class App {}
