import { Component, signal } from '@angular/core';
import {User} from '../models/user';
import { first } from 'rxjs';


@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class UsersData {
  newId: number = 6;

  firstname = signal<string>(' ');
  lastname = signal<string>(' ');
  email = signal<string>(' ');
  age = signal<number>(0);
  protected readonly users = signal<User[]>([
    {
      id: 1,
      firstName: 'Bogdan',
      lastName: 'Alexandrescu',
      email: 'bogdan.alexandrescu@gmail.com',
      age: 41,
    },
    { id: 2, firstName: 'Radu', lastName: 'Popescu', email: 'radu.popescu@gmail.com', age: 17 },
    { id: 3, firstName: 'Ana', lastName: 'Stefanescu', email: 'ana.stefanescu@yahoo.com', age: 19 },
    {
      id: 4,
      firstName: 'Ioana',
      lastName: 'Marinescu',
      email: 'ioana.marinescu@gmail.com',
      age: 32,
    },
    { id: 5, firstName: 'Mihai', lastName: 'Dumitru', email: 'mihai.dumitru@yahoo.com', age: 24 },
  ]);

  add(): void {
    const user: User = {
      id: this.newId,
      firstName: this.firstname(),
      lastName: this.lastname(),
      email: this.email(),
      age: this.age(),
    };
    console.log(this.firstname());
    this.newId++;
    this.users.update((list) => list.filter((user) => user.id !== this.newId));
  }


  remove(id: number): void {
    this.users.update((list) => list.filter((user) => user.id !== id));
  }

  protected readonly first = first;
}

