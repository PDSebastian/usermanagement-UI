import { Component } from '@angular/core';
import {User} from '../models/user';


@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class UsersData {
  users: User[] = [
    {
      id: '3f2a91c4-8b7d-4e6a-9c25-1f0d7ba3e912',
      firstName: 'Bogdan',
      lastName: 'Alexandrescu',
      email: 'bogdan.alexandrescu@gmail.com',
      age: 41,
    },
    {
      id: 'a71b0e33-52c6-4d1f-8e07-6b9a4c2d1f58',
      firstName: 'Radu',
      lastName: 'Popescu',
      email: 'radu.popescu@gmail.com',
      age: 17,
    },
    {
      id: 'c0d84f17-9e3a-4b25-a6c8-3d7f1e0b2a94',
      firstName: 'Ana',
      lastName: 'Stefanescu',
      email: 'ana.stefanescu@yahoo.com',
      age: 19,
    },
    {
      id: 'e5b29d60-1c4f-4a87-b3e2-8f6d0a9c7b15',
      firstName: 'Ioana',
      lastName: 'Marinescu',
      email: 'ioana.marinescu@gmail.com',
      age: 32,
    },
    {
      id: '7d1c4a82-6f0e-4b39-9a5d-2e8b3c6f4d07',
      firstName: 'Mihai',
      lastName: 'Dumitru',
      email: 'mihai.dumitru@yahoo.com',
      age: 24,
    },
  ];
}

