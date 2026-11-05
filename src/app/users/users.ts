import { Component, computed, signal } from '@angular/core';
import { User } from '../models/user';

@Component({
  imports: [],
  selector: 'app-users',
  styleUrl: './users.css',
  templateUrl: './users.html',
})
export class UsersData {
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
    { id: 6, firstName: 'Elena', lastName: 'Nistor', email: 'elena.nistor@gmail.com', age: 29 },
    {
      id: 7,
      firstName: 'Andrei',
      lastName: 'Gheorghiu',
      email: 'andrei.gheorghiu@yahoo.com',
      age: 35,
    },
    { id: 8, firstName: 'Maria', lastName: 'Ionescu', email: 'maria.ionescu@gmail.com', age: 16 },
    { id: 9, firstName: 'Vlad', lastName: 'Coman', email: 'vlad.coman@gmail.com', age: 45 },
    {
      id: 10,
      firstName: 'Cristina',
      lastName: 'Stancu',
      email: 'cristina.stancu@yahoo.com',
      age: 22,
    },
    { id: 11, firstName: 'Stefan', lastName: 'Lupu', email: 'stefan.lupu@gmail.com', age: 50 },
    { id: 12, firstName: 'Laura', lastName: 'Dobre', email: 'laura.dobre@yahoo.com', age: 31 },
    {
      id: 13,
      firstName: 'Alexandru',
      lastName: 'Stoica',
      email: 'alexandru.stoica@gmail.com',
      age: 18,
    },
    { id: 14, firstName: 'Diana', lastName: 'Avram', email: 'diana.avram@gmail.com', age: 27 },
    {
      id: 15,
      firstName: 'Marius',
      lastName: 'Diaconescu',
      email: 'marius.diaconescu@yahoo.com',
      age: 38,
    },
  ]);

  nextId: number = 6;
  editedId = signal<number>(0);
  firstname = signal<string>('');
  lastname = signal<string>('');
  email = signal<string>('');
  age = signal<number>(0);
  canSave = computed<boolean>(() => {
    return (
      this.firstname().trim() !== '' && this.lastname().trim() !== '' && this.email().trim() !== ''
    );
  });

  averageAge = computed<number>(() => {
    if (this.users().length === 0) {
      return 0;
    }
    let sum = 0;
    for (const user of this.users()) {
      sum += user.age;
    }
    return Math.round((sum / this.users().length) * 10) / 10;
  });
  minori = computed<number>(() => {
    let ct = 0;
    for (const user of this.users()) {
      if (user.age < 18) {
        ct++;
      }
    }

    return ct;
  });

  save() {
    const newUser: User = {
      id: this.nextId,
      firstName: this.firstname(),
      lastName: this.lastname(),
      email: this.email(),
      age: this.age(),
    };
    console.log(newUser);
    this.nextId++;

    let use: User[] = this.users();
    use.push(newUser);
    this.users.update(() => use);
  }
}


