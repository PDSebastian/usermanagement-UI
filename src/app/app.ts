import { Component } from '@angular/core';
import { Users } from './users/users';

@Component({
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Users],
})
export class App {}
