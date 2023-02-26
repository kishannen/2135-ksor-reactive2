import { Component } from '@angular/core';
import { of, map, from, filter, range } from 'rxjs';

//of
const numbers$ = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
numbers$.subscribe((value) => console.log(value));

//map
numbers$
  .pipe(map((value) => value * 2))
  .pipe(filter((value) => value % 2 === 0))
  .subscribe((value) => console.log(value));

//from
const users = [
  { id: 1, name: 'Alice', age: 25 },
  { id: 2, name: 'Bob', age: 30 },
  { id: 3, name: 'Charlie', age: 35 },
  { id: 4, name: 'Dave', age: 40 },
  { id: 5, name: 'Dora', age: 45 },
  { id: 6, name: 'Boots', age: 50 },
  { id: 7, name: 'Wanwan', age: 22 },
  { id: 8, name: 'Kisses Shannen', age: 21 },
];
const users$ = from(users);
users$.subscribe((user) => console.log(user));

//filter
users$
  .pipe(filter((users) => users.age > 30))
  .pipe(
    map((users) => ({
      id: users.id,
      name: users.name.toUpperCase(),
      age: users.age * 2,
    }))
  )

  .subscribe((users) => console.log(users));

//range
const numvalue = range(1, 22);
numvalue.subscribe((value) => console.log(value));

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
