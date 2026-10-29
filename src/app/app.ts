import { Component } from '@angular/core';
<<<<<<< HEAD
import { Users } from './users/users';
=======
import { UserList } from './users/user-list';
>>>>>>> 1f5fffe09f7d53fe035f87b91877b29f2ba13a3b

@Component({
  selector: 'app-root',
  imports: [UserList],
  styleUrl: './app.css',
  templateUrl: './app.html',
  imports: [Users],
})
export class App {}
