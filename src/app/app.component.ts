import { Component } from '@angular/core';
import { of, from, filter, range } from 'rxjs';

// using range

const numRange = range(1, 10);
const evenRange = numRange.pipe(filter((value) => value % 2 === 0));
const oddRange = numRange.pipe(filter((value) => value % 2 !== 0));
numRange.subscribe((value) => console.log(value));
evenRange.subscribe((value) => console.log('Even Number: ', value));
oddRange.subscribe((value) => console.log('Odd Number: ', value));
evenRange.subscribe((value) => console.log(value, '=>', value * 2));

// using of
const numOf = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
const evenOf = numOf.pipe(filter((value) => value % 2 === 0));
const oddOf = numOf.pipe(filter((value) => value % 2 !== 0));
numOf.subscribe((value) => console.log(value));
evenOf.subscribe((value) => console.log('Even Number: ', value));
oddOf.subscribe((value) => console.log('Odd Number: ', value));
evenOf.subscribe((value) => console.log(value, '=>', value * 2));

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {}
