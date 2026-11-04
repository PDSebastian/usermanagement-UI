import { Component, signal, computed } from '@angular/core';
import { User } from '../models/user';

@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class UsersData {
  nextId: number = 6;
  editedId = signal<number>(0);

  firstname = signal<string>('');
  lastname = signal<string>('');
  email = signal<string>('');
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

  canSave = computed<boolean>(
    () => this.firstname().trim() !== '' && this.lastname().trim() !== '' && this.age() > 0,
  );

  save(): void {
    if (this.editedId() === 0) {
      const user: User = {
        id: this.nextId,
        firstName: this.firstname(),
        lastName: this.lastname(),
        email: this.email(),
        age: this.age(),
      };
      this.nextId++;
      this.users.update((list) => [...list, user]);
    } else {
      this.users.update((list) =>
        list.map((user) =>
          user.id === this.editedId()
            ? {
                id: user.id,
                firstName: this.firstname(),
                lastName: this.lastname(),
                email: this.email(),
                age: this.age(),
              }
            : user,
        ),
      );
      this.editedId.set(0);
    }

    this.firstname.set('');
    this.lastname.set('');
    this.email.set('');
    this.age.set(0);
  }

  edit(user: User): void {
    this.editedId.set(user.id);
    this.firstname.set(user.firstName);
    this.lastname.set(user.lastName);
    this.email.set(user.email);
    this.age.set(user.age);
  }

  remove(id: number): void {
    this.users.update((list) => list.filter((user) => user.id !== id));
  }
}

